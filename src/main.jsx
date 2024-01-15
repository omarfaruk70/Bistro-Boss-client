import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
// import { AuthContext } from "../Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     {/* <AuthContext> */}
    <HelmetProvider>
     <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
     {/* </AuthContext> */}
  </React.StrictMode>
);
