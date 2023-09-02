import React from "react";
import SidebarLeft from "./partials/SidebarLeft";
import Sidebar from "./partials/Sidebar";
const Following = () => {
  return (
    <div>
      <section class="container followSection">
        <div class="row followSection">
          <SidebarLeft />
          <div class="col-11 col-md-7 col-lg-6 p-0">
            <div class="d-flex align-items-center mt-2">
              <div class="">
                <img src="/flecha-hacia-abajo.png" alt="" class="iconAccount" />
              </div>
              <div class="">
                <a href="#" class="btn p-0 ms-3 text-start">
                  <h3 class="mb-0">Name</h3>
                </a>
                <p class="bg-transparent ms-3 mb-0">@userName</p>
              </div>
            </div>
            <div class="d-flex justify-content-evenly mt-4 border-bottom">
              <a href="#" class="btn">
                <h6>Followers</h6>
              </a>
              <a href="#" class="btn">
                <h6 class="followUnderLine">Following</h6>
              </a>
            </div>
            {/* <%for (let i = 0; i <=10 ; i++) {%> */}
            <div class="d-flex flex-row mt-4">
              <div class="d-flex align-items-center ms-3">
                <img class="iconAccount rounded-5" src="/account.png" alt="" />
              </div>
              <div class="ms-3 mt-2">
                <a
                  href="#"
                  class="link-underline link-underline-opacity-0 text-black"
                >
                  Discord
                </a>
                <p class="">@userName</p>
              </div>
              <div class="ms-auto d-flex align-items-center me-3">
                <button class="btn border border-black rounded-pill">
                  Following
                </button>
              </div>
            </div>
            {/* <%}%> */}
          </div>
          <Sidebar />
        </div>
      </section>
    </div>
  );
};

export default Following;
