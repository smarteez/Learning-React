import { useQuery } from "@tanstack/react-query";
import type { Book } from "../../Schemas/Book.schemas";
import { GetAllBooks, GetBookById } from "../../Services/Book.service";

// PRIVATE
function useBooks() {
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: GetAllBooks,
    staleTime: 1000 * 60 * 5,
  });
}

export function useBookById(id: number) {
  return useQuery<Book | null>({
    queryKey: ["books", id],
    queryFn: () => GetBookById(id),
    gcTime:0,
  });
}


export function useBookByStatusAndBookTitle(
  statusId: number,
  bookTitle: string | null = null
) {
  const { data, isLoading, isError } = useBooks();

  const filtered: Book[] =
    data
      ?.filter((p) => {
        const matchesStatus = p.status.id === statusId;
        const matchesName = bookTitle
          ? p.title.toLowerCase().includes(bookTitle.toLowerCase())
          : true;

        return matchesStatus && matchesName;
      })
      .sort((a, b) => a.title.localeCompare(b.title)) ?? [];
  return {
    data: filtered,
    isLoading,
    isError,
  };
}


