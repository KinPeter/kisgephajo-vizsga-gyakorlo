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
        KAV honlapjáról lettek letöltve és a 2025. júliusi állapotot tükrözik
        (Hajózási szabályzat 2024, hajózási ismeretek 2022, tengeri kieg. 2023).
      </p>
      <p>
        Az alkalmazás az adott témában a haladást automatikusan menti, és a
        böngészőben tárolja csak, így a kérdések és válaszok nem kerülnek
        elmentésre sehol máshol. Amikor új eszközrről vagy más böngészőből
        nyitod meg az oldalt, akkor a kérdés sorozatok előről indulnak.
      </p>
      <p>
        Helytelen válasz esetén a kérdés visszakerül a sorozat végére, így
        újrakezdés nélkül is legalább egyszer még meg fog jelenni.
      </p>
      <p>Mobilról érdemes a teljes képernyős módot használni.</p>
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
      <p>
        <b>Figyelem!</b> Ez egy hobbi projekt, és nem hivatalos alkalmazás. A
        kérdések és válaszok helyességéért, illetve az alkalmazás kifogástalan
        működéséért nem tudok felelősséget vállalni. Ha hibát találsz,
        jelezheted az <a href="mailto:kinpeter85@gmail.com">emailemen</a>, és
        amennyiben időm engedi, igyekszem javítani.
      </p>
      <p>
        A kérdések és válaszok forrásai a{" "}
        <a
          href="https://vizsgakozpont.hu/hajozas/hajos-kepesitesek"
          target="_blank"
        >
          Közlekedési Alkalmassági Vizsgaközpont honlapjáról
        </a>{" "}
        szabadon letölthető tartalmak.
      </p>
      <p>
        Készült: 2025{" "}
        <a href="https://www.p-kin.com" target="_blank">
          P-Kin.com
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/KinPeter/kisgephajo-vizsga-gyakorlo"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Help;
