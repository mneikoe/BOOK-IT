/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const user_Data = {
      email: email,
      password: password,
    };
    const apiUrl = "http://localhost:4000/users/login";
    console.log("API URL:", apiUrl);
    const response = await axios.post(apiUrl, user_Data);
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token); //we use this to take the token so that on refreshing page the user must not be logged out
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">Whats Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placceholder:text-base"
            type="email"
            placeholder="Email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placceholder:text-base"
            type="password"
            placeholder="Password"
          />

          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placceholder:text-base"
            type="submit"
          >
            Login
          </button>
          <p className="text-center">
            New here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create new User Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[red] flex items-center justify-center text-white font-semibold mb-2 rounded px-4 py-2  w-full text-lg placceholder:text-base"
        >
          Login in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
