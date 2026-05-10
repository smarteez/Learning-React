import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppMetadata } from "./data/AppMetaData";
import { UsersTable } from "./components/UsersTable";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>{AppMetadata.title}</h1>
          <p>{AppMetadata.description}</p>
          <span>Version: {AppMetadata.version}</span>
          <UsersTable />
      </div>
    </div>
  </QueryClientProvider>
  );
}

export default App;
