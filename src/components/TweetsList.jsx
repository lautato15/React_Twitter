import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { like } from "../redux/tweetsSlice";
import axios from "axios";

function TweetsList({ tweetsList, user }) {
  const dispatch = useDispatch();
  async function handleLike(tweetId) {
    dispatch(like({ tweetId, userId: user.id }));
    const response = await axios({
      url: `http://localhost:3000/tweet/${tweetId}/like`,
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });
  }
  return (
    <>
      {tweetsList.map((tweet) => (
        <div
          key={tweet._id}
          className="divTweet container d-flex py-2 border-bottom"
        >
          <Link to={`/${tweet.author.username}`}>
            <img
              className="iconAccount me-2"
              src={
                tweet.author.avatar.startsWith("http")
                  ? `${tweet.author.avatar}`
                  : `/img/${tweet.author.avatar}`
              }
              alt="Icon of user"
            />
          </Link>

          <div>
            <div className="d-flex">
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

              <p className="txtMd usernameTweetText m-0">
                {/* {tweet.createdAt} */}
                1/11/2015
              </p>
            </div>
            <p className="txtMd m-0"> {tweet.content} </p>

            <form action="/tweet/<%= tweet.id %>/like" method="post">
              <input type="hidden" name="userId" value="<%= user.id %>" />

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
            </form>
          </div>
        </div>
      ))}
    </>
  );
}
export default TweetsList;
