import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Followings(props) {
  const profile = useSelector((state) => state.profileShow);

  return (
    <div className="divProfile">
      {profile.followings.map((following) => (
        <div key={following.id} className="d-flex flex-row py-2 followingDiv">
          <div className="d-flex flex-column ms-3 justify-content-center">
            <Link to={`/${following.username}`}>
              <img
                className="iconAccount me-2 rounded-5"
                src={`${following.avatar}`}
                alt="Icon of user"
              />
            </Link>
          </div>
          <div className="d-flex flex-column ms-3 justify-content-center">
            <Link
              to={`/${following.username}`}
              className="text-reset txtMd fw-bold fw-semibold"
            >
              {following.fullname}
            </Link>
            <Link
              to={`/${following.username}`}
              className="txtMd usernameTweetText"
            >
              @{following.username}
            </Link>
          </div>
          <div className="ms-auto d-flex align-items-center me-3">
            <button className="btn buttonFollow text-light rounded-5">
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Followings;
