import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC, useState, useEffect } from "react";

const ProfileFriends: FC = () => {
  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    axios("/api").then((response) => {
      setFriendsList(response.data[0].friendsList);
    });
  }, []);

  return (
    <div className="profile-friends">
      <div className="profile-friends__header">
        <Link href="/friends">
          <div className="profile-friends__header-title">
            Friends: <span>20</span>
          </div>
        </Link>
        <Link href="/">
          <div className="profile-friends__header-requests">
            <span>34</span> requests{" "}
            <KeyboardArrowRightOutlinedIcon color="primary" />
          </div>
        </Link>
      </div>
      <div className="profile-friends__list">
        {friendsList.map(({ name, imgUrl, id }) => {
          return (
            <Link href="/friends" key={id}>
              <li className="profile-friends__item">
                <Image
                  className="profile-friends__item-image"
                  src={imgUrl}
                  width={64}
                  height={64}
                  objectFit="cover"
                  alt="image profile"
                />
                <p className="profile-friends__item-name">{name}</p>
              </li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileFriends;
