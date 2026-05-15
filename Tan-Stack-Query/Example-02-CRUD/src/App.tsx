import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SideMenu } from "./components/SideMenu";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SearchAndFilterBar } from "./components/SearchAndFilterBar";
import "./App.css";


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SideMenu />
      <div className="main-content">
        <SearchAndFilterBar />
      </div>
    </QueryClientProvider>
  );
}


export default App;