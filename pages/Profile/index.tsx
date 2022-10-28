import ProfileMain from "../../components/Profile/ProfileMain/ProfileMain";
import ProfileHeader from "../../components/Profile/ProfileHeader/ProfileHeader";
import Head from "next/head";


const MyProfile = () => {
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
