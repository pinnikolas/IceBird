import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FC } from "react";

const FriendsSearch:FC = () => {
  return (
    <div className="friends-search">
      <SearchOutlinedIcon
        className="friends-search__icon"
        sx={{ color: "#93a3bc" }}
      />
      <input
        type="text"
        className="friends-search__input"
        placeholder="Search friends"
      />
    </div>
  );
};

export default FriendsSearch;
