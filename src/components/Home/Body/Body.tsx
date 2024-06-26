import React, { createContext, useState } from "react";
import ReadContract from "../../../containers/Contract/ContractData/ReadContract/ReadInforContract";
import CardMini from "../../Card/CardSize/CardMini";

interface Search {
  onSetIndex: (index: number) => void;
}

const Body: React.FC<Search> = ({onSetIndex}) => {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <>
      <ReadContract/>
      <div style={styles.menu as React.CSSProperties}>
        {showSearch && (
          <>
            <CardMini index={1}/>
          </> 
        )}
      </div>
    </>
  );
};

const styles = {
  menu: {
    display: "flex",
    flexWrap: "wrap",
    flex: "0 0 auto",
    padding: "10px",
    // justifyContent: "center",
  },
};

export default Body;
