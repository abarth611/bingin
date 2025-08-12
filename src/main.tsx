import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FrontPage } from "./pages/FrontPage/FrontPage.tsx";
import { DetailPage } from "./pages/DetailPage/DetailPage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/movie/:movie" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
