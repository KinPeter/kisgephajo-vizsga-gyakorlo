import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import styles from "./Home.module.css";
import Help from "./Help";

const Home = () => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const { practiceHsz, practiceHi } = useAppContext();

  return (
    <div className={styles.home}>
      <h1>Kisgéphajó vizsga elmélet</h1>
      <div className={styles.buttons}>
        <button onClick={practiceHsz}>Hajózási Szabályzat</button>
        <button onClick={practiceHi}>Hajózási Ismeretek - Kisgéphajó</button>
        <button className="outline" onClick={() => setIsHelpVisible(true)}>
          <i className="bi bi-info-circle" /> Infó
        </button>
      </div>
      {isHelpVisible && <Help onClose={() => setIsHelpVisible(false)} />}
    </div>
  );
};

export default Home;
