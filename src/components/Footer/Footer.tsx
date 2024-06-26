const Home: React.FC = () => {
  return (
    <div style={styles.title as React.CSSProperties}>
      <p>Footer By KienPT</p>
    </div>
  );
};

const styles = {
  title: {
    textAlign: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #dee2e6",
    height: "70px",
  },
};

export default Home;
