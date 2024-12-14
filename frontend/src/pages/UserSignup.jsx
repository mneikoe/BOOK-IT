import { Link } from "react-router-dom";
import { useState } from "react";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Whats Your Name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeee] w-1/2 h-15 rounded px-4 py-2 border  text-base placceholder:text-sm"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border  text-base placceholder:text-sm"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Whats Your Email</h3>
          <input
            required
            className="bg-[#eeee] mb-6 rounded px-4 py-2 border w-full text-base placceholder:text-sm"
            type="email"
            placeholder="Email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            required
            className="bg-[#eeee] mb-6 rounded px-4 py-2 border w-full text-lg placceholder:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placceholder:text-base"
            type="submit"
          >
            Login
          </button>
          <p className="text-center">
            Already have a Account ?{" "}
            <Link to="/login" className="text-blue-600">
              Login as User
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px]">
          sahfah ahfk shas khcvakvs kahfk sdfk hf sdfjhsdf skfh sddhf ahsfjs
          dmnvkn hwiuefh kh fsiuafye dfhsui afy iufheiuf ashfsahf uiweryvb kkf
          kjjhsdfu aksjjdf adsfh ajsdfh asefh{" "}
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
