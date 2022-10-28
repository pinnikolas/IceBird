import ProfilePostsItem from "../ProfilePostsItem/ProfilePostsItem";
import { useSelector } from "react-redux";
import { FC, useEffect, useState } from "react";
import axios from "axios";

const ProfilePosts:FC = () => {
  const profilePosts = useSelector((state) => state.profilePosts.profilePosts);
  useEffect(() => {
    axios.get("/api").then((response) => {
      console.log(response.data[0].profilePosts);
    });
  }, []);
  return (
    <div className="profile-posts">
      {profilePosts.map(
        (
          post: JSX.IntrinsicAttributes & {
            name: string;
            surname: string;
            date: string;
            profilePostsText: string;
            id: any;
          }
        ) => {
          return <ProfilePostsItem key={post.id} {...post} />;
        }
      )}
    </div>
  );
};

export default ProfilePosts;
