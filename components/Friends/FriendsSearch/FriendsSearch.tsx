import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FC, useState } from "react";
interface IFriendsSearch {
  onSearch: (value: string) => void;
  changeSearchValue: (value: any) => string;
}

const FriendsSearch: FC<IFriendsSearch> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState(" ");

  const changeSearchValue = (e) => {
    onSearch(e.target.value);
    setSearchValue(e.target.value);
  };
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
        onChange={changeSearchValue}
      />
    </div>
  );
};

export default FriendsSearch;
