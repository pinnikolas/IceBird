import ProfilePostsItem from "../ProfilePostsItem/ProfilePostsItem";
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks";
import axios from "axios";

const ProfilePosts: FC = () => {
  const profilePosts = useAppSelector((state) => state.profilePosts.list);
  useEffect(() => {
    axios.get("/api").then((response) => {
      console.log(response.data[0].profilePosts);
    });
  }, []);
  return (
    <div className="profile-posts">
      {profilePosts.map((post) => {
        return <ProfilePostsItem key={post.id} {...post} />;
      })}
    </div>
  );
};

export default ProfilePosts;
