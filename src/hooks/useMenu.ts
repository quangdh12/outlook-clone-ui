import { create } from "zustand";

type MenuStore = {
    isOpen: boolean;
    onToggle: (open: boolean) => void;
};

export const useMenu = create<MenuStore>((set) => ({
    isOpen: true,
    onToggle: (open: boolean) => set({ isOpen: !open }),
}));
