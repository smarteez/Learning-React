import { create } from "zustand";
import type { Book } from "../Schemas/Book.schemas";

interface BookStoreState {
  selectedBook: Book | null;
  setSelectedBook: (book: Book) => void;
  clearSelectedBook: () => void;
}

export const useBookStore = create<BookStoreState>((set) => ({
  selectedBook: null,

  setSelectedBook: (book) => set({ selectedBook: book }),

  clearSelectedBook: () => set({ selectedBook: null }),
}));
