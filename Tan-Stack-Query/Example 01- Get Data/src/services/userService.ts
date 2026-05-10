import { API } from "../endpoints/api";
import type { User } from "../types/User";


export async function getAllUsers(): Promise<User[]> {
  const res = await fetch(API.getAllUsers());

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return (await res.json()) as User[];
}
