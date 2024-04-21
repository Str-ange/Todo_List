import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="695164963509-p1inbaioto21nhcims5fusq6ol16618r.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
