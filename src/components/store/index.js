/** @format */

import { create } from "zustand";

const useStore = create((set) => ({
    name: "",
    lastName: "",
    secondLastName: "",
    phone: "",
    curp: "",
    email: "",
    setName: (name) => set(() => ({ name })),
    setLastName: (lastName) => set(() => ({ lastName })),
    setSecondLastName: (secondLastName) => set(() => ({ secondLastName })),
    setPhone: (phone) => set(() => ({ phone })),
    setCurp: (curp) => set(() => ({ curp })),
    setEmail: (email) => set(() => ({ email })),
}));

export default useStore;
