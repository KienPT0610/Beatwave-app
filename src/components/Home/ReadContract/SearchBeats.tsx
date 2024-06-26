import React from "react";
import Card from "../../Card/CardSize/CardBig";

interface ButtonProps {
  index: number;
  // show: boolean;
  // onclick: () => void;
}

const SearchBeatID: React.FC<ButtonProps> = ({ index }) => {
  return <Card index={index} />;
};

export default SearchBeatID;
