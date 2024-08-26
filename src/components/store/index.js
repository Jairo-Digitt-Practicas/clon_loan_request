/** @format */

import { create } from "zustand";

const useStore = create((set) => ({
    name: "",
    setName: (newName) => {
        console.log("nuevo nombre:", newName);
        set({ name: newName });
    },
}));

export default useStore;
