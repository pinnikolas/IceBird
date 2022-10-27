import ProfilePostsItem from "../ProfilePostsItem/ProfilePostsItem";
import { useSelector } from "react-redux";
const ProfilePosts = ({}) => {
  const profilePosts = useSelector((state) => state.profilePosts.profilePosts);
  return (
    <div className="profile-posts">
      {profilePosts.map(
        (
          post: JSX.IntrinsicAttributes & {
            name: string;
            surname: string;
            date: any;
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
