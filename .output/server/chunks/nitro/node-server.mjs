globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import { promises } from 'fs';
import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return decodeURI(parseURL(event.req.originalUrl || event.req.url).pathname).replace(/\/$/, "/index");
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"164-RYP5Z2Xqry3mELhOa/KLaG8+OOA\"",
    "mtime": "2023-05-31T16:48:22.047Z",
    "path": "../public/index.html"
  },
  "/200/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"164-RYP5Z2Xqry3mELhOa/KLaG8+OOA\"",
    "mtime": "2023-05-31T16:48:22.048Z",
    "path": "../public/200/index.html"
  },
  "/404/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"164-RYP5Z2Xqry3mELhOa/KLaG8+OOA\"",
    "mtime": "2023-05-31T16:48:22.049Z",
    "path": "../public/404/index.html"
  },
  "/_nuxt/Alert-ea06a089.mjs": {
    "type": "application/javascript",
    "etag": "\"1a70-bKWh9d2NcVFhEtthnsPj+TPIRmo\"",
    "mtime": "2023-05-31T16:48:18.671Z",
    "path": "../public/_nuxt/Alert-ea06a089.mjs"
  },
  "/_nuxt/Avatar-a2a8fb7e.mjs": {
    "type": "application/javascript",
    "etag": "\"11f2-18Vevs2P176EZlPDVB9d8inxfug\"",
    "mtime": "2023-05-31T16:48:18.659Z",
    "path": "../public/_nuxt/Avatar-a2a8fb7e.mjs"
  },
  "/_nuxt/BreadcrumbItem-d842e664.mjs": {
    "type": "application/javascript",
    "etag": "\"11e3-Wv7AmHWWI540uqsDHuIEO9pWybg\"",
    "mtime": "2023-05-31T16:48:18.627Z",
    "path": "../public/_nuxt/BreadcrumbItem-d842e664.mjs"
  },
  "/_nuxt/CourseList-311e2910.mjs": {
    "type": "application/javascript",
    "etag": "\"dfc-ISwH87zlmhc3DmqokOuMk6k3jio\"",
    "mtime": "2023-05-31T16:48:18.566Z",
    "path": "../public/_nuxt/CourseList-311e2910.mjs"
  },
  "/_nuxt/CourseSkeleton-aeaa60b6.mjs": {
    "type": "application/javascript",
    "etag": "\"321-ZsaeW4kU0RKoN22qHSo5orrWk/4\"",
    "mtime": "2023-05-31T16:48:18.505Z",
    "path": "../public/_nuxt/CourseSkeleton-aeaa60b6.mjs"
  },
  "/_nuxt/Divider-96cbb6d0.mjs": {
    "type": "application/javascript",
    "etag": "\"a62-8NCIo6Rwi3zshb76NDqvbw+f0tM\"",
    "mtime": "2023-05-31T16:48:18.447Z",
    "path": "../public/_nuxt/Divider-96cbb6d0.mjs"
  },
  "/_nuxt/Footer-4062071b.mjs": {
    "type": "application/javascript",
    "etag": "\"cc-h7kdyaONHt/S0jRWurd187dmVxU\"",
    "mtime": "2023-05-31T16:48:18.356Z",
    "path": "../public/_nuxt/Footer-4062071b.mjs"
  },
  "/_nuxt/FormItem-38aec32c.mjs": {
    "type": "application/javascript",
    "etag": "\"7ec9-MFwOGKU3gb5gW/Dpqi/93swv4ZE\"",
    "mtime": "2023-05-31T16:48:18.289Z",
    "path": "../public/_nuxt/FormItem-38aec32c.mjs"
  },
  "/_nuxt/Grid-87bc6c3f.mjs": {
    "type": "application/javascript",
    "etag": "\"15e5-JinWOhoweJBwxDkDQsT9DATVlgE\"",
    "mtime": "2023-05-31T16:48:18.253Z",
    "path": "../public/_nuxt/Grid-87bc6c3f.mjs"
  },
  "/_nuxt/Group-1cd53dfb.mjs": {
    "type": "application/javascript",
    "etag": "\"2263-zF7xi7C8FXfnBxCIsUcPOqFOSPY\"",
    "mtime": "2023-05-31T16:48:18.198Z",
    "path": "../public/_nuxt/Group-1cd53dfb.mjs"
  },
  "/_nuxt/HotCourseList-2391f2df.mjs": {
    "type": "application/javascript",
    "etag": "\"328-0erOsSidiUCb7LaHdpaIQqPvTv4\"",
    "mtime": "2023-05-31T16:48:18.175Z",
    "path": "../public/_nuxt/HotCourseList-2391f2df.mjs"
  },
  "/_nuxt/Icon-8b068cec.mjs": {
    "type": "application/javascript",
    "etag": "\"7bf-hiVGgY/1aCJb2ededWQX8tsEOoU\"",
    "mtime": "2023-05-31T16:48:18.163Z",
    "path": "../public/_nuxt/Icon-8b068cec.mjs"
  },
  "/_nuxt/Image-ec1fc6fc.mjs": {
    "type": "application/javascript",
    "etag": "\"4a5a-+IlmxV8aJTz0dKygzUaEczM/D8o\"",
    "mtime": "2023-05-31T16:48:18.154Z",
    "path": "../public/_nuxt/Image-ec1fc6fc.mjs"
  },
  "/_nuxt/Input-16e77b41.mjs": {
    "type": "application/javascript",
    "etag": "\"82ea-RCZHMEA2lN026UsfbfF6HNsW7Ro\"",
    "mtime": "2023-05-31T16:48:18.141Z",
    "path": "../public/_nuxt/Input-16e77b41.mjs"
  },
  "/_nuxt/InputGroup-0af29b12.mjs": {
    "type": "application/javascript",
    "etag": "\"94d-+SeIYFFzc3mRZGKchYxO8SfMxKQ\"",
    "mtime": "2023-05-31T16:48:18.133Z",
    "path": "../public/_nuxt/InputGroup-0af29b12.mjs"
  },
  "/_nuxt/Menu-d21cd997.mjs": {
    "type": "application/javascript",
    "etag": "\"63f-PzXhrBac95dbQRmPw8s5204AkxQ\"",
    "mtime": "2023-05-31T16:48:18.122Z",
    "path": "../public/_nuxt/Menu-d21cd997.mjs"
  },
  "/_nuxt/Pagination-2bc07178.mjs": {
    "type": "application/javascript",
    "etag": "\"138c2-7ZarfNye+X+t3WVs8L7egG4LzLI\"",
    "mtime": "2023-05-31T16:48:18.115Z",
    "path": "../public/_nuxt/Pagination-2bc07178.mjs"
  },
  "/_nuxt/Popover-ea85df19.mjs": {
    "type": "application/javascript",
    "etag": "\"88fa-YD773jJAmzj4jilF3XS3jedeH18\"",
    "mtime": "2023-05-31T16:48:18.101Z",
    "path": "../public/_nuxt/Popover-ea85df19.mjs"
  },
  "/_nuxt/PostList-576fe246.mjs": {
    "type": "application/javascript",
    "etag": "\"d1b-IfvXO0R11AH/lnM2TA94r6KWuSg\"",
    "mtime": "2023-05-31T16:48:18.083Z",
    "path": "../public/_nuxt/PostList-576fe246.mjs"
  },
  "/_nuxt/Price-f7b39efa.mjs": {
    "type": "application/javascript",
    "etag": "\"201-/Vch7Hel83E7iHeCJbtGhQ+d6Mc\"",
    "mtime": "2023-05-31T16:48:18.063Z",
    "path": "../public/_nuxt/Price-f7b39efa.mjs"
  },
  "/_nuxt/Progress-258a87c4.mjs": {
    "type": "application/javascript",
    "etag": "\"35f3-mo/IDXylj0nPKzhJ/IFfcsKXFKY\"",
    "mtime": "2023-05-31T16:48:18.047Z",
    "path": "../public/_nuxt/Progress-258a87c4.mjs"
  },
  "/_nuxt/SendCode-99f1662e.mjs": {
    "type": "application/javascript",
    "etag": "\"478-/tirx7tAld+ox+D9sQrcrivfc2w\"",
    "mtime": "2023-05-31T16:48:18.033Z",
    "path": "../public/_nuxt/SendCode-99f1662e.mjs"
  },
  "/_nuxt/Tab-9b83bf34.mjs": {
    "type": "application/javascript",
    "etag": "\"21b-q7LPy0br+KflEMtNirjMv3oDKGw\"",
    "mtime": "2023-05-31T16:48:18.019Z",
    "path": "../public/_nuxt/Tab-9b83bf34.mjs"
  },
  "/_nuxt/Tag-06ce51bd.mjs": {
    "type": "application/javascript",
    "etag": "\"261a-GkTNgdN/m8rUZXmgnU0mPXz6J6w\"",
    "mtime": "2023-05-31T16:48:18.007Z",
    "path": "../public/_nuxt/Tag-06ce51bd.mjs"
  },
  "/_nuxt/ThumbsUpSharp-92759cd9.mjs": {
    "type": "application/javascript",
    "etag": "\"23c-SiTNXvYl1A6A3HgLgRO0+fty43M\"",
    "mtime": "2023-05-31T16:48:17.996Z",
    "path": "../public/_nuxt/ThumbsUpSharp-92759cd9.mjs"
  },
  "/_nuxt/TimeBox-caea4e56.mjs": {
    "type": "application/javascript",
    "etag": "\"35b-1Z/h+tnPSwthVDYLtBhEzwVeScA\"",
    "mtime": "2023-05-31T16:48:17.980Z",
    "path": "../public/_nuxt/TimeBox-caea4e56.mjs"
  },
  "/_nuxt/_book_id_-cec475a3.mjs": {
    "type": "application/javascript",
    "etag": "\"87e-uqOZK5HXbjFOlSw3aHT2qfNRj0Y\"",
    "mtime": "2023-05-31T16:48:17.968Z",
    "path": "../public/_nuxt/_book_id_-cec475a3.mjs"
  },
  "/_nuxt/_id_-14519c30.mjs": {
    "type": "application/javascript",
    "etag": "\"36a-VYVWKM03rxO4eLCPw6RImubTA/I\"",
    "mtime": "2023-05-31T16:48:17.953Z",
    "path": "../public/_nuxt/_id_-14519c30.mjs"
  },
  "/_nuxt/_id_-6b12759b.mjs": {
    "type": "application/javascript",
    "etag": "\"111b2-VxVP+uXxHoCqg9bQZfpWxARaEOM\"",
    "mtime": "2023-05-31T16:48:17.938Z",
    "path": "../public/_nuxt/_id_-6b12759b.mjs"
  },
  "/_nuxt/_id_-977ad36f.mjs": {
    "type": "application/javascript",
    "etag": "\"13bb-dLzMwDJyucdCPUlOfinI3IbTaSk\"",
    "mtime": "2023-05-31T16:48:17.923Z",
    "path": "../public/_nuxt/_id_-977ad36f.mjs"
  },
  "/_nuxt/_id_-d758a02f.mjs": {
    "type": "application/javascript",
    "etag": "\"1d14-8hWPs8OOjATQQBCMF1xFC7ExMY8\"",
    "mtime": "2023-05-31T16:48:17.910Z",
    "path": "../public/_nuxt/_id_-d758a02f.mjs"
  },
  "/_nuxt/_page_-2f2eb7fa.mjs": {
    "type": "application/javascript",
    "etag": "\"a9b-uGN5BJFYoWslgRShyWrMMOsz8uo\"",
    "mtime": "2023-05-31T16:48:17.899Z",
    "path": "../public/_nuxt/_page_-2f2eb7fa.mjs"
  },
  "/_nuxt/_page_-387d3118.mjs": {
    "type": "application/javascript",
    "etag": "\"1124-gya7/Tco65NzIQ1cTymaVEIXERs\"",
    "mtime": "2023-05-31T16:48:17.885Z",
    "path": "../public/_nuxt/_page_-387d3118.mjs"
  },
  "/_nuxt/_page_-4573fdd8.mjs": {
    "type": "application/javascript",
    "etag": "\"c90-SBnbbANFPYQZhLDxLa7G7yY4ATM\"",
    "mtime": "2023-05-31T16:48:17.873Z",
    "path": "../public/_nuxt/_page_-4573fdd8.mjs"
  },
  "/_nuxt/_page_-708318d6.mjs": {
    "type": "application/javascript",
    "etag": "\"c23-S6O5tzAOO7UB6MQwk0PE4dgN33I\"",
    "mtime": "2023-05-31T16:48:17.860Z",
    "path": "../public/_nuxt/_page_-708318d6.mjs"
  },
  "/_nuxt/_page_-a90d2e78.mjs": {
    "type": "application/javascript",
    "etag": "\"a2d-nABwf3/d5HiKJ7g4+q38hjeQ4BU\"",
    "mtime": "2023-05-31T16:48:17.840Z",
    "path": "../public/_nuxt/_page_-a90d2e78.mjs"
  },
  "/_nuxt/_page_-b9ac5657.mjs": {
    "type": "application/javascript",
    "etag": "\"b31-TddA5Yi90Oh5OduTW05cjZ7ySVk\"",
    "mtime": "2023-05-31T16:48:17.825Z",
    "path": "../public/_nuxt/_page_-b9ac5657.mjs"
  },
  "/_nuxt/_page_-ce96a57a.mjs": {
    "type": "application/javascript",
    "etag": "\"6ed-f+jueFINRWNVc+zpt8IMC7MggDw\"",
    "mtime": "2023-05-31T16:48:17.813Z",
    "path": "../public/_nuxt/_page_-ce96a57a.mjs"
  },
  "/_nuxt/_page_-d02f066b.mjs": {
    "type": "application/javascript",
    "etag": "\"b39-KjXHiYDotlghNG7XGobtQqUCnpw\"",
    "mtime": "2023-05-31T16:48:17.802Z",
    "path": "../public/_nuxt/_page_-d02f066b.mjs"
  },
  "/_nuxt/_page_-d5c06bbd.mjs": {
    "type": "application/javascript",
    "etag": "\"d46-7+ZUy8DxttKBurBVKoDgwPJOesA\"",
    "mtime": "2023-05-31T16:48:17.787Z",
    "path": "../public/_nuxt/_page_-d5c06bbd.mjs"
  },
  "/_nuxt/_page_-fad3b051.mjs": {
    "type": "application/javascript",
    "etag": "\"ca2-4anUBmLkPH1AabgRnmQleh0cf5k\"",
    "mtime": "2023-05-31T16:48:17.774Z",
    "path": "../public/_nuxt/_page_-fad3b051.mjs"
  },
  "/_nuxt/auth-7ab524d3.mjs": {
    "type": "application/javascript",
    "etag": "\"1d4-GyyuzuS3P1mq2bsWTlV+ujBJl0c\"",
    "mtime": "2023-05-31T16:48:17.755Z",
    "path": "../public/_nuxt/auth-7ab524d3.mjs"
  },
  "/_nuxt/bindphone-4bc58378.mjs": {
    "type": "application/javascript",
    "etag": "\"862-vhi4oPzeiKtnleKaGCMQmR5dd5I\"",
    "mtime": "2023-05-31T16:48:17.741Z",
    "path": "../public/_nuxt/bindphone-4bc58378.mjs"
  },
  "/_nuxt/book-479372d1.mjs": {
    "type": "application/javascript",
    "etag": "\"da-TMWRcmuiGRFguK9Afs3Ky1ICj6c\"",
    "mtime": "2023-05-31T16:48:17.725Z",
    "path": "../public/_nuxt/book-479372d1.mjs"
  },
  "/_nuxt/common-39bc1520.mjs": {
    "type": "application/javascript",
    "etag": "\"16d-26oY/xtwTnUFgpN/k7jYSYG9mpE\"",
    "mtime": "2023-05-31T16:48:17.706Z",
    "path": "../public/_nuxt/common-39bc1520.mjs"
  },
  "/_nuxt/create-f83f90a7.mjs": {
    "type": "application/javascript",
    "etag": "\"1dbc-3ghUmy08Q9040A8ytLLBbBHbd4Y\"",
    "mtime": "2023-05-31T16:48:17.692Z",
    "path": "../public/_nuxt/create-f83f90a7.mjs"
  },
  "/_nuxt/createorder-468baf76.mjs": {
    "type": "application/javascript",
    "etag": "\"15ad-AZgkaZxrXx/Ycm684otJuDPCwQc\"",
    "mtime": "2023-05-31T16:48:17.677Z",
    "path": "../public/_nuxt/createorder-468baf76.mjs"
  },
  "/_nuxt/createorder-7a2ebf49.mjs": {
    "type": "application/javascript",
    "etag": "\"18c-04RkPjB5mUN9uwU9PbJP/zqR2T8\"",
    "mtime": "2023-05-31T16:48:17.664Z",
    "path": "../public/_nuxt/createorder-7a2ebf49.mjs"
  },
  "/_nuxt/default-c869a886.mjs": {
    "type": "application/javascript",
    "etag": "\"b42f-VhMB5jJS6nn+GmKKHBCo2hYmjVA\"",
    "mtime": "2023-05-31T16:48:17.653Z",
    "path": "../public/_nuxt/default-c869a886.mjs"
  },
  "/_nuxt/default.b1d49ded.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"727-p7aTmqBbGd7lbZp6kZnlV1Gqzao\"",
    "mtime": "2023-05-31T16:48:17.639Z",
    "path": "../public/_nuxt/default.b1d49ded.css"
  },
  "/_nuxt/edit-5c9e6ad6.mjs": {
    "type": "application/javascript",
    "etag": "\"d513-Akf5s5eDerQMAJ0ehYr6y7+yxWE\"",
    "mtime": "2023-05-31T16:48:17.622Z",
    "path": "../public/_nuxt/edit-5c9e6ad6.mjs"
  },
  "/_nuxt/entry-21db2f40.mjs": {
    "type": "application/javascript",
    "etag": "\"5432b-44tDeK55nY7kydPb/hp5IAM/QJU\"",
    "mtime": "2023-05-31T16:48:17.608Z",
    "path": "../public/_nuxt/entry-21db2f40.mjs"
  },
  "/_nuxt/entry.13258d29.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f82-sS/fkwuOuz2saRxftUEtCcx4iSE\"",
    "mtime": "2023-05-31T16:48:17.597Z",
    "path": "../public/_nuxt/entry.13258d29.css"
  },
  "/_nuxt/forget-8eeeeecd.mjs": {
    "type": "application/javascript",
    "etag": "\"d0d-T+EvzrZhqkrRzwUIXgmZoQGY8c4\"",
    "mtime": "2023-05-31T16:48:17.582Z",
    "path": "../public/_nuxt/forget-8eeeeecd.mjs"
  },
  "/_nuxt/get-bc1ef6a5.mjs": {
    "type": "application/javascript",
    "etag": "\"52d-VjMPvxd1AT1J2LF3VcwRT159HAo\"",
    "mtime": "2023-05-31T16:48:17.570Z",
    "path": "../public/_nuxt/get-bc1ef6a5.mjs"
  },
  "/_nuxt/get-slot-f07f150d.mjs": {
    "type": "application/javascript",
    "etag": "\"5b-nOfU5mgxjjfjfGzbkr9VXZzOrp4\"",
    "mtime": "2023-05-31T16:48:17.555Z",
    "path": "../public/_nuxt/get-slot-f07f150d.mjs"
  },
  "/_nuxt/index-1d09579b.mjs": {
    "type": "application/javascript",
    "etag": "\"1e6-tpCR1y/3vvpaZ88nJFYuf1cbeAc\"",
    "mtime": "2023-05-31T16:48:17.535Z",
    "path": "../public/_nuxt/index-1d09579b.mjs"
  },
  "/_nuxt/index-a38068aa.mjs": {
    "type": "application/javascript",
    "etag": "\"61b2-RjZigIiV5CenplptSDblrhFhkH0\"",
    "mtime": "2023-05-31T16:48:17.519Z",
    "path": "../public/_nuxt/index-a38068aa.mjs"
  },
  "/_nuxt/list-28c5375d.mjs": {
    "type": "application/javascript",
    "etag": "\"1aa-gmW3j8WTCq7XogMtwxEhbettowc\"",
    "mtime": "2023-05-31T16:48:17.503Z",
    "path": "../public/_nuxt/list-28c5375d.mjs"
  },
  "/_nuxt/login-8ffa4bce.mjs": {
    "type": "application/javascript",
    "etag": "\"1114-uQOJVMAxwT9Pv1bfNhmcBeyDKuc\"",
    "mtime": "2023-05-31T16:48:17.487Z",
    "path": "../public/_nuxt/login-8ffa4bce.mjs"
  },
  "/_nuxt/login-f488f243.mjs": {
    "type": "application/javascript",
    "etag": "\"19b-Gz0QSUDAfFWPHpAHzpMH4OyKoBQ\"",
    "mtime": "2023-05-31T16:48:17.472Z",
    "path": "../public/_nuxt/login-f488f243.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"5b86-+KCvJshyv/ZTSH1Sv+z3A2dpWi0\"",
    "mtime": "2023-05-31T16:48:17.458Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/next-frame-once-08317937.mjs": {
    "type": "application/javascript",
    "etag": "\"b2-Myu6QZ5/wmBsu8mp4MACqBhBixM\"",
    "mtime": "2023-05-31T16:48:17.445Z",
    "path": "../public/_nuxt/next-frame-once-08317937.mjs"
  },
  "/_nuxt/only-visitor-ea8bd455.mjs": {
    "type": "application/javascript",
    "etag": "\"f3-ccSlHvall6zqWHxd7jiDxcACpQ8\"",
    "mtime": "2023-05-31T16:48:17.432Z",
    "path": "../public/_nuxt/only-visitor-ea8bd455.mjs"
  },
  "/_nuxt/order-2a28a7fd.mjs": {
    "type": "application/javascript",
    "etag": "\"22b-U0BDfvexOyIKtzdu0/jATPgh+20\"",
    "mtime": "2023-05-31T16:48:17.422Z",
    "path": "../public/_nuxt/order-2a28a7fd.mjs"
  },
  "/_nuxt/other-224d9673.mjs": {
    "type": "application/javascript",
    "etag": "\"331-vahS6GW1hrgFfMgEsSSjiD6KMXk\"",
    "mtime": "2023-05-31T16:48:17.407Z",
    "path": "../public/_nuxt/other-224d9673.mjs"
  },
  "/_nuxt/password-57d8a1a0.mjs": {
    "type": "application/javascript",
    "etag": "\"ae6-IsXfg6EaQi/SAqAINlBH6EuF13c\"",
    "mtime": "2023-05-31T16:48:17.394Z",
    "path": "../public/_nuxt/password-57d8a1a0.mjs"
  },
  "/_nuxt/pay-4d508e52.mjs": {
    "type": "application/javascript",
    "etag": "\"10e2-k9IfMGNhhqAmrESRmyGwhr30KRg\"",
    "mtime": "2023-05-31T16:48:17.376Z",
    "path": "../public/_nuxt/pay-4d508e52.mjs"
  },
  "/_nuxt/search-2914b900.mjs": {
    "type": "application/javascript",
    "etag": "\"13d-tTWC4vDrvjfX4mMYBUIJghrVDdg\"",
    "mtime": "2023-05-31T16:48:17.362Z",
    "path": "../public/_nuxt/search-2914b900.mjs"
  },
  "/_nuxt/use-locale-d1b818a5.mjs": {
    "type": "application/javascript",
    "etag": "\"2640-kxZiIyeNJXbm5XDchmUI2u3DYag\"",
    "mtime": "2023-05-31T16:48:17.349Z",
    "path": "../public/_nuxt/use-locale-d1b818a5.mjs"
  },
  "/_nuxt/use-merged-state-aa6f3d5b.mjs": {
    "type": "application/javascript",
    "etag": "\"1f4-zmOvaguXYb8o9VjV9iA9reiTVCw\"",
    "mtime": "2023-05-31T16:48:17.335Z",
    "path": "../public/_nuxt/use-merged-state-aa6f3d5b.mjs"
  },
  "/_nuxt/user-dab2ebdf.mjs": {
    "type": "application/javascript",
    "etag": "\"641-jDrOzqPmyNeWjNCXoBQ0a9EJeVo\"",
    "mtime": "2023-05-31T16:48:17.311Z",
    "path": "../public/_nuxt/user-dab2ebdf.mjs"
  },
  "/_nuxt/utils-4e919375.mjs": {
    "type": "application/javascript",
    "etag": "\"3c9-RixImhTM5BmNtV0HB1pffwXe2ZU\"",
    "mtime": "2023-05-31T16:48:17.288Z",
    "path": "../public/_nuxt/utils-4e919375.mjs"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _f4b49z = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_oNRKMg = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_oNRKMg, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_oNRKMg, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
