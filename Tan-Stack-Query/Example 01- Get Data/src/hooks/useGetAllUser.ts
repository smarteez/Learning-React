import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/User";
import { getAllUsers } from "../services/userService";

export function useGetAllUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
}


