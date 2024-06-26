import { useState } from "react";

interface ChildProps {
  name: string;
  // onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClick: () => void;
}

const Button: React.FC<ChildProps> = ({ name, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      style={{
        ...styles.button,
        backgroundColor: isHovered ? "#FCD9C4" : "#F6B297",
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p style={styles.text as React.CSSProperties}>{name}</p>
    </div>
  );
};

const styles = {
  button: {
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
    marginLeft: "10px",
    marginRight: "10px",
    cursor: "pointer",
    width: "auto",
    height: "40px",
    borderRadius: "20px",
    transition: "background-color 0.3s",
  },
  text: {
    margin: 0, 
    padding: '10px',
    fontSize: "16px", 
    fontWeight: "bold",
    color: "#333", 
  },
};
export default Button;
