import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import SidebarLeft from "./partials/SidebarLeft";

function Porfile(props) {
  const params = useParams();
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.logged);

  /*  useEffect(() => {
    if (!user) return navigate("/login");
  }, []); */
  return (
    <div className="bodyHome">
      <div className="container homeContainer">
        <div className="row homeRow">
          <SidebarLeft />
          <div className="col-10 col-md-6 p-0">
            <div className="divProfile">
              <div className="divProfile">
                {/*  { <% if (userShow.avatar.startsWith("http")) {%>}
                  <img className="img-fluid divProfile" src="<%= userShow.frontPage%>" alt="" />
                  <% } else{%>
                  <img className="img-fluid divProfile" src="/img/<%= userShow.frontPage%>" alt="" />
                  <%} %> */}
              </div>
              {/* <% if (userShow.avatar.startsWith("http")) {%>
                <img className="imgProfile me-2" src="<%= userShow.avatar %>" alt="Image Profile" />
                <% } else{%>
                <img className="imgProfile me-2" src="/img/<%= userShow.avatar %>" alt="Image Profile" />
                <%} %> */}
            </div>
            <div className="d-flex flex-column-reverse border-bottom">
              <h2 className="container txtLg TweetProfile">Tweets</h2>
              <div className="container">
                <p>{user.biography}</p>
              </div>
              <div className="container py-2 d-flex flex-column-reverse">
                <div className="mt-5">
                  <h2 className="txtLg mb-0 fw-bold">
                    {/* <%= userShow.fullname %> */}
                  </h2>
                  <div className="d-flex">
                    <p className="txtMd text-secondary m-0 flex-grow-1">
                      @{/* <%= userShow.username %> */}
                    </p>
                    <a
                      href="/followers/<%= userShow.id %>"
                      className="txtSm text-secondary"
                    >
                      <span className="text-dark fw-bold">
                        {/* <%= userShow.followers.length %> */}
                      </span>
                      Followers
                    </a>
                    <a
                      href="/followings/<%= userShow.id %>"
                      className="txtSm text-secondary"
                    >
                      <span className="text-dark fw-bold ms-2">
                        {" "}
                        {/* <%= userShow.followings.length %> */}{" "}
                      </span>
                      Followings
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-2">
                  {/*  {/*  <% if( userShow.id === user.id ) { %>
                      <button className="buttonEditProfile btn rounded-pill txtMd">Edit Profile</button>
                    <% }else if( userShow.followers.includes(user.id) ){%>
                    <form action="/unfollow/<%= userShow.username %>?_method=PATCH" method="post">
                      <button
                        type="submit"
                        className="btn buttonFollowing border border-black rounded-pill"
                      >
                        Following
                      </button>
                    </form>
                    <% }else if(!userShow.followers.includes(user.id)){%>
                    <form action="/follow/<%= userShow.username %>?_method=PATCH" method="post">
                      <button className="btn buttonEditProfile rounded-pill txtMd">Follow</button>
                    </form>
                    /* <% }%> */}
                </div>
              </div>
            </div>
            {/*   <!-- TWEETS -->
              <% for(let tweet of userShow.tweets){ %> */}
            <div className="container d-flex p-3 border-bottom">
              <a href="" className="pt-2">
                {/*  { <% if (userShow.avatar.startsWith("http")) {%>
                  <img
                    className="iconAccount rounded-pill me-2"
                    src="<%= userShow.avatar %>"
                    alt="Icon Account"
                  />
                  <% } else{%>
                  <img
                    className="iconAccount rounded-pill me-2"
                    src="/img/<%= userShow.avatar %>"
                    alt="Icon Account"
                  />
                  /* <%} %> */}
              </a>
              <div className="w-100">
                <div className="d-flex">
                  <a href="" className="text-reset txtMd fw-semibold me-1">
                    {" "}
                    {/* <%= userShow.fullname %> */}{" "}
                  </a>
                  <a href="" className="txtMd usernameTweetText me-1">
                    @{/* <%= userShow.username %> */}{" "}
                  </a>
                  <p className="txtMd usernameTweetText m-0">
                    {/* <%= formatDistanceToNow(tweet.createdAt) %> */}
                  </p>
                </div>
                <p className="txtMd m-0">{/* <%= tweet.content %> */}</p>
                <div className="d-flex">
                  {/*  <% if (!tweet.likes.includes(user.id)) { %> */}
                  <form
                    className="d-flex justify-content-center align-items-center"
                    action="/tweet/<%= tweet.id %>/like"
                    method="post"
                  >
                    <input type="hidden" name="userId" value="<%= user.id %>" />
                    <button type="submit" className="btn p-0">
                      <img
                        className="img-fluid iconLike d-inline"
                        src="heartWithe.png"
                        alt=""
                      />
                      <p className="d-inline">
                        {/* <!-- CONTADOR DE LIKES -->
                          <%= tweet.likes.length %> */}
                      </p>
                    </button>
                  </form>
                  {/*  {<% } else { %>/*}  */}

                  <form
                    className="d-flex justify-content-center align-items-center"
                    action="/tweet/<%= tweet.id %>/unLike"
                    method="post"
                  >
                    <input type="hidden" name="userId" value="<%= user.id %>" />
                    <button type="submit" className="btn p-0">
                      <img
                        className="img-fluid iconLike d-inline"
                        src="heartRed.png"
                        alt=""
                      />
                      <p className="d-inline">
                        {/*   <!-- CONTADOR DE LIKES -->
                          <%= tweet.likes.length %> */}
                      </p>
                    </button>
                  </form>
                  {/* /* <% } %> <% if (userShow.id === user.id) { %> */}
                  <form
                    className="d-flex justify-content-center align-items-center ms-auto"
                    action="/tweet/delete/<%= tweet.id %>?_method=DELETE"
                    method="POST"
                  >
                    <input type="hidden" name="tweet" value="<%=tweet.id %>>" />
                    <button
                      type="submit"
                      className="btn d-flex justify-content-center align-items-center"
                    >
                      <i
                        className="fas fa-trash" /* style="color: #dc3444" */
                      ></i>
                    </button>
                  </form>
                  {/* /* <% } %> */}
                </div>
              </div>
            </div>
            {/*  <% } %> */}
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
export default Porfile;
