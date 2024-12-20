import { ref } from "vue";

const isSubMenuVisible = ref(false);
const isOpen = ref(false);

export function useMenu() {
  return {
    isSubMenuVisible,
    isOpen,
  };
}
