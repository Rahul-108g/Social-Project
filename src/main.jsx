import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./assets/routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/Component/Responsive/Responsive.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList from "./assets/Component/PostList.jsx";
import CreatePost from "./assets/Component/CreatePost.jsx";
import ReactDOM from "react-dom/client";
import Navbar from "./assets/Component/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/",
        element: <PostList />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
