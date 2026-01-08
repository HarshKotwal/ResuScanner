import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
// import Dashboard from "../pages/Dashboard";
// import UploadResume from "../pages/UploadResume";
// import Results from "../pages/Results";

export const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/auth", element: <Auth /> },
    // { path: "/dashboard", element: <Dashboard /> },
    // { path: "/upload", element: <UploadResume /> },
    // { path: "/results", element: <Results /> },
  ]);
