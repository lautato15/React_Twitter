import { useEffect } from "react";
import UsersList from "./UsersList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LikeButton from "./miniComponents/LikeButton";
import Following from "./miniComponents/Following";
import Sidebar from "./partials/Sidebar";
import SidebarLeft from "./partials/SidebarLeft";
function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (!user) return navigate("/login");
  // }, []);

  return (
    <div className="bodyHome">
      <div className="container homeContainer">
        <div className="row homeRow">
          <SidebarLeft />
          <div className="col-10 col-md-6 p-0">
            <h2 className="container p-3 txtLg">Home</h2>
            <div className="container py-2 d-flex flex-column border-bottom">
              <form action="/tweet/create" method="post">
                <div className="d-flex">
                  {/* <% if (user.avatar.startsWith("http")) {%>
                <img className="iconAccount me-2" src="<%= user.avatar %>" alt="a" />
                <% } else{%>
                <img className="iconAccount me-2" src="/img/<%= user.avatar %>" alt="a" />
                <%} %> */}
                  <textarea
                    name="content"
                    type="text"
                    className="inputTweet border-0 txtLg"
                    placeholder="What’s happening?"
                    required
                    // maxlength="140"
                    // style="white-space: pre-wrap; overflow-wrap: break-word"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end mt-2">
                  <button
                    type="submit"
                    className="buttonTweetHome btn rounded-pill txtMd"
                  >
                    Tweet
                  </button>
                </div>
              </form>
            </div>

            {/* <% for (const tweet of tweets) {%> */}
            <div className="divTweet container d-flex py-2 border-bottom">
              <a href="/<%= tweet.author.username%>">
                {/* <% if (tweet.author.avatar.startsWith("http")) {%>
              <img className="iconAccount me-2" src="<%= tweet.author.avatar %>" alt="Icon of user" />
              <% } else{%>
              <img
                className="iconAccount me-2"
                src="/img/<%= tweet.author.avatar %>"
                alt="Icon of user"
              />
              <%} %> */}
              </a>
              <div>
                <div className="d-flex">
                  <a
                    href="/<%= tweet.author.username%>"
                    className="text-reset txtMd fw-bold fw-semibold me-1"
                  >
                    {/* <%= tweet.author.fullname %> */}
                  </a>
                  <a
                    href="/<%= tweet.author.username%>"
                    className="txtMd usernameTweetText mx-1"
                  >
                    {/* @<%= tweet.author.username %> */}
                  </a>

                  <p className="txtMd usernameTweetText m-0">
                    {/* &#8901; <%= formatDistanceToNow(tweet.createdAt) %> */}
                  </p>
                </div>
                {/* <p className="txtMd m-0"><%= tweet.content %></p>
              <% if (!tweet.likes.includes(user.id)) { %> */}

                <form action="/tweet/<%= tweet.id %>/like" method="post">
                  <input type="hidden" name="userId" value="<%= user.id %>" />
                  <button type="submit" className="btn p-0">
                    <img
                      className="img-fluid iconLike d-inline"
                      src="/heartWithe.png"
                      alt=""
                    />
                    <p className="d-inline">
                      {/* CONTADOR DE LIKES  */}
                      {/* <%= tweet.likes.length %> */}
                    </p>
                  </button>
                </form>

                {/* <% } else { %> */}

                <form action="/tweet/<%= tweet.id %>/unLike" method="post">
                  <input type="hidden" name="userId" value="<%= user.id %>" />
                  <button type="submit" className="btn p-0">
                    <img
                      className="img-fluid iconLike d-inline"
                      src="/heartRed.png"
                      alt=""
                    />
                    <p className="d-inline">
                      {/* -- CONTADOR DE LIKES  */}
                      {/* <%= tweet.likes.length %> */}
                    </p>
                  </button>
                </form>
                {/* <% } %> */}
              </div>
            </div>
            {/* <% } %> */}
          </div>
          <Sidebar />
        </div>
      </div>
      {/* <%- include("./partials/modal.ejs") %> */}
    </div>
  );
}

export default Home;
