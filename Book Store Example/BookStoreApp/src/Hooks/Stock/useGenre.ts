import { useQuery } from "@tanstack/react-query";
import { GetAllGenres, GetGenreById } from "../../Services/Genre.service";
import type { Genre } from "../../Schemas/Genre.schemas";

export function useGenre() {
  return useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: GetAllGenres,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useGenreById(id: number, options: any = {}) {
  return useQuery({
    queryKey: ["genre", id],
    queryFn: () => GetGenreById(id),
    enabled: options.enabled ?? true,
  });
}
