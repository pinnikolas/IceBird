import ProfilePostsItem from "../ProfilePostsItem/ProfilePostsItem";
import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const ProfilePosts: FC = () => {
  const profilePosts = useAppSelector((state) => state.profilePosts.list);

  return (
    <div className="profile-posts">
      {profilePosts.map((post) => {
        return <ProfilePostsItem key={post.id} {...post} />;
      })}
    </div>
  );
};

export default ProfilePosts;
