import React from "react";

const ButtonSale = () => {
    return (
        <div style={styles.button as React.CSSProperties}>Post for sale</div>
    );
}

const styles = {
    button: {
      backgroundColor: "#FF6A6A",
      width: "auto",
      height: "25px",
      cursor: "pointer",
      textAlign: 'center',
      margin: '20px',
      borderRadius: '20px',
    },
  };

export default ButtonSale;