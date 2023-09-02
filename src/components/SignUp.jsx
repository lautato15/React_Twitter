import { useState } from "react";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="body-login-sign">
      {/* <% if (messages.errorMessage) { %>
        <div className="alert alert-danger"><%= messages.errorMessage %></div>
        <% } %> */}
      <div className="container">
        <div className="row row-login-sign">
          <div className="d-none d-sm-none d-none d-sm-flex d-md-flex col-md-4 col-lg-7 left-div my-4 login-sign-up flex-column p-4 flex-column">
            <img
              className="imageLoginSign"
              src="/twitter.png"
              alt="Twitter Logo"
            />
            <h2 className="mt-auto login-sign-up-tittle text-start align-self-start">
              Hi! Welcome to Twitter
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
                <form
                  action="/signup"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      className="form-control my-3"
                      id="firstname"
                      name="firstname"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="form-control my-3"
                      id="lastname"
                      name="lastname"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control my-3"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control my-3"
                      id="username"
                      name="username"
                      required
                    />
                  </div>
                  <div>
                    <label for="avatar">Foto de usuario</label>
                    <input
                      type="file"
                      className="form-control my-3"
                      id="avatar"
                      name="avatar"
                    />
                  </div>
                  <div>
                    <label for="frontPage">Portada</label>
                    <input
                      type="file"
                      className="form-control my-3"
                      id="frontPage"
                      name="frontPage"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control my-3"
                      id="password"
                      name="password"
                      required
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
                  Alerady have an account?<a href="/sign-in"> Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="mt-4 rounded shadow p-4 container">
    //   <h1>Registro de usuario</h1>
    //   <form action="">
    //     <div className="mb-3">
    //       <label htmlFor="firstname" className="form-label">
    //         Nombre
    //       </label>
    //       <input
    //         type="text"
    //         name="firstname"
    //         id="firstname"
    //         className="form-control"
    //         value={firstname}
    //         onChange={(e) => setFirstname(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="age" className="form-label">
    //         Edad
    //       </label>
    //       <input
    //         type="number"
    //         name="age"
    //         id="age"
    //         className="form-control"
    //         value={age}
    //         onChange={(e) => setAge(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="username" className="form-label">
    //         Username
    //       </label>
    //       <input
    //         type="text"
    //         name="username"
    //         id="username"
    //         className="form-control"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="password" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         value={password}
    //         className="form-control"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-success">
    //       Registar
    //     </button>
    //   </form>
    // </div>
  );
}

export default SignUp;
