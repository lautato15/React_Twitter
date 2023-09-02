import React from "react";

const sidebarLeft = () => {
  return (
    <div className="col-2 container border-end d-lg-flex justify-content-center">
      <div className="sidebarPositionDiv d-none d-lg-flex justify-content-center">
        <div className="sidebarContainer flex-column d-flex justify-content-between">
          <div className="mt-3 flex-column d-flex">
            <div>
              <a href="/home">
                <img
                  className="sidebarLeftLogo mb-4"
                  src="/twitter.png"
                  alt="Logo"
                />
              </a>
            </div>
            <a
              href="/home"
              className="mb-4 d-flex align-items-center text-decoration-none text-reset"
            >
              <img
                className="sidebarLeftImages me-2"
                src="/home.png"
                alt="Home"
              />
              <p className="txtLg m-0">Home</p>
            </a>
            <a
              href="/<%= user.username %>"
              className="mb-4 d-flex align-items-center text-reset"
            >
              <img
                className="sidebarLeftImages me-2"
                src="/usuario.png"
                alt="Profile"
              />
              <p className="txtLg m-0">Profile</p>
            </a>
            <a
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="sidebarLeftBtnTweet sidebarLeftBtnTweetText btn rounded-pill txtMd fw-semibold d-flex align-items-center justify-content-center"
            >
              Tweet
            </a>
          </div>

          <a
            href="/login/logout"
            className="sidebarLeftBtnLogout btn rounded-pill txtMd fw-semibold mb-3 d-flex align-items-center justify-content-center sidebarLeftBtnLogoutText"
          >
            Logout
          </a>
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
            <a
              href="/home"
              className="mb-4 d-flex align-items-center text-decoration-none text-reset"
            >
              <img className="sidebarLeftImages" src="/home.png" alt="Home" />
            </a>
            <a
              href="/<%= user.username %>"
              className="mb-4 d-flex align-items-center text-reset"
            >
              <img
                className="sidebarLeftImages"
                src="/usuario.png"
                alt="Profile"
              />
            </a>
            <a
              href="/home"
              className="sidebarLeftBtnTweetMini btn rounded-pill txtMd fw-semibold d-flex align-items-center justify-content-center"
            >
              <img src="/feather.png" alt="" className="img-fluid" />
            </a>
          </div>
          <a
            href="/login/logout"
            className="sidebarLeftBtnLogoutMini p-0 mb-3 btn rounded-pill txtMd fw-semibold"
          >
            <img src="/logout.png" alt="" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default sidebarLeft;
