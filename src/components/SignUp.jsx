import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [frontpage, setFrontpage] = useState(null);
  const formData = new FormData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email);
    formData.set("username", username);
    formData.set("password", password);
    formData.set("avatar", avatar);
    /* formData.set("frontpage", frontpage); */

    await axios({
      method: "POST",
      url: "http://localhost:3000/signup",
      data: formData,
      headers: { "Content-Type": "multipart/from-data" },
    });
    /* console.log(response.data); */
    console.log("LLEGAMOS");
    navigate("/login");
  };

  return (
    <div className="body-login-sign">
      <div className="container">
        <div className="row row-login-sign">
          <div className="d-none d-sm-none d-none d-sm-flex d-md-flex col-md-4 col-lg-7 left-div my-5 login-sign-up flex-column p-4 flex-column">
            <img
              className="imageLoginSign"
              src="/twitter.png"
              alt="Twitter Logo"
            />
            <h2 className="mt-auto login-sign-up-tittle text-start align-self-start">
              Hi!!! Welcome to Twitter
            </h2>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-5 text-start sign-div borderRoundedCol my-5">
            <img
              className="d-block d-md-none imageLoginSign mt-2 ms-1"
              src="/twitter.png"
              alt="Twitter Logo"
            />
            <div className="px-3">
              <div>
                <h4 className="mb-1 fw-bold txtXxl">Sign up</h4>
                <p className="txtSm m-0">
                  Create an account and start using Twitter
                </p>
                <form method="post" encType="multipart/form-data">
                  <div>
                    <label htmlFor="firstname">Nombre</label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="form-control mb-3"
                      id="firstname"
                      name="firstname"
                      required
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname">Apellido</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="form-control mb-3"
                      id="lastname"
                      name="lastname"
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control mb-3"
                      id="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control mb-3"
                      id="username"
                      name="username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="avatar">Foto de usuario</label>
                    <input
                      type="file"
                      className="form-control mb-3"
                      id="avatar"
                      name="avatar"
                      onChange={(e) => setAvatar(e.target.files[0])}
                    />
                  </div>
                  {/*  <div>
                    <label htmlFor="frontPage">Portada</label>
                    <input
                      type="file"
                      className="form-control mb-3"
                      id="frontpage"
                      name="frontpage"
                      onChange={(e) => setFrontpage(e.target.files[0])}
                    />
                  </div> */}
                  <div>
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control mb-3"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <br />
                  <div className="d-grid gap-1">
                    <button
                      className="btn btn-primary rounded-pill btn-lg signLogButton"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center mt-4 little-text">
                  Alerady have an account?<a href="/sign-in"> Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
