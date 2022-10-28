import { FC } from "react";
import { useState } from "react";
import Image from "next/image";

const ProfileMainPhotos:FC = () => {
  const [profileMainPhotosList, setProfileMainPhotosList] = useState([
    {
      imageUrl:
        "https://sun2.velcom-by-minsk.userapi.com/impg/KLULg2tw94QM2hb6gB3LMpRnUbU6NwFy6hiEZA/ELcvrdGVsrY.jpg?size=320x320&quality=96&sign=21bdd46448ae7b10385887d31063b860&c_uniq_tag=S_r0rxM3gZtfk6Kqm5oY4Biwv0GRt9SDyl6UxqbGbvo&type=album",
      id: 1,
      imageName: "photo",
    },
    {
      imageUrl:
        "https://sun9-16.userapi.com/impg/1QTlndhPUTNiswiSuTKZiMCbJCNrvy_gmPmteA/o_6Qk2rncag.jpg?size=320x427&quality=96&sign=119105aeae91b0e5a1117851d45a5a88&c_uniq_tag=AShCvJta-KbIDiqdhWx40QEYb-S6KZWZxeJPHav4YAM&type=album",
      id: 2,
      imageName: "photo",
    },
    {
      imageUrl:
        "https://sun9-84.userapi.com/impg/1Wt_YjBRLuoq3vf8FrR07T0SQd51kALzyjgLJw/d70Xq8ql1_c.jpg?size=320x427&quality=96&sign=250aa149e3edea94442943666a4ee244&c_uniq_tag=uK_MQwC14XM9xs01j5KBBSVUM7k2paFu_fKhXuuWCUw&type=album",
      id: 3,
      imageName: "photo",
    },
    {
      imageUrl:
        "https://sun9-34.userapi.com/impg/FBhMTonM84u3M7Y0ENk8d4VdqWyCZghB7Tka2w/YlIndBEqSPU.jpg?size=320x213&quality=96&crop=99,0,1082,720&sign=cfbd2b0d9892611bd484cf5eb9dea465&c_uniq_tag=ywhlXUVSP-cL763xqq1POdlR-FGR3BO7yRje5umYrfE&type=album",
      id: 4,
      imageName: "photo",
    },
    {
      imageUrl:
        "https://sun9-1.userapi.com/impg/5jF1xFoLH3d0UI67SX1ENS3_KMqJuP81Eq5gew/G5sgvB9EmXA.jpg?size=320x320&quality=96&sign=3d0afa3a7415677d79fcd1f970191404&c_uniq_tag=8XjUQ_GTjP-u9H66gwQIIHJh38WdIQrjCHFtbMNQul8&type=album",
      id: 5,
      imageName: "photo",
    },
    {
      imageUrl:
        "https://sun9-38.userapi.com/impf/LbTpJYCyZoKHj7ShCmpn2p6y53yM7FbMm9hV_Q/wkn9vChNb7s.jpg?size=320x570&quality=96&sign=42968aa0f587ba4cd827ffb5f2ac35cb&c_uniq_tag=gfT3gGUKhTSUJkHpAGiECTtQyWol1YIu-bLUr_MOUWs&type=album",
      id: 6,
      imageName: "photo",
    },
    {
      imageUrl:
        "https://sun9-82.userapi.com/impf/c857528/v857528010/a5275/S-L7RvmO1o4.jpg?size=320x480&quality=96&sign=c7f709bd7a5e516f3f5b68e60e22bbbb&c_uniq_tag=WeMkO_hw95h20xk3ktsgGs_jrRjYHQKRC7ShCOgpOn4&type=album",
      id: 7,
      imageName: "photo",
    },
    {
      imageUrl:
        "https://sun9-39.userapi.com/impf/c851220/v851220101/1fc467/5wKXlOdywbU.jpg?size=320x569&quality=96&sign=48f1b1f403588dec8f163e236b04770b&c_uniq_tag=Zj-jyHTzAY4xLPdnYWv8nym_X1_m__9XwO-FcjORl6Q&type=album",
      id: 8,
      imageName: "photo",
    },
  ]);
  return (
    <div className="profile-main__photos">
      <ul className="profile-main__photos-list">
        {profileMainPhotosList.map(({ imageUrl, imageName, id }) => {
          return (
            <li className="profile-main__photos-item" key={id}>
              <Image src={imageUrl} alt={imageName} height={126} width={126} objectFit="cover"/>
            </li>
          );
        })}
      </ul>
      <div className="profile-main__photos-buttons">
        <button className="profile-main__photos-button">Upload Photo</button>
        <button className="profile-main__photos-button">Show All</button>
      </div>
    </div>
  );
};

export default ProfileMainPhotos;
