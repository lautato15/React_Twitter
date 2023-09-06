import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("Llegamos");
    e.preventDefault();
    const response = await axios({
      url: "http://localhost:3000/signup",
      method: "POST",
      data: { firstname, lastname, email, username, password },
    });
    console.log(response.data);
    navigate("/login");
  };

  return (
    <div className="body-login-sign">
      <div className="container">
        <div className="row row-login-sign">
          <div className="d-none d-sm-none d-none d-sm-flex d-md-flex col-md-4 col-lg-7 left-div my-4 login-sign-up flex-column p-4 flex-column">
            <img
              className="imageLoginSign"
              src="/twitter.png"
              alt="Twitter Logo"
            />
            <h2 className="mt-auto login-sign-up-tittle text-start align-self-start">
              Hi!!! Welcome to Twitter
            </h2>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-5 text-start sign-div borderRoundedCol my-4">
            <img
              className="d-block d-md-none imageLoginSign mt-2 ms-1"
              src="/twitter.png"
              alt="Twitter Logo"
            />
            <div className="m-5 px-3">
              <div>
                <h4 className="mb-1 fw-bold txtXxl">Sign up</h4>
                <p className="txtSm m-0">
                  Create an account and start using Twitter
                </p>
                <form>
                  <div>
                    <label htmlFor="firstname">{firstname}</label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="form-control my-3"
                      id="firstname"
                      name="firstname"
                      required
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname">{lastname}</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="form-control my-3"
                      id="lastname"
                      name="lastname"
                      required
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">{email}</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control my-3"
                      id="email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="username">{username}</label>
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control my-3"
                      id="username"
                      name="username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="avatar">Foto de usuario</label>
                    <input
                      type="file"
                      className="form-control my-3"
                      id="avatar"
                      name="avatar"
                    />
                  </div>
                  <div>
                    <label htmlFor="frontPage">Portada</label>
                    <input
                      type="file"
                      className="form-control my-3"
                      id="frontPage"
                      name="frontPage"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">{password}</label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control my-3"
                      id="password"
                      name="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
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
