import { useGetAllUsers } from "../hooks/useGetAllUser";

export function UsersTable() {
  const { data, isPending, isError, error } = useGetAllUsers();

  if (isPending) return <div>Loading users…</div>;
  if (isError) return <div>Error: {error?.message ?? "Unknown error"}</div>;
  if (!data || data.length === 0) return <div>No users found</div>;

  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <h3>Users</h3>

      <table border={1} cellPadding={8} width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {data.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
