import { useEffect, useState } from "react";
import { Question } from "./Questions";
import { Category } from "./Category";
import { Difficulty } from "./Difficulty";
import { Buttons } from "./Buttons";
import { Modal } from "./Modal";
import { Spinner } from "./Spinner";
import { Score } from "./Score";
import { Timer } from "./Timer";
import { ModalWin } from "./ModalWin";

export const Game = ({ setPlayingFalse }) => {
  const [score, setScore] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState();
  const [isCorrect, setIsCorrect] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState("0");
  const [increment, setIncrement] = useState();
  const [timerRun, setTimerRun] = useState("1");
  const [win, setWin] = useState(false);
  const [timeEnd, setTimeEnd] = useState(false);
  const setModalAnimationTo1 = () => {
    setModalAnimation("1");
  };
  const setModalAnimationTo0 = () => {
    setModalAnimation("0");
  };
  const setTimeEndTrue = () => {
    setTimeEnd(true);
    setDisplayModal(true);
    updateHighestScore(score);
  };
  const amount = 50;
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=boolean`;
  const nextQuestion = () => {
    setIndex((previousIndex) => previousIndex + 1);
  };
  const setIsCorrectTrue = () => {
    setIsCorrect(true);
    setDisplayModal(true);
    if (index !== amount - 1) {
      nextQuestion();
      timerRun === "1" ? setTimerRun("0") : setTimerRun("1");
    } else {
      setWin(true);
    }
    
  };
  const setIsCorrectFalse = () => {
    setTimeEnd(false);
    setIsCorrect(false);
    setDisplayModal(true);
    updateHighestScore(score);
  };

  const incrementScore = (n) => {
    setIncrement(n);
    setScore((initialScore) => initialScore + n);
  };
  const resetGame = () => {
    setScore(0);
    setIndex(0);
    getQuestions();
    setDisplayModal(false);
    setIsCorrect(null);
    setWin(false)
  };
  const setIncrementTo0 = () => {
    setIncrement(0);
  };
  const getQuestions = async () => {
    setFetching(true);
    const request = await fetch(endpoint);
    const response = await request.json();
    setQuestions(response.results);
    setFetching(false);
  };
  const updateHighestScore = (newScore) => {
    const storage = window.localStorage;
    if (newScore > storage.getItem("Highest Score")) {
      storage.setItem("Highest Score", newScore);
    }
  };
  useEffect(() => {
    getQuestions();
    const storage = window.localStorage;
    if (storage.getItem("Highest Score") === null) {
      storage.setItem("Highest Score", 0);
    }
    setTimerRun("0");
  }, []);

  return (
    <>
      <div className="game__container">
        {!fetching ? (
          <div className="game__content">
            <Timer
              timerRun={timerRun}
              isCorrect={isCorrect}
              setTimeEndTrue={setTimeEndTrue}
              win={win}
            />
            <div className="game__content--info">
              <div className="question__info--container">
                <Category data={questions[index]} />
                <Difficulty data={questions[index]} />
              </div>
              <Score
                score={score}
                increment={increment}
                setIncrementTo0={setIncrementTo0}
              />
            </div>

            <Question data={questions[index]} index={index} />
            <Buttons
              data={questions[index]}
              setIsCorrectTrue={setIsCorrectTrue}
              setIsCorrectFalse={setIsCorrectFalse}
              incrementScore={incrementScore}
              setModalAnimationTo0={setModalAnimationTo0}
            />
          </div>
        ) : (
          <Spinner />
        )}
      </div>
      {displayModal ? (
        <Modal
          isCorrect={isCorrect}
          setPlayingFalse={setPlayingFalse}
          resetGame={resetGame}
          modalAnimation={modalAnimation}
          setModalAnimationTo1={setModalAnimationTo1}
          score={score}
          index={index}
          timeEnd={timeEnd}
        />
      ) : null}
      {win ? <ModalWin setPlayingFalse={setPlayingFalse} resetGame={resetGame}/> : null}
    </>
  );
};
