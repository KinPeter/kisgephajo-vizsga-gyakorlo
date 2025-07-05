import { Page, useAppContext } from "../hooks/useAppContext";
import Quiz from "./Quiz";
import styles from "./Practice.module.css";
import Help from "./Help";
import { useState } from "react";

const Practice = () => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const {
    question,
    selectedSet,
    totalQuestions,
    doneQuestions,
    failedQuestions,
    handleCorrect,
    handleFail,
    isRandom,
    setIsRandom,
    setPage,
    restartSet,
  } = useAppContext();

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
    <div className={styles.practice}>
      <header>
        <h2>{selectedSet?.name ?? ""}</h2>
      </header>

      <main>
        {question ? (
          <div className={styles.quizContainer}>
            <Quiz
              selectedSet={selectedSet}
              questionObj={question}
              onCorrect={handleCorrect}
              onFail={handleFail}
            />
          </div>
        ) : (
          <div className={styles.noQuestions}>
            <h2>Nincsenek további kérdések.</h2>
            <p>
              A kérdések végére értél. Válassz másik kérdéssort vagy kezd ezt
              előről.
            </p>
          </div>
        )}
      </main>

      <footer>
        <div className={styles.progress}>
          <i className="bi bi-patch-question" /> {doneQuestions} /{" "}
          {totalQuestions} |{" "}
          <span className={styles.failedCount}>
            <i className="bi bi-emoji-frown" /> {failedQuestions}
          </span>
        </div>
        <div className={styles.buttons}>
          {isRandom ? (
            <button className="icon-button" onClick={() => setIsRandom(false)}>
              <i className="bi bi-sort-numeric-down" />
            </button>
          ) : (
            <button className="icon-button" onClick={() => setIsRandom(true)}>
              <i className="bi bi-shuffle" />
            </button>
          )}
          <button className="icon-button" onClick={() => setPage(Page.HOME)}>
            <i className="bi bi-house" />
          </button>
          <button className="icon-button" onClick={restartSet}>
            <i className="bi bi-arrow-clockwise" />
          </button>
          <button className="icon-button" onClick={toFullscreen}>
            <i className="bi bi-arrows-fullscreen" />
          </button>
          <button
            className="icon-button"
            onClick={() => setIsHelpVisible(true)}
          >
            <i className="bi bi-info-circle" />
          </button>
        </div>
      </footer>
      {isHelpVisible && <Help onClose={() => setIsHelpVisible(false)} />}
    </div>
  );
};

export default Practice;
