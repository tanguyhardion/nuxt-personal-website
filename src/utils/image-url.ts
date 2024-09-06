import { computed } from "vue";

export function getImageUrl(path: string): string {
  return computed(() => new URL(`/src/assets/images/${path}`, import.meta.url).href).value;
}
