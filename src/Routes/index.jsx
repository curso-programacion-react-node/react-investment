import Users from '../Pages/Users';
import Detail from '../Pages/Detail';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

export default function Routes () {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Users />,
        },
        {
          path: "detail/:id",
          element: <Detail />,
        },
      ]);

    return <RouterProvider router={router} />
}