import { useEffect } from "react";
import UsersList from "./UsersList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Head, Sidebar, SidebarLeft} from "./partials"
function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) return navigate("/login");
  }, []);

  return (
    
<html lang="es">
 <Head />
  <body class="bodyHome">
    <div class="container homeContainer">
      <div class="row homeRow">
        <SidebarLeft />
        <div class="col-10 col-md-6 p-0">
          <h2 class="container p-3 txtLg">Home</h2>
          <div class="container py-2 d-flex flex-column border-bottom">
            <form action="/tweet/create" method="post">
              <div class="d-flex">
                {/* <% if (user.avatar.startsWith("http")) {%>
                <img class="iconAccount me-2" src="<%= user.avatar %>" alt="a" />
                <% } else{%>
                <img class="iconAccount me-2" src="/img/<%= user.avatar %>" alt="a" />
                <%} %> */}
                <textarea
                  name="content"
                  type="text"
                  class="inputTweet border-0 txtLg"
                  placeholder="What’s happening?"
                  required
                  maxlength="140"
                  style="white-space: pre-wrap; overflow-wrap: break-word"
                ></textarea>
              </div>
              <div class="d-flex justify-content-end mt-2">
                <button type="submit" class="buttonTweetHome btn rounded-pill txtMd">Tweet</button>
              </div>
            </form>
          </div>

          {/* <% for (const tweet of tweets) {%> */}
          <div class="divTweet container d-flex py-2 border-bottom">
            <a href="/<%= tweet.author.username%>">
              {/* <% if (tweet.author.avatar.startsWith("http")) {%>
              <img class="iconAccount me-2" src="<%= tweet.author.avatar %>" alt="Icon of user" />
              <% } else{%>
              <img
                class="iconAccount me-2"
                src="/img/<%= tweet.author.avatar %>"
                alt="Icon of user"
              />
              <%} %> */}
            </a>
            <div>
              <div class="d-flex">
                <a
                  href="/<%= tweet.author.username%>"
                  class="text-reset txtMd fw-bold fw-semibold me-1"
                >
                  {/* <%= tweet.author.fullname %> */}
                </a>
                <a href="/<%= tweet.author.username%>" class="txtMd usernameTweetText mx-1">
                  {/* @<%= tweet.author.username %> */}
                </a>

                <p class="txtMd usernameTweetText m-0">
                  {/* &#8901; <%= formatDistanceToNow(tweet.createdAt) %> */}
                </p>
              </div>
              {/* <p class="txtMd m-0"><%= tweet.content %></p>
              <% if (!tweet.likes.includes(user.id)) { %> */}

              <form action="/tweet/<%= tweet.id %>/like" method="post">
                <input type="hidden" name="userId" value="<%= user.id %>" />
                <button type="submit" class="btn p-0">
                  <img class="img-fluid iconLike d-inline" src="/img/heartWithe.png" alt="" />
                  <p class="d-inline">
                    <!-- CONTADOR DE LIKES -->
                    {/* <%= tweet.likes.length %> */}
                  </p>
                </button>
              </form>

              {/* <% } else { %> */}

              <form action="/tweet/<%= tweet.id %>/unLike" method="post">
                <input type="hidden" name="userId" value="<%= user.id %>" />
                <button type="submit" class="btn p-0">
                  <img class="img-fluid iconLike d-inline" src="/img/heartRed.png" alt="" />
                  <p class="d-inline">
                    <!-- CONTADOR DE LIKES -->
                    {/* <%= tweet.likes.length %> */}
                  </p>
                </button>
              </form>
              {/* <% } %> */}
            </div>
          </div>
          {/* <% } %> */}
        </div>
       <Sidebar/>
      </div>
    </div>
    {/* <%- include("./partials/modal.ejs") %> */}
    
  </body>
</html>

  );
}

export default Home;
