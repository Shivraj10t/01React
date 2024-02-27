import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseSelector } from "react-redux";
function AuthLayout({ children, authentication = true }) {
  const [loding, setLoging] = useState(true);
  const navagate = useNavigate();
  const authStatus = UseSelector((state) => state.auth.status);
  useEffect(() => {
    if (authentication && authentication !== authStatus) {
      navagate("/login");
    } else if (!authentication && authentication !== authStatus) {
      navagate("/");
    }
    setLoging(false);
  }, [authStatus, navagate, authentication]);
  return loding ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
