/** @format */

import { create } from "zustand";

const useStore = create((set) => ({
    name: "",
    lastName: "",
    secondLastName: "",
    phone: "",
    curp: "",
    email: "",
    id: "",
    setName: (name) => set(() => ({ name })),
    setLastName: (lastName) => set(() => ({ lastName })),
    setSecondLastName: (secondLastName) => set(() => ({ secondLastName })),
    setPhone: (phone) => set(() => ({ phone })),
    setCurp: (curp) => set(() => ({ curp })),
    setEmail: (email) => set(() => ({ email })),
    setId: (id) => set(() => ({ id })),
    saveAllUserData: (data) =>
        set((initialState) => {
            console.log("Estado inicial:", initialState, data);
            return {
                ...initialState,
                ...data,
            };
        }),
}));

export default useStore;
