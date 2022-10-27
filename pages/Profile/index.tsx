import ProfileMain from "../../components/Profile/ProfileMain/ProfileMain";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const [profilePosts, setProfilePosts] = useState([
    {
      imgUrl:
        "https://sun2.velcom-by-minsk.userapi.com/impg/KLULg2tw94QM2hb6gB3LMpRnUbU6NwFy6hiEZA/ELcvrdGVsrY.jpg?size=320x320&quality=96&sign=21bdd46448ae7b10385887d31063b860&c_uniq_tag=S_r0rxM3gZtfk6Kqm5oY4Biwv0GRt9SDyl6UxqbGbvo&type=album",
      name: "Nikolay",
      surname: "Talish",
      text: "hello world now!",
      likes: 2,
    },
  ]);
  const url = "/api";
  useEffect(() => {
    fetch(url).then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div className="profile">
      <Head>
        <title>Nikolay Talish</title>
      </Head>
      <ProfileHeader />
      <ProfileMain />
    </div>
  );
};

export default MyProfile;
