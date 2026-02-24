import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Protocols from "./pages/Protocols";
import CategoryPage from "./pages/CategoryPage";
import ProtocolPage from "./pages/ProtocolPage";
import FinalTest from "./pages/FinalTest";
import Progress from "./pages/Progress";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:locale" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="protocols" element={<Protocols />} />
            <Route path="protocols/:category" element={<CategoryPage />} />
            <Route path="protocols/:category/:protocol" element={<ProtocolPage />} />
            <Route path="final-test" element={<FinalTest />} />
            <Route path="progress" element={<Progress />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
