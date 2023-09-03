import React from "react";
import { useDispatch } from "react-redux";
import { like } from "../../redux/interactiveSlice";

const LikeButton = ({ tweetId }) => {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(like({ id: tweetId }));
  };

  return (
    <i
      onClick={handleLikeClick}
      className={
        isLiked ? "bi bi-suit-heart" : "bi bi-suit-heart-fill icon-danger"
      }
    ></i>
  );
};

export default LikeButton;
