import Head from "next/head";
import FriendsList from "../../components/Friends/FriendsList/FriendsList";

const Frineds = () => {
  return (
    <div className="friends">
      <Head>
        <title>Friends</title>
      </Head>
      <div className="friends">
        <div className="friends-left">
          <FriendsList />
        </div>
        <div className="friends-right"></div>
      </div>
    </div>
  );
};

export default Frineds;
