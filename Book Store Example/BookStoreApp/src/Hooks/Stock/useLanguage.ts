import { useQuery } from "@tanstack/react-query";
import { GetAllLanguages, GetLanguageById } from "../../Services/Language.service";
import type { Language } from "../../Schemas/Language.schema";

export function useLanguage() {
  return useQuery<Language[]>({
    queryKey: ["languages"],
    queryFn: GetAllLanguages,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useLanguageById(id: number, options: any = {}) {
  return useQuery({
    queryKey: ["language", id],
    queryFn: () => GetLanguageById(id),
    enabled: options.enabled ?? true,
  });
}
