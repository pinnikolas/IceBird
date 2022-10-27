import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfileFriends = () => {
  const [friendsList, setFriendsList] = useState([
    {
      name: "Maxim",
      urlImage:
        "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
      id: 1,
    },
    {
      name: "Nikita",
      urlImage:
        "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
      id: 2,
    },
    {
      name: "Denis",
      urlImage:
        "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
      id: 3,
    },
    {
      name: "Stanislav",
      urlImage:
        "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
      id: 4,
    },
    {
      name: "Dmitriy",
      urlImage:
        "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
      id: 5,
    },
    {
      name: "German",
      urlImage:
        "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
      id: 6,
    },
    {
      name: "Sergey",
      urlImage:
        "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
      id: 7,
    },
    {
      name: "Natalya",
      urlImage:
        "https://sun9-87.userapi.com/impg/N4Lc16UToQFI9P7M3zaB1mQziNvtZzbnQpyqhg/OawMOfoW8cQ.jpg?size=320x320&quality=96&sign=80d419ff4265d1d1777c1d3cf2e4b356&c_uniq_tag=O_5m2M9zvls1X-Lt1RSQI33-5oR0U6DKHYRlhmZ6mFE&type=album",
      id: 8,
    },
  ]);
  return (
    <div className="friends">
      <div className="friends__header">
        <Link href="/friends">
          <div className="friends__header-title">
            Friends: <span>20</span>
          </div>
        </Link>
        <Link href="/">
          <div className="friends__header-requests">
            <span>34</span> requests{" "}
            <KeyboardArrowRightOutlinedIcon color="primary" />
          </div>
        </Link>
      </div>
      <div className="friends__list">
        {friendsList.map(({ name, urlImage, id }) => {
          return (
            <Link href="/friends" key={id}>
              <li className="friends__item">
                <Image
                  className="friends__item-image"
                  src={urlImage}
                  width={64}
                  height={64}
                  objectFit="cover"
                  alt="image profile"
                />
                <p className="friends__item-name">{name}</p>
              </li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileFriends;
