import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { like } from "../redux/tweetsSlice";
function TweetsList({ tweetsList, user, profile, showImg }) {
  const [name, setName] = useState(null);
  const dispatch = useDispatch();

  function handleLike(tweetId) {
    dispatch(like({ tweetId, userId: user.id }));
  }
  return (
    <>
      {tweetsList.map((tweet) => (
        <div
          key={tweet._id}
          className="divTweet container d-flex py-2 border-bottom"
        >
          {showImg ? (
            <Link to={`/${profile.username}`}>
              <img
                className="iconAccount me-2"
                src={`${profile.avatar}`}
                alt="Icon of user"
              />
            </Link>
          ) : (
            <Link to={`/${tweet.author.username}`}>
              <img
                className="iconAccount me-2"
                src={`${tweet.author.avatar}`}
                alt="Icon of user"
              />
            </Link>
          )}
          <div>
            <div className="d-flex">
              {showImg ? (
                <>
                  <Link
                    to={`/${profile.username}`}
                    className="text-reset txtMd fw-bold fw-semibold me-1"
                  >
                    {profile.fullname}
                  </Link>
                  <Link
                    to={`/${profile.username}`}
                    className="txtMd usernameTweetText mx-1"
                  >
                    @{profile.username}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={`/${tweet.author.username}`}
                    className="text-reset txtMd fw-bold fw-semibold me-1"
                  >
                    {tweet.author.fullname}
                  </Link>
                  <Link
                    to={`/${tweet.author.username}`}
                    className="txtMd usernameTweetText mx-1"
                  >
                    @{tweet.author.username}
                  </Link>
                </>
              )}
              <p className="txtMd usernameTweetText m-0">
                {/* {tweet.createdAt} */}
                1/11/2015
              </p>
            </div>
            <p className="txtMd m-0"> {tweet.content} </p>

            <form action="/tweet/<%= tweet.id %>/like" method="post">
              <input type="hidden" name="userId" value="<%= user.id %>" />
              {/*   <h2>User id: {typeof user.id}</h2>
                <h2>Likes: {typeof String(tweet.likes)}</h2> */}

              {!tweet.likes.some((like) => String(like) === user.id) ? (
                <img
                  className="img-fluid iconLike d-inline"
                  src="/heartWithe.png"
                  alt=""
                  onClick={() => handleLike(tweet.id)}
                />
              ) : (
                <img
                  className="img-fluid iconLike d-inline"
                  src="/heartRed.png"
                  alt=""
                  onClick={() => handleLike(tweet.id)}
                />
              )}

              <span className="ms-2">{tweet.likes.length}</span>

              {/*<p className="d-inline ms-2">
                    {/* CONTADOR DE LIKES  */}
              {/*  {tweet.likes.length} */}
              {/*  </p>
                </button> */}
            </form>
            {/* <% } else { %> */}
            {/*   <form
                  action="/tweet/<%= tweet.id %>/unLike"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="userId"
                    value="<%= user.id %>"
                  />
                  <button type="submit" className="btn p-0">
                    <img
                      className="img-fluid iconLike d-inline"
                      src="/heartRed.png"
                      alt=""
                    />
                    <p className="d-inline">
                      {/* -- CONTADOR DE LIKES  */}
            {/* { tweet.likes.length} */}
            {/*  </p> */}
            {/* </button> */}
            {/* </form> */}
            {/* <% } %> */}
          </div>
        </div>
      ))}
    </>
  );
}
export default TweetsList;
