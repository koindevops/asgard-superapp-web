import PATH_URL from "./path";
import Home from "../page/Home";
import MainLayout from "../layouts/MainLayout";
import KoinP2p from "../page/Koinp2p";
import KoinRobo from "../page/KoinRobo";
import KoinBisnis from "../page/KoinBisnis";
import Diversifikasi from "../page/Diversifikasi";

const routes = [
  {
    path: PATH_URL.HOME,
    component: Home,
    layout: MainLayout
  },
  {
    path: PATH_URL.KOINP2P,
    component: KoinP2p,
    layout: MainLayout
  },
  {
    path: PATH_URL.KOINROBO,
    component: KoinRobo,
    layout: MainLayout
  },
  {
    path: PATH_URL.KOINBISNIS,
    component: KoinBisnis,
    layout: MainLayout
  },
  {
    path : PATH_URL.DIVERSIFICATION,
    component : Diversifikasi,
    layout: MainLayout
  }
];

export default routes;
