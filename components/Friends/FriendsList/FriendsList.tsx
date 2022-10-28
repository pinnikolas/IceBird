import FriendsListHeader from "../FriendsListHeader/FriendsListHeader";
import FriendsSearch from "../FriendsSearch/FriendsSearch";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const FriendsList:FC = () => {
  const [friendsList, setFriendsList] = useState([]);
  const url = "/api";
  useEffect(() => {
    axios(url).then((response) => {
      setFriendsList(response.data[0].friendsList);
    });
  }, []);
  return (
    <div className="friends-list">
      <FriendsListHeader />
      <FriendsSearch />
      <ul className="friends-list__menu">
        {friendsList.map(({ name, surname, imgUrl, id }) => {
          return (
            <li className="friends-list__item" key={id}>
              <div className="friends-list__item-block">
                <Image
                  src={imgUrl}
                  width={80}
                  height={80}
                  className="friends-list__item-image"
                  alt="profile image"
                />
                <div className="friends-list__item-person">
                  <Link href={`/${surname}`}>
                    <p className="friends-list__item-name">
                      {name} {surname}
                    </p>
                  </Link>
                  <p className="friends-list__item-message">Write messege</p>
                </div>
              </div>
              <MoreHorizOutlinedIcon
                color="action"
                className="friends-list__item-more"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
