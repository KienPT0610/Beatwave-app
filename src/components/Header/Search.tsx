import React, { useState, useEffect, CSSProperties } from "react";
import Card from "../Card/CardSize/CardBig";
import { useNavigate } from "react-router-dom";



const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    if (value === "" || (/^\d+$/.test(value) && Number(value) >= 0)) {
      setSearchTerm(value);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const number = Number(searchTerm);
    if (!isNaN(number)) {
      console.log("Số bạn đã nhập là:", number);
      //xu li so
      // clickFind(number);
      navigate(`/card/${number}`);
    } else {
      console.error("Giá trị nhập vào không phải là số hợp lệ.");
    }
  };

  return (
    <div style={styles.search}>
      <input
        type="text"
        placeholder="Search ID..."
        value={searchTerm}
        onChange={handleInputChange}
        style={styles.searchInput}
      />
      <button style={styles.button} onClick={handleSubmit}>
        Find
      </button>
    </div>
  );
};

const styles = {
  search: {
    marginRight: "10px",
  },
  searchInput: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "300px",
  },
  button: {
    marginLeft: "10px",
    padding: "10px 20px",
    backgroundColor: "#F19373",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    outline: "none",
  },
};

export default Search;
