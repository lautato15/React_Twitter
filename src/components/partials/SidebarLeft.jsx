import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink, Link } from "react-router-dom";
import Modal from "../miniComponents/Modal";
const sidebarLeft = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="col-2 container border-end d-lg-flex justify-content-center">
      <div className="sidebarPositionDiv d-none d-lg-flex justify-content-center">
        <div className="sidebarContainer flex-column d-flex justify-content-between">
          <div className="mt-3 flex-column d-flex">
            <div>
              <Link to={"/"}>
                <img
                  className="sidebarLeftLogo mb-4"
                  src="/twitter.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <NavLink
              to={"/"}
              className={
                "mb-4 d-flex align-items-center text-decoration-none text-reset"
              }
            >
              <img
                className="sidebarLeftImages me-2"
                src="/home.png"
                alt="Home"
              />
              <p className="txtLg m-0">Home</p>
            </NavLink>
            <NavLink
              to={user && `/${user.username}`}
              className="mb-4 d-flex align-items-center text-reset"
            >
              <img
                className="sidebarLeftImages me-2"
                src="/usuario.png"
                alt="Profile"
              />
              <p className="txtLg m-0">Profile</p>
            </NavLink>
            <a
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="sidebarLeftBtnTweet sidebarLeftBtnTweetText btn rounded-pill txtMd fw-semibold d-flex align-items-center justify-content-center"
            >
              Tweet
            </a>
          </div>

          <NavLink
            to="/login/logout"
            className="sidebarLeftBtnLogout btn rounded-pill txtMd fw-semibold mb-3 d-flex align-items-center justify-content-center sidebarLeftBtnLogoutText"
          >
            Logout
          </NavLink>
        </div>
      </div>
      <div className="sidebarPositionDiv d-lg-none d-flex align-items-center justify-content-center">
        <div className="sidebarContainer flex-column d-flex align-items-center justify-content-between">
          <div className="mt-3 flex-column d-flex align-items-center">
            <img
              className="sidebarLeftLogo mb-4"
              src="/twitter.png"
              alt="Logo"
            />
            <NavLink
              to={"/"}
              className="mb-4 d-flex align-items-center text-decoration-none text-reset"
            >
              <img className="sidebarLeftImages" src="/home.png" alt="Home" />
            </NavLink>
            <NavLink
              to={user && `/${user.username}`}
              className="mb-4 d-flex align-items-center text-reset"
            >
              <img
                className="sidebarLeftImages"
                src="/usuario.png"
                alt="Profile"
              />
            </NavLink>
            <NavLink
              to={"/"}
              className="sidebarLeftBtnTweetMini btn rounded-pill txtMd fw-semibold d-flex align-items-center justify-content-center"
            >
              <img src="/feather.png" alt="" className="img-fluid" />
            </a>
          </div>
          <NavLink
            to={"/login/logout"}
            className="sidebarLeftBtnLogoutMini p-0 mb-3 btn rounded-pill txtMd fw-semibold"
          >
            <img src="/logout.png" alt="" className="img-fluid" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default sidebarLeft;
