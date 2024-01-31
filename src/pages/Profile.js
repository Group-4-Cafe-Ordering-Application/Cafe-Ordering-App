import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Layout title="Cafe Profile">
      <div>Edit Profile here</div>

      {/* temp: will be event handler to handle logout */}
      <Link to="/">Logout</Link>
    </Layout>
  );
}

export default Profile;
