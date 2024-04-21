import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function Login({ onSuccess, onFailure }) {
  return (
    <div className="container">
      <div className="d-flex vh-100 justify-content-center align-content-center flex-wrap">
        <div className="card rounded-4 py-5 login-card">
          <div className="row m-0">
            <div className="col-12 p-0 text-center fs-1 py-5 mb-3">Todo List</div>
            <div className="col-12 p-0 text-center pt-5" style={{fontSize: "0.8rem"}}>Login with google to continue</div>
            <div className="col-12 p-0 d-flex pb-4 justify-content-center mb-2">
              <GoogleLogin
                clientId="695164963509-p1inbaioto21nhcims5fusq6ol16618r.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                auto_select={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
