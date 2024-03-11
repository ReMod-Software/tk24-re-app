import { useRuntimeConfig } from "nuxt/app";
import PocketBase from "pocketbase"
const env = useRuntimeConfig();
export const pb = new PocketBase(env.pocketbaseUrl);
