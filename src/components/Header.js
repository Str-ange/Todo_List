import React from "react";

function Header({ props, logout }) {
  return (
    <div>
      <nav className="navbar main-color p-0">
        <div className="container-fluid">
          <span className="navbar-text">
            <img
              src={props.picture ? props.picture : ""}
              className="rounded-pill me-2"
              style={{ height: "35px" }}
              onError={(e) => {
                e.target.src =
                  "https://as1.ftcdn.net/v2/jpg/05/53/79/60/1000_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg";
              }}
            />
            <label>Welcome {props.given_name}</label>
          </span>
          {/* <span class="navbar-text fw-bold fs-4">
            ToDo List
          </span> */}
          <span className="navbar-text">
            <button onClick={logout} className="btn">
              Logout <i className="bi bi-box-arrow-right"></i>
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
