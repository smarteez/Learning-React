import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "../Components/NavBar"
import AppRoutes from "../Routes/AppRoutes";
const queryClient = new QueryClient();
const App = () => {


  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;