import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ChatPage } from "~/pages/chat";
import { ErrorPage } from "~/pages/error";
import { TailPage } from "./pages/tail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
