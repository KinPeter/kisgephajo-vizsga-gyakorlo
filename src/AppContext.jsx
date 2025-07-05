import { useCallback, useState } from "react";
import { AppContext, Page } from "./hooks/useAppContext";
import { QuestionSets } from "./constants";

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState(Page.HOME);
  const [selectedSet, setSelectedSet] = useState(QuestionSets.HSZ);
  const [isRandom, setIsRandom] = useState(false);
  const [question, setQuestion] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [failedQuestions, setFailedQuestions] = useState(0);
  const [doneQuestions, setDoneQuestions] = useState(0);

  const practiceHi = () => {
    setSelectedSet(QuestionSets.HI);
    setNextQuestion(QuestionSets.HI);
    setPage(Page.PRACTICE);
  };

  const practiceHsz = () => {
    setSelectedSet(QuestionSets.HSZ);
    setNextQuestion(QuestionSets.HSZ);
    setPage(Page.PRACTICE);
  };

  const setNextQuestion = useCallback(
    (set) => {
      const stored = localStorage.getItem(set.storageKey);
      if (!stored) {
        const progress = { done: [], remaining: [...set.questions], failed: 0 };
        localStorage.setItem(set.storageKey, JSON.stringify(progress));
        const question = isRandom
          ? set.questions[Math.floor(Math.random() * set.questions.length)]
          : set.questions[0];
        setQuestion(question);
        setTotalQuestions(set.questions.length);
        setDoneQuestions(0);
        setFailedQuestions(0);
      } else {
        const { done, remaining, failed } = JSON.parse(stored);
        if (remaining.length === 0) {
          setQuestion(null);
          return;
        }
        const nextQuestion = isRandom
          ? remaining[Math.floor(Math.random() * remaining.length)]
          : remaining[0];
        setQuestion(nextQuestion);
        setTotalQuestions(set.questions.length);
        setDoneQuestions(done.length);
        setFailedQuestions(failed);
      }
    },
    [isRandom]
  );

  const handleCorrect = useCallback(
    (questionObj) => {
      const stored = localStorage.getItem(selectedSet.storageKey);
      if (!stored) return;

      const progress = JSON.parse(stored);
      progress.done.push(questionObj);
      progress.remaining = progress.remaining.filter(
        (q) => q.id !== questionObj.id
      );
      localStorage.setItem(selectedSet.storageKey, JSON.stringify(progress));
      setNextQuestion(selectedSet);
    },
    [selectedSet, setNextQuestion]
  );

  const handleFail = useCallback(
    (questionObj) => {
      const stored = localStorage.getItem(selectedSet.storageKey);
      if (!stored) return;

      const progress = JSON.parse(stored);
      progress.failed += 1;
      progress.remaining = progress.remaining.filter(
        (q) => q.id !== questionObj.id
      );
      progress.remaining.push(questionObj);
      localStorage.setItem(selectedSet.storageKey, JSON.stringify(progress));
      setNextQuestion(selectedSet);
    },
    [selectedSet, setNextQuestion]
  );

  const restartSet = useCallback(() => {
    const stored = localStorage.getItem(selectedSet.storageKey);
    if (!stored) return;

    const progress = JSON.parse(stored);
    progress.done = [];
    progress.remaining = [...selectedSet.questions];
    progress.failed = 0;
    localStorage.setItem(selectedSet.storageKey, JSON.stringify(progress));
    setNextQuestion(selectedSet);
  }, [selectedSet, setNextQuestion]);

  const value = {
    page,
    setPage,
    selectedSet,
    question,
    practiceHi,
    practiceHsz,
    isRandom,
    setIsRandom,
    doneQuestions,
    totalQuestions,
    failedQuestions,
    handleCorrect,
    handleFail,
    restartSet,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
