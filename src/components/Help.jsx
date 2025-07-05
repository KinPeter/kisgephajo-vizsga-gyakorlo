import styles from "./Help.module.css";

const Help = ({ onClose }) => {
  return (
    <div className={styles.help}>
      <div className={styles.header}>
        <h2>Infó</h2>
        <button className={"icon-button"} onClick={onClose}>
          <i className="bi bi-x-lg" />
        </button>
      </div>
      <p>
        Gyakorló kérdések a Kisgéphajó vezetői elméleti vizsgákhoz. A kérdések a
        KAV honlapjáról lettek letöltve és a 2025. július 5-i állapotot tükrözik
        (Hajózási szabályzat 2024, hajózási ismeretek 2022).
      </p>
      <p>
        Az alkalmazás az adott témában a haladást automatikusan menti, és a
        böngészőben tárolja csak, így a kérdések és válaszok nem kerülnek
        elmentésre sehol máshol. Amikor új eszközrről vagy más böngészőből
        nyitod meg az oldalt, akkor a kérdés sorozatok előről indulnak.
      </p>
      <p>Gyakorlásnál a láblécben található gombok:</p>
      <ul>
        <li>
          <i className="bi bi-shuffle" />: Véletlenszerű sorrend
        </li>
        <li>
          <i className="bi bi-sort-numeric-down" />: Kérdések sorszám szerint
        </li>
        <li>
          <i className="bi bi-arrow-clockwise" />: Kérdéssorozat újraindítása
        </li>
        <li>
          <i className="bi bi-arrows-fullscreen" />: Teljes képernyő mód
        </li>
        <li>
          <i className="bi bi-house" />: Vissza a főoldalra
        </li>
      </ul>
    </div>
  );
};

export default Help;
