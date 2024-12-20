import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import react from "react";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [VehicleColor, setVehicleColor] = useState("");
  const [VehiclePlate, setVehiclePlate] = useState("");
  const [VehicleType, setVehicleType] = useState("");
  const [VehicleCapacity, setVehicleCapacity] = useState("");

  const navigate = useNavigate();

  const { captain, setCaptain } = react.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = {
      email: email,
      password: password,
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      vehicle: {
        color: VehicleColor,
        plate: VehiclePlate,
        vehicleType: VehicleType,
        capacity: VehicleCapacity,
      },
    };
    const apiUrl = "http://localhost:4000/captains/register"; // Replace with your API endpoint
    console.log("API URL:", apiUrl); // Debugging statement to check the URL
    const response = await axios.post(apiUrl, newCaptain);
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    console.log(newCaptain);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
    setVehicleCapacity("");
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
          <h3 className="text-lg font-medium mb-2">What is our Captain Name</h3>
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

          <h3 className="text-lg font-medium mb-2">
            What is Our Captain Email
          </h3>
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
          {/* Vehicle Information Group */}
          <div className="border rounded-lg p-4 mb- ">
            <h3 className="text-xl font-medium mb-4">Vehicle Information</h3>

            <div className="space-y-4 ">
              {/* Vehicle Type Selection */}
              <div>
                <label className="text-lg font-medium mb-2 block">
                  Vehicle Type
                </label>
                <select
                  required
                  className="bg-[#eeee] rounded px-4 py-2 border w-full text-lg"
                  value={VehicleType}
                  onChange={(e) => {
                    setVehicleType(e.target.value);
                  }}
                >
                  <option value="">Select vehicle type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="moto">Moto</option>
                </select>
              </div>

              {/* Vehicle Color */}
              <div>
                <label className="text-lg font-medium mb-2 block">
                  Vehicle Color
                </label>
                <input
                  required
                  className="bg-[#eeee] rounded px-4 py-2 border w-full text-lg"
                  type="text"
                  placeholder="Enter vehicle color"
                  value={VehicleColor}
                  onChange={(e) => {
                    setVehicleColor(e.target.value);
                  }}
                />
              </div>

              {/* Vehicle Capacity */}
              <div>
                <label className="text-lg font-medium mb-2 block">
                  Vehicle Capacity
                </label>
                <input
                  required
                  className="bg-[#eeee] rounded px-4 py-2 border w-full text-lg"
                  type="number"
                  min="1"
                  placeholder="Enter capacity of the vehicle"
                  value={VehicleCapacity}
                  onChange={(e) => {
                    setVehicleCapacity(e.target.value);
                  }}
                />
              </div>

              {/* Vehicle Plate */}
              <div>
                <label className="text-lg font-medium mb-2 block">
                  Vehicle Plate
                </label>
                <input
                  required
                  className="bg-[#eeee] rounded px-4 py-2 border w-full text-lg"
                  type="text"
                  placeholder="Vehicle Plate Number"
                  value={VehiclePlate}
                  onChange={(e) => {
                    setVehiclePlate(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <button
            className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placceholder:text-base"
            type="submit"
          >
            Create Captain Account
          </button>
          <p className="text-center">
            Already have a Account ?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login as Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[7px]">
          sahfah ahfk shas khcvakvs kahfk sdfk hf sdfjhsdf skfh sddhf ahsfjs
          dmnvkn hwiuefh kh fsiuafye dfhsui afy iufheiuf ashfsahf uiweryvb kkf
          kjjhsdfu aksjjdf adsfh ajsdfh asefh{" "}
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
