import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github, { GithubInfo } from "./components/Github/Github";
import User from "./components/User/User";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/github", element: <Contact /> },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:myParams" element={<User />}  />
      <Route path="/github" element={<Github />} loader={GithubInfo}  />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
