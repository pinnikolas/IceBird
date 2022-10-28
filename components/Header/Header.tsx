import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container container-header">
        <div className="header__logo">
          <Link href="/">IceBird</Link>
        </div>
        <div className="header__profile">
          <div className="header__search">
            <input
              type="text"
              className="header__search-input"
              placeholder="Search"
            />
          </div>
          <Image
            src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
            alt="profile-icon"
            width={35}
            height={35}
            className="header__profile-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
