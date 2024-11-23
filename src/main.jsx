import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviders from "./providers/AuthProviders.jsx";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <div className="max-w-7xl mx-auto font-poppins">
            <RouterProvider router={router} />
          </div>
        </AuthProviders>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);
