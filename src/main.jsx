import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import FormContextProvider from "./context/formContext.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Form from "./components/Form.jsx"
import UserData from "./components/UserData.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/userTable",
    element: <UserData />,
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormContextProvider>
      <RouterProvider router={router} />
    </FormContextProvider>
  </StrictMode>
)
