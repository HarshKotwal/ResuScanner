import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Upload from "../pages/Upload";

export const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/auth", element: <Auth /> },
    { path: "/upload", element: <Upload /> },
  ]);
