import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/loggedSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: "http://localhost:3000/login",
      method: "POST",
      data: { password, username },
    });
    /* console.log(response.data.error); */
    if (response.data.token) {
      dispatch(login(response.data));
      navigate("/");
    } else if (response.data.error) {
      navigate(`/error404/${response.data.error}`);
    }
  };

  return (
    <div className="body-login-sign">
      {/* FLASH */}
      {/* <% if (messages.error) { %>
      <div className="alert alert-danger"><%= messages.error %></div>
      <% } %> */}
      <div className="container">
        <div className="row row-login-sign">
          <div className="d-none d-sm-none d-none d-sm-flex d-md-flex col-md-4 col-lg-7 left-div my-5 login-sign-up flex-column p-4 flex-column">
            <img
              className="imageLoginSign"
              src="/twitter.png"
              alt="Twitter Logo"
            />
            <h2 className="mt-auto login-sign-up-tittle text-start align-self-start">
              Hey! Nice to see you again
            </h2>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-5 text-start sign-div borderRoundedCol my-5 p-3 justify-content-center align-items-center">
            <div className="m-5">
              <div className="m-0">
                <h4 className="mb-1 mt-4 sign-up-login-title">Login</h4>
                <p className="little-text">Ready to start using Twitter?</p>
                <form action="/login" method="post" onSubmit={handleSubmit}>
                  <div className="nada">
                    <label htmlFor="email" className="form-label"></label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="firstName" className="form-label"></label>
                    <label htmlFor="password" className="form-label"></label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="d-grid gap-1">
                    <button
                      className="btn btn-primary rounded-pill btn-lg signLogButton"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center mt-4 little-text">
                  Don't have an account?<a href="/signup"> Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
