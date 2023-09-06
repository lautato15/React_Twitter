import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import SidebarLeft from "./partials/SidebarLeft";
import { profileShow } from "../redux/profileSlice";
import axios from "axios";
function Follows(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.logged);
  const profile = useSelector((state) => state.profileShow);
  // useEffect(() => {
  //   console.log(user);
  //   if (!user) return navigate("/login");
  //   else {
  //     const getProfile = async () => {
  //       const response = await axios({
  //         method: "GET",
  //         url: `http://localhost:3000/${params.profile}`,
  //         headers: {
  //           Authorization: "Bearer " + (user && user.token),
  //         },
  //       });
  //       dispatch(profileShow(response.data.profile));
  //     };
  //     getProfile();
  //   }
  // }, []);

  return (
    profile && (
      <section className="container followSection">
        <div className="row followSection">
          <SidebarLeft />
          <div className="col-10 col-md-6 p-0">
            <div className="d-flex align-items-center mt-2">
              <div>
                <Link to={`/${profile.profilename}`}>
                  <img src="/backArrow.png" alt="" className="iconAccount" />
                </Link>
              </div>
              <div>
                <a href="#" className="btn p-0 ms-3 text-start">
                  <h3 className="mb-0">
                    {profile.firstname} {profile.lastname}
                  </h3>
                  <p className="bg-transparent m-0">@{profile.profilename}</p>
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-4 border-bottom">
              <Link to="/lautato15/followers" className="btn p-0">
                <h6 className="m-0">Followers</h6>
              </Link>
              <Link to="/lautato15/followings" className="btn p-0">
                <h6 className="m-0">Following</h6>
              </Link>
            </div>
            <Outlet />
          </div>
          <Sidebar />
        </div>
      </section>
    )
  );
}
export default Follows;
