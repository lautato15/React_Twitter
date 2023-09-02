import React from "react";

const sidebar = () => {
  return (
    <div class="col-4 d-none d-md-block border-start">
      <div class="sidebarPositionDiv d-md-flex justify-content-center">
        <div class="d-flex flex-column mt-3">
          <div class="whatHappening border rounded-4 bg-body-tertiary">
            <h4 class="txtLg m-0 fw-bold py-2 px-3">Whats´s happening</h4>
            <div class="trending py-2 px-3 followingDiv">
              <p class="m-0 text-secondary txtSm">Programming - Trending</p>
              <p class="m-0 fw-semibold txtMd">#MongoVsSequelize</p>
              <p class="m-0 text-secondary txtSm">97,5K Tweets</p>
            </div>
            <div class="trending py-2 px-3 followingDiv">
              <p class="m-0 text-secondary txtSm">Entreteniment - Trending</p>
              <p class="m-0 fw-semibold txtMd">#StarWars</p>
              <p class="m-0 text-secondary txtSm">67,5K Tweets</p>
            </div>
            <div class="trending py-2 px-3 followingDiv rounded-bottom-4">
              <p class="m-0 text-secondary txtSm">News - Trending</p>
              <p class="m-0 fw-semibold txtMd">#LifeMars</p>
              <p class="m-0 text-secondary txtSm">89K Tweets</p>
            </div>
          </div>
          <div class="whoFollow border rounded-4 bg-body-tertiary mt-3">
            <h4 class="txtLg m-0 fw-bold py-2 px-3">Who to follow</h4>
            <div class="d-flex py-2 px-3 followingDiv align-items-center">
              <img
                class="me-2 iconAccount"
                src="/img/account.svg"
                alt="Icon Account"
              />
              <div class="">
                <p class="m-0 txtMd">Hack Academy</p>
                <p class="m-0 text-secondary txtMd">@HackAcademyDev</p>
              </div>
              <div class="ms-auto">
                <Button class="btn buttonFollow text-light rounded-5">
                  {" "}
                  Follow{" "}
                </Button>
              </div>
            </div>
            <div class="d-flex py-2 px-3 followingDiv align-items-center">
              <img
                class="me-2 iconAccount"
                src="/img/account.svg"
                alt="Icon Account"
              />
              <div>
                <p class="m-0 txtMd">Java Script</p>
                <p class="m-0 text-secondary txtMd">@JavaScript</p>
              </div>
              <div class="ms-auto">
                <Button class="btn buttonFollow text-light rounded-5">
                  {" "}
                  Follow{" "}
                </Button>
              </div>
            </div>
            <div class="d-flex py-2 px-3 followingDiv align-items-center">
              <img
                class="me-2 iconAccount"
                src="/img/account.svg"
                alt="Icon Account"
              />
              <div>
                <p class="m-0 txtMd">MongoDB</p>
                <p class="m-0 text-secondary txtMd">@MongoDB</p>
              </div>
              <div class="ms-auto">
                <Button class="btn buttonFollow text-light rounded-5">
                  {" "}
                  Follow{" "}
                </Button>
              </div>
            </div>
            <div class="d-flex py-2 px-3 followingDiv align-items-center">
              <img
                class="me-2 iconAccount"
                src="/img/account.svg"
                alt="Icon Account"
              />
              <div>
                <p class="m-0 txtMd">Node.js</p>
                <p class="m-0 text-secondary txtMd">@nodejs</p>
              </div>
              <div class="ms-auto">
                <Button class="btn buttonFollow text-light rounded-5">
                  {" "}
                  Follow{" "}
                </Button>
              </div>
            </div>
            <div class="d-flex py-2 px-3 followingDiv align-items-center rounded-bottom-4">
              <img
                class="me-2 iconAccount"
                src="/img/account.svg"
                alt="Icon Account"
              />
              <div>
                <p class="m-0 txtMd">MDN Web Docs</p>
                <p class="m-0 text-secondary txtMd">@MozDevNet</p>
              </div>
              <div class="ms-auto">
                <Button class="btn buttonFollow text-light rounded-5">
                  {" "}
                  Follow{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
