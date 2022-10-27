import ProfileFriends from "../ProfileFriends/ProfileFriends";
import ProfileMainTabs from "../ProfileMainTabs/ProfileMainTabs";
import ProfilePostForm from "../ProfilePostForm/ProfilePostForm";
import ProfilePosts from "../ProfilePosts/ProfilePosts";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../store/Slices/PostSlice";

const ProfileMaim = () => {
  const [profilePostsText, setProfilePostsText] = useState("");
  const dispatch = useDispatch();
  const addNewPost = () => {
    dispatch(addPost({ profilePostsText }));
    setProfilePostsText("");
  };
  return (
    <div className="profile-main">
      <div className="profile-main__column">
        <ProfileMainTabs />
        <ProfilePostForm
          handleSubmit={addNewPost}
          profilePostsText={profilePostsText}
          setProfilePostsText={setProfilePostsText}
        />
        <ProfilePosts />
      </div>
      <div className="profile-sidebar">
        <ProfileFriends />
      </div>
    </div>
  );
};

export default ProfileMaim;
