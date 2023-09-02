import React from "react";

const sidebarLeft = () => {
  return (
    <div class="col-2 container border-end d-lg-flex justify-content-center">
      <div class="sidebarPositionDiv d-none d-lg-flex justify-content-center">
        <div class="sidebarContainer flex-column d-flex justify-content-between">
          <div class="mt-3 flex-column d-flex">
            <div>
              <a href="/home">
                <img
                  class="sidebarLeftLogo mb-4"
                  src="/img/twitter.png"
                  alt="Logo"
                />
              </a>
            </div>
            <a
              href="/home"
              class="mb-4 d-flex align-items-center text-decoration-none text-reset"
            >
              <img
                class="sidebarLeftImages me-2"
                src="/img/home.png"
                alt="Home"
              />
              <p class="txtLg m-0">Home</p>
            </a>
            <a
              href="/<%= user.username %>"
              class="mb-4 d-flex align-items-center text-reset"
            >
              <img
                class="sidebarLeftImages me-2"
                src="/img/usuario.png"
                alt="Profile"
              />
              <p class="txtLg m-0">Profile</p>
            </a>
            <a
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="sidebarLeftBtnTweet sidebarLeftBtnTweetText btn rounded-pill txtMd fw-semibold d-flex align-items-center justify-content-center"
            >
              Tweet
            </a>
          </div>

          <a
            href="/login/logout"
            class="sidebarLeftBtnLogout btn rounded-pill txtMd fw-semibold mb-3 d-flex align-items-center justify-content-center sidebarLeftBtnLogoutText"
          >
            Logout
          </a>
        </div>
      </div>
      <div class="sidebarPositionDiv d-lg-none d-flex align-items-center justify-content-center">
        <div class="sidebarContainer flex-column d-flex align-items-center justify-content-between">
          <div class="mt-3 flex-column d-flex align-items-center">
            <img
              class="sidebarLeftLogo mb-4"
              src="/img/twitter.png"
              alt="Logo"
            />
            <a
              href="/home"
              class="mb-4 d-flex align-items-center text-decoration-none text-reset"
            >
              <img class="sidebarLeftImages" src="/img/home.png" alt="Home" />
            </a>
            <a
              href="/<%= user.username %>"
              class="mb-4 d-flex align-items-center text-reset"
            >
              <img
                class="sidebarLeftImages"
                src="/img/usuario.png"
                alt="Profile"
              />
            </a>
            <a
              href="/home"
              class="sidebarLeftBtnTweetMini btn rounded-pill txtMd fw-semibold d-flex align-items-center justify-content-center"
            >
              <img src="/img/feather.png" alt="" class="img-fluid" />
            </a>
          </div>
          <a
            href="/login/logout"
            class="sidebarLeftBtnLogoutMini p-0 mb-3 btn rounded-pill txtMd fw-semibold"
          >
            <img src="/img/logout.png" alt="" class="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default sidebarLeft;
