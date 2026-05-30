import { useQuery } from "@tanstack/react-query";
import type { Book } from "../../Schemas/Book.schemas";
import { GetAllBooks, GetBookById } from "../../Services/Book.service";

// PRIVATE
function useBooks() {
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: GetAllBooks,
    //staleTime: 1000 * 60 * 5,
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
  bookTitle: string | null = null,
  genreId: number,
  languageId: number,
  rating: number
) {
  const { data, isLoading, isError } = useBooks();

  const filtered: Book[] =
    data
      ?.filter((p) => {
        // Pre-calc values
        const title = p.title.toLowerCase();
        const search = bookTitle?.toLowerCase() ?? "";

        // --- STATUS RULE ---
        const matchesStatus = p.status.id === statusId;

        // --- TITLE RULE ---
        const matchesName = search
          ? title.includes(search)
          : true;

        // --- GENRE RULE ---
        // Ignore if genreId is 0 or null
        const matchesGenre =
          genreId && genreId !== 0
            ? p.genre.id === genreId
            : true;

        // --- LANGUAGE RULE ---
        // Ignore if languageId is 0 or null
        const matchesLanguage =
          languageId && languageId !== 0
            ? p.language.id === languageId
            : true;

        // --- RATING RULE (exact match using rounded rating) ---
        const roundedRating = Math.round(p.rating);
        const matchesRating =
          rating && rating !== 0
            ? roundedRating === rating
            : true;

        return (
          matchesStatus &&
          matchesName &&
          matchesGenre &&
          matchesLanguage &&
          matchesRating
        );
      })
      .sort((a, b) => a.title.localeCompare(b.title)) ?? [];

  return {
    data: filtered,
    isLoading,
    isError,
  };
}



