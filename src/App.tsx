import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";

import { ChatPage } from "~/pages/chat";
import { ErrorPage } from "~/pages/error";
import { TailPage } from "./pages/tail";
import { LotteryPage } from "./pages/lottery";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div>Hello world!</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/chat">Chat Page</NavLink>
          </li>
          <li>
            <NavLink to="/tail">Tailwind Page</NavLink>
          </li>
          <li>
            <NavLink to="/lottery">Lottery Page</NavLink>
          </li>
        </ul>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tail",
    element: <TailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lottery",
    element: <LotteryPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
