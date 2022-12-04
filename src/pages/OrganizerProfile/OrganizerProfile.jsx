import { userInfo } from "os";
import React from "react";
import { useWeb3AuthContext } from "../../contexts/SocialLoginContext";
import "./OrganizerProfile.css";

const OrganizerProfile = () => {
  const {
    address,
    loading: eoaLoading,
    userInfo,
    connect,
    disconnect,
    getUserInfo,
  } = useWeb3AuthContext();
  return (
    <div>
      <h2>Welcome, {userInfo.name} to your Organizer Profile</h2>
      <div className="user-info">
        <img className="profileImg" src={userInfo.profileImage} alt="Profile" />
        <h3>Name: {userInfo.name}</h3>
        <h3>Email ID: {userInfo.email}</h3>
      </div>
    </div>
  );
};

export default OrganizerProfile;
