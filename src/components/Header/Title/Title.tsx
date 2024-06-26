import { SiMusicbrainz } from "react-icons/si";

const Title = () => {
    return(
        <p style={styles.title}><SiMusicbrainz/>Beat Wave</p>
    );
}

const styles = {
    title: {
      marginTop: '30px',
      fontSize: "40px", 
      color: '#780062'
    },
  };

export default Title;