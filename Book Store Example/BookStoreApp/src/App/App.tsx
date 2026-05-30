import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import NavBar from "../Components/NavBar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Outlet />   {/* TanStack Router renders pages here */}
    </QueryClientProvider>
  );
};

export default App;
