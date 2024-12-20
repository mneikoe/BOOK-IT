import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";
import react from "react";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = react.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = { email: email, password: password };
    const apiUrl = "http://localhost:4000/captains/login"; // Replace with your API endpoint
    console.log("API URL:", apiUrl); // Debugging statement to check the URL
    const response = await axios.post(apiUrl, newCaptain);

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    console.log(newCaptain);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://www.pngall.com/wp-content/uploads/4/Uber-PNG-Image.png"
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
            Join a fleet!{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[green] flex items-center justify-center text-white font-semibold mb-2 rounded px-4 py-2  w-full text-lg placceholder:text-base"
        >
          Login in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
