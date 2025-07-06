import { useEffect, useMemo, useState } from "react";
import styles from "./Quiz.module.css";

const Quiz = ({ selectedSet, questionObj, onCorrect, onFail }) => {
  const { id, question, correct, incorrect1, incorrect2, image } = questionObj;
  const [isCorrect, setIsCorrect] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState(null);

  useEffect(() => {
    setIsCorrect(null);
    setDisabled(false);
    setClickedAnswer(null);
  }, [questionObj]);

  const imageFolder = useMemo(() => {
    return selectedSet?.imageFolder ? `images/${selectedSet.imageFolder}/` : "";
  }, [selectedSet]);

  const answers = useMemo(() => {
    const options = [correct, incorrect1];
    if (incorrect2) {
      options.push(incorrect2);
    }
    setIsCorrect(null); // Reset state for new question
    return options.sort(() => Math.random() - 0.5);
  }, [correct, incorrect1, incorrect2]);

  const handleAnswer = (answer) => {
    setClickedAnswer(answer);
    setDisabled(true);
    if (answer === correct) {
      setIsCorrect(true);
      setTimeout(() => {
        onCorrect(questionObj);
      }, 1500); // Delay to show feedback
    } else {
      setIsCorrect(false);
    }
  };

  const handleFailOk = () => {
    onFail(questionObj);
  };

  return (
    <div className={styles.quiz}>
      <b className={styles.question}>
        {id}. {question}
      </b>
      {image && (
        <div className={styles.imageContainer}>
          <img src={imageFolder + image} alt={`<Hiányzó kép! (${image})>`} />
        </div>
      )}
      <div className={styles.answers}>
        {answers.map((answer, index) => (
          <button
            className={styles.answer}
            key={index}
            onClick={() => handleAnswer(answer)}
            disabled={disabled}
            style={{
              backgroundColor:
                clickedAnswer === answer
                  ? answer === correct
                    ? "rgba(0, 255, 0, 0.1)"
                    : "rgba(255, 0, 0, 0.1)"
                  : undefined,
            }}
          >
            {answer}
          </button>
        ))}
      </div>
      {isCorrect === true && (
        <div className={styles.feedbackCorrect}>
          <i className="bi bi-check-circle-fill" />
          <h3>Helyes válasz!</h3>
        </div>
      )}
      {isCorrect === false && (
        <div className={styles.feedbackIncorrect}>
          <h3>Helytelen!</h3>
          <p>A helyes válasz: {correct}</p>
          <button onClick={handleFailOk}>OK</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
