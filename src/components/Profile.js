import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser.data.hp);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.data.email}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.data.tgl_lahir}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.data.hp}
      </p>
    </div>
  );
};

export default Profile;
