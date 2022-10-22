import { useState } from "react";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import ProfileMainPhotos from "../ProfileMainPhotos/ProfileMainPhotos";

const ProfileMainTabs = () => {
  const [
    profileMainPhotosNavigationItems,
    setProfileMainPhotosNavigationItems,
  ] = useState([
    {
      itemName: "Photos",
      itemIcon: (
        <PhotoSizeSelectActualOutlinedIcon fontSize="small" color="primary" />
      ),
      id: 1,
    },
    {
      itemName: "Videos",
      itemIcon: (
        <PlayCircleOutlineOutlinedIcon fontSize="small" color="primary" />
      ),
      id: 2,
    },
    {
      itemName: "Music",
      itemIcon: <MusicNoteOutlinedIcon fontSize="small" color="primary" />,
      id: 3,
    },
  ]);
  const [profileMainTabsItemClass, setProfileMainTabsItemClass] = useState(
    "profile-main__tabs-item"
  );
  return (
    <div className="profile-main__tabs">
      <div className="profile-main__tabs-navigation">
        <ul className="profile-main__tabs-menu" hidden="1">
          {profileMainPhotosNavigationItems.map(
            ({ itemName, itemIcon, id }) => {
              return (
                <li
                  className={profileMainTabsItemClass}
                  key={id}
                  onClick={() => {
                    setProfileMainTabsItemClass(
                      "profile-main__tabs-item" +
                        " " +
                        "profile-main__tabs-item_active"
                    );
                  }}
                >
                  {itemIcon}
                  {itemName}
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="profile-main__tabs-content">
        <ProfileMainPhotos />
      </div>
    </div>
  );
};

export default ProfileMainTabs;
