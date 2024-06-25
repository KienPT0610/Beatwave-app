import React, { createContext, useState } from "react";
import ReadContract from "../ReadContract/ReadContract";
import SearchBeatID from "../ReadContract/SearchBeats";
import ReactAudioPlayer from "react-audio-player";

const Body = () => {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <>
      <ReadContract />;
      <div style={styles.menu as React.CSSProperties}>
        {showSearch && (
          <>
            <SearchBeatID index={1} />
            <SearchBeatID index={1} />
            <SearchBeatID index={1} />
            <SearchBeatID index={1} />
            <SearchBeatID index={1} />
            <SearchBeatID index={1} />
            <SearchBeatID index={1} />
            <SearchBeatID index={1} />
            <SearchBeatID index={1} />
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
    justifyContent: "center",
  },
};

export default Body;
