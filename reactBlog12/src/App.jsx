import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authservice from "./appwrite/auth";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "./components/index";

function App() {
  const [lodding, setLodding] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLodding(false);
      });
  }, []);

  return !lodding ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
