import React from "react";
import ProfileFriends from "../ProfileFriends/ProfileFriends";
import ProfileMainTabs from "../ProfileMainTabs/ProfileMainTabs";
import ProfilePostForm from "../ProfilePostForm/ProfilePostForm";

const ProfileMaim = () => {
  return (
    <div className="profile-main">
      <div className="profile-main__column">
        <ProfileMainTabs />
        <ProfilePostForm />
      </div>
      <div className="profile-sidebar">
        <ProfileFriends />
      </div>
    </div>
  );
};

export default ProfileMaim;
