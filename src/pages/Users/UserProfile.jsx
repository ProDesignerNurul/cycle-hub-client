import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  return (
    <div>
      <img src={photoURL} alt="" />
      <h2>Name : {displayName}</h2>
      <p>Email : {email}</p>
    </div>
  );
};

export default UserProfile;
