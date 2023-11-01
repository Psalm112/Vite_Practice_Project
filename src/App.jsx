import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./modules/Login.jsx";
import Register from "./modules/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
