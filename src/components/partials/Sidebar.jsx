import React from "react";

const sidebar = () => {
  return (
    <div className="col-4 d-none d-md-block border-start">
      <div className="sidebarPositionDiv d-md-flex justify-content-center">
        <div className="d-flex flex-column mt-3">
          <div className="whatHappening border rounded-4 bg-body-tertiary">
            <h4 className="txtLg m-0 fw-bold py-2 px-3">Whats´s happening</h4>
            <div className="trending py-2 px-3 followingDiv">
              <p className="m-0 text-secondary txtSm">Programming - Trending</p>
              <p className="m-0 fw-semibold txtMd">#MongoVsSequelize</p>
              <p className="m-0 text-secondary txtSm">97,5K Tweets</p>
            </div>
            <div className="trending py-2 px-3 followingDiv">
              <p className="m-0 text-secondary txtSm">
                Entreteniment - Trending
              </p>
              <p className="m-0 fw-semibold txtMd">#StarWars</p>
              <p className="m-0 text-secondary txtSm">67,5K Tweets</p>
            </div>
            <div className="trending py-2 px-3 followingDiv rounded-bottom-4">
              <p className="m-0 text-secondary txtSm">News - Trending</p>
              <p className="m-0 fw-semibold txtMd">#LifeMars</p>
              <p className="m-0 text-secondary txtSm">89K Tweets</p>
            </div>
          </div>
          <div className="whoFollow border rounded-4 bg-body-tertiary mt-3">
            <h4 className="txtLg m-0 fw-bold py-2 px-3">Who to follow</h4>
            <div className="d-flex py-2 px-3 followingDiv align-items-center">
              <img
                className="me-2 iconAccount"
                src="/account.svg"
                alt="Icon Account"
              />
              <div className="">
                <p className="m-0 txtMd">Hack Academy</p>
                <p className="m-0 text-secondary txtMd">@HackAcademyDev</p>
              </div>
              <div className="ms-auto">
                <button className="btn buttonFollow text-light rounded-5">
                  Follow
                </button>
              </div>
            </div>
            <div className="d-flex py-2 px-3 followingDiv align-items-center">
              <img
                className="me-2 iconAccount"
                src="/account.svg"
                alt="Icon Account"
              />
              <div>
                <p className="m-0 txtMd">Java Script</p>
                <p className="m-0 text-secondary txtMd">@JavaScript</p>
              </div>
              <div className="ms-auto">
                <button className="btn buttonFollow text-light rounded-5">
                  Follow
                </button>
              </div>
            </div>
            <div className="d-flex py-2 px-3 followingDiv align-items-center">
              <img
                className="me-2 iconAccount"
                src="/account.svg"
                alt="Icon Account"
              />
              <div>
                <p className="m-0 txtMd">MongoDB</p>
                <p className="m-0 text-secondary txtMd">@MongoDB</p>
              </div>
              <div className="ms-auto">
                <button className="btn buttonFollow text-light rounded-5">
                  {" "}
                  Follow{" "}
                </button>
              </div>
            </div>
            <div className="d-flex py-2 px-3 followingDiv align-items-center">
              <img
                className="me-2 iconAccount"
                src="/account.svg"
                alt="Icon Account"
              />
              <div>
                <p className="m-0 txtMd">Node.js</p>
                <p className="m-0 text-secondary txtMd">@nodejs</p>
              </div>
              <div className="ms-auto">
                <button className="btn buttonFollow text-light rounded-5">
                  Follow
                </button>
              </div>
            </div>
            <div className="d-flex py-2 px-3 followingDiv align-items-center rounded-bottom-4">
              <img
                className="me-2 iconAccount"
                src="/account.svg"
                alt="Icon Account"
              />
              <div>
                <p className="m-0 txtMd">MDN Web Docs</p>
                <p className="m-0 text-secondary txtMd">@MozDevNet</p>
              </div>
              <div className="ms-auto">
                <button className="btn buttonFollow text-light rounded-5">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
