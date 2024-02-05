import React, { useContext } from "react";
import Layout from "../components/Layout";
import { AuthContext } from "../context/authContext";

function Profile() {
  const { logout } = useContext(AuthContext);
  return (
    <Layout title="Cafe Profile">
      <div>Edit Profile here</div>

      <button onClick={logout}>Logout</button>
    </Layout>
  );
}

export default Profile;
