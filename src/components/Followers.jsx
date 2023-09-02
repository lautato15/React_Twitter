import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import SidebarLeft from "./partials/SidebarLeft";

function Followers(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <div class="container homeContainer">
      <div class="row homeRow">
        <SidebarLeft />
        <div class="col-10 col-md-6 p-0">
          <div class="divProfile">
            <div class="divProfile">
              {/*  <% if (userShow.avatar.startsWith("http")) {%>
            <img class="img-fluid divProfile" src="<%= userShow.frontPage%>" alt="" />
            <% } else{%>
            <img class="img-fluid divProfile" src="/img/<%= userShow.frontPage%>" alt="" />
            <%} %> */}
            </div>
            {/*  <% if (userShow.avatar.startsWith("http")) {%>
          <img class="imgProfile me-2" src="<%= userShow.avatar %>" alt="Image Profile" />
          <% } else{%>
          <img class="imgProfile me-2" src="/img/<%= userShow.avatar %>" alt="Image Profile" />
          <%} %> */}
          </div>
          <div class="d-flex flex-column-reverse border-bottom">
            <h2 class="container txtLg TweetProfile">Tweets</h2>
            <div class="container">
              <p>{/* <%= userShow.biography %> */}</p>
            </div>
            <div class="container py-2 d-flex flex-column-reverse">
              <div class="mt-5">
                <h2 class="txtLg mb-0 fw-bold">
                  {/* <%= userShow.fullname %> */}
                </h2>
                <div class="d-flex">
                  <p class="txtMd text-secondary m-0 flex-grow-1">
                    @{/* <%= userShow.username %> */}
                  </p>
                  <a
                    href="/followers/<%= userShow.id %>"
                    class="txtSm text-secondary"
                  >
                    <span class="text-dark fw-bold">
                      {" "}
                      {/* <%= userShow.followers.length %> */}{" "}
                    </span>
                    Followers
                  </a>
                  <a
                    href="/followings/<%= userShow.id %>"
                    class="txtSm text-secondary"
                  >
                    <span class="text-dark fw-bold ms-2">
                      {" "}
                      {/* <%= userShow.followings.length %> */}{" "}
                    </span>
                    Followings
                  </a>
                </div>
              </div>
              <div class="d-flex justify-content-end mt-2">
                {/*   <% if( userShow.id === user.id ) { %>
                <button class="buttonEditProfile btn rounded-pill txtMd">Edit Profile</button>
              <% }else if( userShow.followers.includes(user.id) ){%>
              <form action="/unfollow/<%= userShow.username %>?_method=PATCH" method="post">
                <button
                  type="submit"
                  class="btn buttonFollowing border border-black rounded-pill"
                >
                  Following
                </button>
              </form>
              <% }else if(!userShow.followers.includes(user.id)){%>
              <form action="/follow/<%= userShow.username %>?_method=PATCH" method="post">
                <button class="btn buttonEditProfile rounded-pill txtMd">Follow</button>
              </form>
              <% }%> */}
              </div>
            </div>
          </div>
          {/*  <!-- TWEETS --> */}
          {/*   <% for(let tweet of userShow.tweets){ %> */}
          <div class="container d-flex p-3 border-bottom">
            <a href="" class="pt-2">
              {/*    <% if (userShow.avatar.startsWith("http")) {%>
            <img
              class="iconAccount rounded-pill me-2"
              src="<%= userShow.avatar %>"
              alt="Icon Account"
            />
            <% } else{%>
            <img
              class="iconAccount rounded-pill me-2"
              src="/img/<%= userShow.avatar %>"
              alt="Icon Account"
            />
            <%} %> */}
            </a>

            <div class="w-100">
              <div class="d-flex">
                <a href="" class="text-reset txtMd fw-semibold me-1">
                  {" "}
                  {/* <%= userShow.fullname %> */}{" "}
                </a>
                <a href="" class="txtMd usernameTweetText me-1">
                  @ {/* <%= userShow.username %> */}{" "}
                </a>
                <p class="txtMd usernameTweetText m-0">
                  {/*  <%= formatDistanceToNow(tweet.createdAt) %> */}
                </p>
              </div>
              <p class="txtMd m-0">{/* <%= tweet.content %> */}</p>
              <div class="d-flex">
                {/*   <% if (!tweet.likes.includes(user.id)) { %>
              <form
                class="d-flex justify-content-center align-items-center"
                action="/tweet/<%= tweet.id %>/like"
                method="post"
              >
                <input type="hidden" name="userId" value="<%= user.id %>" />
                <button type="submit" class="btn p-0">
                  <img class="img-fluid iconLike d-inline" src="/img/heartWithe.png" alt="" />
                  <p class="d-inline">
                    <!-- CONTADOR DE LIKES -->
                    <%= tweet.likes.length %>
                  </p>
                </button>
              </form>
              <% } else { %>
              <form
                class="d-flex justify-content-center align-items-center"
                action="/tweet/<%= tweet.id %>/unLike"
                method="post"
              >
                <input type="hidden" name="userId" value="<%= user.id %>" />
                <button type="submit" class="btn p-0">
                  <img class="img-fluid iconLike d-inline" src="/img/heartRed.png" alt="" />
                  <p class="d-inline">
                    <!-- CONTADOR DE LIKES -->
                    <%= tweet.likes.length %>
                  </p>
                </button>
              </form>
              <% } %> <% if (userShow.id === user.id) { %>
              <form
                class="d-flex justify-content-center align-items-center ms-auto"
                action="/tweet/delete/<%= tweet.id %>?_method=DELETE"
                method="POST"
              >
                <input type="hidden" name="tweet" value="<%=tweet.id %>>" />
                <button
                  type="submit"
                  class="btn d-flex justify-content-center align-items-center"
                >
                  <i class="fas fa-trash" style="color: #dc3444"></i>
                </button>
              </form>
              <% } %> */}
              </div>
            </div>
          </div>
          {/*   { <% } %>} */}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
export default Followers;
