import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalTweet() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleImputValue = () => setShow(false);
  return (
    <>
      <Button className="buttonTweetHome" onClick={handleShow}>
        Tweet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div>
          <i class=" btn bi bi-x-lg" onClick={handleClose}></i>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <img
                className="sidebarLeftImages"
                src="/public/usuario.png"
                alt="profile img"
              />
            </div>
            <div className="col-11">
              <span class="badge rounded-pill text-bg-primary">
                Everyone <i class="bi bi-chevron-down"></i>
              </span>
              <Modal.Body>
                <form>
                  <label hidden htmlFor=""></label>
                  <input
                    custom-textarea
                    type="text"
                    value={value}
                    placeholder="What is happening?!"
                  />
                </form>
              </Modal.Body>
            </div>
          </div>
        </div>

        <Modal.Footer>
          <Button
            className="sidebarLeftBtnTweet"
            variant="primary"
            onClick={handleClose}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTweet;
