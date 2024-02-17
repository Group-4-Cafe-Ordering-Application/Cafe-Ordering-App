import React, { useState, useContext } from "react";
import { useTheme } from "@emotion/react";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/authContext";
import { Helmet } from "react-helmet";

function Login() {
  const theme = useTheme();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function validatePassword(password) {
    if (password.length >= 8) {
      return true;
    }
  }

  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const handleConfirm = (event) => {
    setConfirmPassword(event.target.value);
  };

  const toggleInputType = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleRegistration = async () => {
    if (!validateEmail(userEmail)) {
      setError("Invalid email");
    } else if (!validatePassword(userPassword)) {
      setError("Password must be at least 8 characters long");
    } else if (userPassword !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        const user = await createUserWithEmailAndPassword(
          FIREBASE_AUTH,
          userEmail,
          userPassword
        );

        alert("User created successfully");
        login(user);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
        } else {
          setError(error.message);
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Cafe Ordering App - Register</title>
      </Helmet>
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <div
          className="p-3 text-xl"
          style={{ color: theme.palette.primary.text }}
        >
          Register account
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg p-8 ">
          <div className="flex flex-wrap justify-end mb-2">
            <div>Email:</div>
            <input
              className="border-2 ml-2"
              type="text"
              value={userEmail}
              onChange={handleEmail}
            ></input>
          </div>

          <div className="flex flex-wrap justify-end mb-2">
            <div>Password:</div>
            <input
              className="border-2 ml-2"
              type={inputType}
              value={userPassword}
              onChange={handlePassword}
            ></input>
          </div>

          <div className="flex flex-wrap justify-end mb-2">
            <div>Confirm:</div>
            <input
              className="border-2 ml-2"
              type={inputType}
              value={confirmPassword}
              onChange={handleConfirm}
            ></input>
          </div>

          <div className="text-red-700">{error}</div>

          <div className="flex flex-wrap justify-end">
            <input
              className="mr-2"
              type="checkbox"
              onClick={toggleInputType}
            ></input>
            <div>{inputType === "password" ? "Show" : "Hide"} Content</div>
          </div>

          <div className="flex flex-row justify-evenly mt-5">
            <button
              className="border-2 p-2 rounded-xl"
              onClick={handleRegistration}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
