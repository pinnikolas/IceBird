import React from "react";
import ProfileFriends from "../ProfileFriends/ProfileFriends";
import ProfileMainPhotos from "../ProfileMainPhotos/ProfileMainPhotos";
import ProfileMainTabs from "../ProfileMainTabs/ProfileMainTabs";

const ProfileMaim = () => {
  return (
    <div className="profile-main">
      <ProfileMainTabs />
      <ProfileFriends />
    </div>
  );
};

export default ProfileMaim;
