import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import styles from "./Home.module.css";
import Help from "./Help";

const Home = () => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const { practiceHsz, practiceHi, practiceTengeriIv } = useAppContext();

  const toFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    }
  };

  return (
    <div className={styles.home}>
      <h1>Kisgéphajó vizsga elmélet</h1>
      <div className={styles.buttons}>
        <button onClick={practiceHsz}>Hajózási Szabályzat</button>
        <button onClick={practiceHi}>Hajózási Ismeretek - Kisgéphajó</button>
        <button onClick={practiceTengeriIv}>Tengeri IV. osztály kieg.</button>
        <button className="outline" onClick={() => setIsHelpVisible(true)}>
          <i className="bi bi-info-circle" /> Olvass el!
        </button>
        <button className="outline" onClick={toFullscreen}>
          <i className="bi bi-arrows-fullscreen" /> Teljes képernyő
        </button>
      </div>
      {isHelpVisible && <Help onClose={() => setIsHelpVisible(false)} />}
    </div>
  );
};

export default Home;
