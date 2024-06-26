import { useNavigate } from "react-router-dom";

interface IndexProps {
    id: number;
}

const ButtonView: React.FC<IndexProps> = ({id}) => {

    const navigate = useNavigate();
    const handView = () => {
        navigate(`/card/${id}`);
    };
  return <button style={styles.button} onClick={handView}>View</button>;
};

const styles = {
  button: {
    backgroundColor: "#E33539",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
};

export default ButtonView;
