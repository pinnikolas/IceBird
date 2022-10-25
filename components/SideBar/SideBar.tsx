import { useState } from "react";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import React from "react";

const SideBar = () => {
  const [sidebarElements, setSideBarElements] = useState([
    {
      elementName: "My profile",
      href: "/Profile",
      icon: <AccountCircleOutlinedIcon fontSize="small" color="primary" />,
      id: 1,
    },
    {
      elementName: "News",
      href: "/news",
      icon: <ArticleOutlinedIcon fontSize="small" color="primary" />,
      id: 2,
    },
    {
      elementName: "Messenger",
      href: "/messenger",
      icon: <ChatBubbleOutlineOutlinedIcon fontSize="small" color="primary" />,
      id: 3,
    },
    {
      elementName: "Friends",
      href: "/friends",
      icon: <PeopleAltOutlinedIcon fontSize="small" color="primary" />,
      id: 4,
    },
    {
      elementName: "Communities",
      href: "/communities",
      icon: <GroupsOutlinedIcon fontSize="small" color="primary" />,
      id: 5,
    },
    {
      elementName: "Photos",
      href: "/photos",
      icon: (
        <PhotoSizeSelectActualOutlinedIcon fontSize="small" color="primary" />
      ),
      id: 6,
    },
  ]);
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        {sidebarElements.map(({ elementName, id, href, icon }) => {
          return (
            <li className="sidebar__item" key={id}>
              {icon}
              <Link href={href}>{elementName}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
