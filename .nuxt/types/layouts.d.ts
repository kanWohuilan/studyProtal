import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "login"
declare module "/Users/home/Downloads/nuxt3-edu-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}