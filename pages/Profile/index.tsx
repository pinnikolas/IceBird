import ProfileMain from "../../components/Profile/ProfileMain/ProfileMain";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

const MyProfile = () => {
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
