import Link from "next/link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import Image from "next/image";

const ProfileHeader = ({}) => {
  return (
    <div className="profile-header">
      <div className="profile-header__background"></div>
      <div className="profile-header__container">
        <div className="profile-header__information">
          <div className="profile-header__image">
            <Image
              className="profile-header__image"
              src="https://sun2.velcom-by-minsk.userapi.com/impg/KLULg2tw94QM2hb6gB3LMpRnUbU6NwFy6hiEZA/ELcvrdGVsrY.jpg?size=320x320&quality=96&sign=21bdd46448ae7b10385887d31063b860&c_uniq_tag=S_r0rxM3gZtfk6Kqm5oY4Biwv0GRt9SDyl6UxqbGbvo&type=album"
              height={170}
              width={170}
              alt="image-profile"
            />
          </div>
          <div className="profile-header__information-block">
            <p className="profile-header__name">Nikolay Talish</p>
            <p className="profile-header__status">inst: pinnikolay</p>
            <div className="profile-header__information-status">
              <p className="profile-header__information-location">
                <LocationOnOutlinedIcon fontSize="small" color="primary" />
                Minsk
              </p>
              <p className="profile-header__information-education">
                <SchoolOutlinedIcon fontSize="small" color="primary" />
                BSUIR
              </p>
              <p className="profile-header__information-more">
                <InfoOutlinedIcon fontSize="small" color="primary" />
                Learn more
              </p>
            </div>
          </div>
        </div>
        <div className="profile-header__buttons">
          <div className="profile-header__button">
            <Link href="/settings">Edit profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
