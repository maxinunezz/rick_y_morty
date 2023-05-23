import { ButtonA } from "../../button";
import { useState } from "react";
import "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  //le paso como parametro el bojeto que debe ver
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input type="search" onChange={handleChange} value={id} />
      <ButtonA onClick={() => onSearch(id)}>Add</ButtonA>
    </div>
  );
};
export default SearchBar;
