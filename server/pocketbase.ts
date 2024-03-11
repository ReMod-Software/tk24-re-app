import { useRuntimeConfig } from "nuxt/app";
const env = useRuntimeConfig();
import PocketBase from "pocketbase"
export const pb = new PocketBase(env.pocketbaseUrl);