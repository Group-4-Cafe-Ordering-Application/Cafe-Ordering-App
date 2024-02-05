import React, { useState, useContext } from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../context/authContext";

function ResetPassword() {
  const theme = useTheme();
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const handleResetRequest = async () => {
    if (!validateEmail(userEmail)) {
      setMessage("Invalid email");
    } else {
      try {
        const user = await sendPasswordResetEmail(FIREBASE_AUTH, userEmail);
        setMessage("Email sent to " + userEmail + ". Please check your inbox.");
      } catch (error) {
        setMessage(error.message);
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <div className="p-3 text-xl">Reset Password</div>
      <div className="bg-gray-100 shadow-lg rounded-lg p-8 m-2">
        <div className="flex flex-wrap mb-2">
          <div>Email:</div>
          <input
            className="border-2 ml-2"
            type="text"
            value={userEmail}
            onChange={handleEmail}
          ></input>
        </div>

        <div className="text-red-700 text-wrap">{message}</div>

        <div className="flex flex-row justify-evenly mt-5">
          <button
            className="border-2 p-2 rounded-xl"
            onClick={handleResetRequest}
          >
            Request Password Reset
          </button>
        </div>
        <button className="underline mt-5" onClick={() => navigate("/")}>
          Return to Login
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
