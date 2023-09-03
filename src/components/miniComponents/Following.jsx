import React from "react";
import { useDispatch } from "react-redux";
import { follow } from "../../redux/interactiveSlice";

const FollowButton = ({ userId }) => {
  const dispatch = useDispatch();

  const handleFollowClick = () => {
    dispatch(follow(userId));
  };

  return (
    <button
      onClick={handleFollowClick}
      className={isFollowing ? buttonFollowing : buttonFollow}
    >
      {isFollowing ? Following : Follow}
    </button>
  );
};

export default FollowButton;
