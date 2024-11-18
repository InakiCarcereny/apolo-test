import { create } from "zustand";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
}

type ModalType = "favorites";

export const useModalStore = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  openModal: (type) => set({ isOpen: true, type }),
  closeModal: () => set({ isOpen: false }),
}));
