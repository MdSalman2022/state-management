import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Counter from "../pages/Counter";
import Home from "../pages/Home";
import LongForm from "../pages/LongFrom";
import TopRated from "../pages/TopRated";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/form",
        element: <LongForm />,
      },
    ],
  },
]);

export default routes;
