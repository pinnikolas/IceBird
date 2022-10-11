import { useState } from "react";
import Link from "next/link";

const SideBar = () => {
  const [sidebarElements, setSideBarElements] = useState([
    {
      elementName: "My profile",
      href: "/Profile",
      id: 1,
    },
    {
      elementName: "News",
      href: "/news",
      id: 2,
    },
    {
      elementName: "Messenger",
      href: "/messenger",
      id: 3,
    },
    {
      elementName: "Friends",
      href: "/friends",
      id: 4,
    },
    {
      elementName: "Communities",
      href: "/communities",
      id: 5,
    },
    {
      elementName: "Photos",
      href: "/photos",
      id: 6,
    },
  ]);
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        {sidebarElements.map(({ elementName, id, href }) => {
          return (
            <li className="sidebar__item" key={id}>
              <Link href={href}>{elementName}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
