import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Followings from "./components/Followings";
import Followers from "./components/followers";
import Error404 from "./components/error404";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/followings" element={<Followings />} />
        <Route path="/error404/:msgerror" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
