import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import SidebarLeft from "./partials/SidebarLeft";
function Followings(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <section class="container followSection">
      <div class="row followSection">
        <SidebarLeft />
        <div class="col-10 col-lg-6 p-0">
          <div class="d-flex align-items-center mt-2">
            <div>
              <a href="/<%=userShow.username%> ">
                <img src="/backArrow.png" alt="" class="iconAccount" />
              </a>
            </div>
            <div>
              <a
                href="/<%=userShow.username%> "
                class="btn p-0 ms-3 text-start"
              >
                <h3 class="mb-0">{/* <%=userShow.fullname%> */}</h3>
              </a>
              <p class="bg-transparent ms-3 mb-0">
                @{/* <%=userShow.username%> */}
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-evenly mt-4 border-bottom">
            <a href="/followers/<%= userShow.id%>" class="btn">
              <h6>Followers</h6>
            </a>
            <a href="#" class="btn">
              <h6 class="followUnderLine">Following</h6>
            </a>
          </div>
          {/* <%for (let following of followings) {%> */}
          <div class="d-flex flex-row py-2 followingDiv">
            <div class="d-flex align-items-center ms-3">
              <a href="/<%= following.username%> ">
                {/*  <% if (following.avatar.startsWith("http")) {%>
            <img
              class="iconAccount me-2 rounded-5"
              src="<%= following.avatar %>"
              alt="Icon of user"
            />
            <% } else{%>
            <img
              class="iconAccount me-2 rounded-5"
              src="/img/<%= following.avatar %>"
              alt="Icon of user"
            />
            <%} %> */}
              </a>
            </div>
            <div class="d-flex flex-column ms-3 justify-content-center">
              <a
                href="/<%= following.username%> "
                class="text-reset txtMd fw-bold fw-semibold"
              >
                {/*  <%= following.fullname%> */}
              </a>
              <a
                href="/<%= following.username%> "
                class="txtMd usernameTweetText"
              >
                @{/* <%= following.username%> */}
              </a>
            </div>
            <div class="ms-auto d-flex align-items-center me-3">
              {/*< % if(user.followings.includes(following.id)){ %>
          <form action="/unfollow/<%= following.username %>?_method=PATCH" method="post">
            <button
              id="following"
              type="submit"
              class="btn buttonFollowing border border-black rounded-pill cambiar-texto"
            >
              Following
            </button>
          </form>
          <% }else{ %>
          <form action="/follow/<%= following.username %>?_method=PATCH" method="post">
            <button class="btn buttonFollow text-light rounded-5">Follow</button>
          </form>
          <% } %> */}
            </div>
          </div>
          {/* <%}%> */}
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
export default Followings;
