import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useHotel = create(
  persist((set) => ({
    test: "this is test",
    hotel: "",
    setHotel: (val) => set({ hotel: val }),
  }),
  {
    name: 'hotel-name', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  },
)
);
