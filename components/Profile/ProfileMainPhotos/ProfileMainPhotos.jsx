import { useState } from "react";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";

const ProfileMainPhotos = () => {
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
  return (
    <div className="profile-main__photos">
      <div className="profile-main__photos-navigation">
        <ul className="profile-main__photos-menu">
          {profileMainPhotosNavigationItems.map(
            ({ itemName, itemIcon, id }) => {
              return (
                <li className="profile-main__photos-item" key={id}>
                  {itemIcon}
                  {itemName}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfileMainPhotos;
