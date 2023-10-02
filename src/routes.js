import { lazy } from "react";
import { FactCheck } from "@mui/icons-material";

const Login = lazy(() => import("./pages/Authentication/Login"));
const Register = lazy(() => import("./pages/Authentication/Register"));
const Home = lazy(() => import("./pages/Internal/Home"));
const Profile = lazy(() => import("./pages/Internal/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes = [
  {
    path: "/",
    element: Home,
    title: "Home",
    tab: true,
    icon: FactCheck,
    getLastRoute: false,
  },
  {
    path: "/login",
    element: Login,
    title: "Login",
    icon: null,
    getLastRoute: false,
  },
  {
    path: "/registrar",
    element: Register,
    title: "Registro",
    icon: null,
    getLastRoute: false,
  },
  {
    path: "/perfil",
    element: Profile,
    title: "Perfil",
    icon: null,
    getLastRoute: true,
    getLastRoute: false,
  },
  {
    path: "*",
    element: NotFound,
    title: "Página não encontrada",
    icon: null,
    getLastRoute: false,
  },
];
export default routes;
