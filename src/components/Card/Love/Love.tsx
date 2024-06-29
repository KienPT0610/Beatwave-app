import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";

interface Count {
  count: number;
}

const Love: React.FC<Count> = ({ count }) => {
  const [like, setLike] = useState(0);

  const inC = () => {
    const inc = like + 1;
    setLike(inc);
  };

  return (
    <p onClick={inC} style={styles.numberOfLikes}>
      <MdFavorite style={styles.icon} /> {Number(like)}
    </p>
  );
};

const styles = {
  numberOfLikes: {
    display: "flex",
    alignItems: "center",
    padding: "2px",
    margin: "0px",
    borderRadius: "5px",
    cursor: "mouse",
    fontSize: "16px", 
    color: "#555", 
  },
  icon: {
    fontSize: "24px", 
    marginRight: "5px", 
    color: "#FF6A6A", 
  },
};

export default Love;
