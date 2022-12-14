import Link from "next/link";
import Image from "next/image";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { deletePost } from "../../../store/Slices/PostSlice";
import { useAppDispatch } from "../../../hooks";
import { FC } from "react";
interface IprofilePostsItemTypes {
  name: string;
  surname: string;
  date: string;
  profilePostsText: string;
  id: string;
}

const ProfilePostsItem: FC<IprofilePostsItemTypes> = ({
  name,
  surname,
  date,
  profilePostsText,
  id,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="profile-post__item">
      <div className="profile-post__item-header">
        <div className="profile-post__item-header-block">
          <Image
            width={40}
            height={40}
            src="https://sun2.velcom-by-minsk.userapi.com/impg/KLULg2tw94QM2hb6gB3LMpRnUbU6NwFy6hiEZA/ELcvrdGVsrY.jpg?size=320x320&quality=96&sign=21bdd46448ae7b10385887d31063b860&c_uniq_tag=S_r0rxM3gZtfk6Kqm5oY4Biwv0GRt9SDyl6UxqbGbvo&type=album"
            alt="profile image"
            className="profile-post__item-image"
          />
          <div className="profile-post__item-header-information">
            <Link href="/Profile">
              <p className="profile-post__item-header-name">
                {name} {surname}
              </p>
            </Link>
            <p className="profile-post__item-header-date">{date}</p>
          </div>
        </div>

        <DeleteOutlinedIcon
          sx={{ color: "red" }}
          className="profile-post__item-header-delete"
          onClick={() => {
            dispatch(deletePost(id));
          }}
        />
      </div>
      <div className="profile-post__item-content">{profilePostsText}</div>
    </div>
  );
};

export default ProfilePostsItem;
