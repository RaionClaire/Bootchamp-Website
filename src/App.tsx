import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import SuccessStories from "./pages/SuccessStories";
import Events from "./pages/Events";
import Community from "./pages/Community";
import Login from "./pages/login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/stories" element={<SuccessStories />} />
          <Route path="/events" element={<Events />} />
          <Route
            path="/community"
            element={<Community />}
          />

          {/* --- RUTE AUTENTIKASI --- */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/signup"
            element={
              <Placeholder
                title="Daftar Akun"
                description="Halaman ini sedang dalam pembuatan."
              />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Placeholder
                title="Lupa Password"
                description="Halaman ini sedang dalam pembuatan."
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;