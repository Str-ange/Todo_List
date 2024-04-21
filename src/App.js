import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// Components
import Login from "./components/Login";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getCookie("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const getCookie = (name) => {
    return document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "");
  };

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; expires=" +
      expires +
      "; path=/";
  };

  const handleLoginSuccess = (response) => {
    const decoded = jwtDecode(response?.credential);
    console.log("Login Success:", decoded);
    setCookie("user", JSON.stringify(decoded), 1);
    setUser(decoded);
  };

  const handleLoginFailure = (response) => {
    console.log("Login Failure! Response:", response);
  };

  const handleLogout = () => {
    document.cookie = "user=; Max-Age=-99999999;";
    setUser(null);
  };
  return (
    <div className="">
      {user ? (
        <>
          <Header props={user} logout={handleLogout} />
          <TodoList props={user} />
        </>
      ) : (
        <div className="main-color">
          <Login
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
          />
        </div>
      )}
    </div>
  );
}

export default App;
