import "./layout.scss";

import Navbar from "./components/navBAR/Navbar";
import HomePage from "./components/routes/homePage/HomePage";
import { Layout, RequireAuth } from "./components/layout/layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ListPage from "./components/routes/listPage/listPage";
import SinglePage from "./components/routes/singlePage/singlePage";
import ProfilePage from "./components/routes/profilePage/profilePage";
import Register from "./components/routes/register/register";
import Login from "./components/routes/login/login";
import ProfileUpdatePage from "./components/routes/profileUpdatePage/profileUpdatePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/",
          element: <HomePage />,
        },

        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },

    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
