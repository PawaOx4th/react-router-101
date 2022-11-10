import React from "react"
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import App from "./App"
import "./index.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Team from "./pages/team"
import TeamA from "./pages/team/TeamA"
import TeamB from "./pages/team/TeamB"
import Root from "./routes/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "team",
        element: <Team />,
        children: [
          {
            path: "a",
            element: <TeamA />
          },
          {
            path: "b",
            element: <TeamB />
          }
        ]
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
