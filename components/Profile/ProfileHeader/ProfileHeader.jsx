import Link from "next/link";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ProfileHeader = ({}) => {
  return (
    <div className="profile-header">
      <div className="profile-header__information">
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
