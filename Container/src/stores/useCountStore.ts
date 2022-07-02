import create from "zustand";

type UseCountStore = {
  value: number;
  increment: () => void;
  decrement: () => void;
};

const useCountStore = create<UseCountStore>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
}));

export default useCountStore;
