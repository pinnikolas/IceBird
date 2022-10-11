import Link from "next/link";

const Header = () => {
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
          <img
            className="header__profile-image"
            src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
            alt="profile-icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
