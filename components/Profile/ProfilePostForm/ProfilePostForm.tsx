import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ProfilePostForm = ({
  handleSubmit,
  profilePostsText,
  setProfilePostsText,
}) => {
  return (
    <div className="profile-post__form">
      <div className="profile-post__form-inner">
          <Image
            width={28}
            height={28}
            src="https://sun2.velcom-by-minsk.userapi.com/impg/KLULg2tw94QM2hb6gB3LMpRnUbU6NwFy6hiEZA/ELcvrdGVsrY.jpg?size=320x320&quality=96&sign=21bdd46448ae7b10385887d31063b860&c_uniq_tag=S_r0rxM3gZtfk6Kqm5oY4Biwv0GRt9SDyl6UxqbGbvo&type=album"
            alt="profile image"
            className="profile-post__form-image"
          />
        <textarea
          className="profile-post__form-input"
          placeholder="What's new?"
          value={profilePostsText}
          onChange={(e) => {
            setProfilePostsText(e.target.value);
          }}
        />
      </div>
      <div className="profile-post__form-bottom">
        <p className="profile-post__form-bottom-text">coming soon...</p>
        <button
          className="profile-post__form-bottom-button"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default ProfilePostForm;
