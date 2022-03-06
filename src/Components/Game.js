import { useEffect, useState } from "react";
import { Question } from "./Questions";
import { Category } from "./Category";
import { Difficulty } from "./Difficulty";
import { Buttons } from "./Buttons";
import { Modal } from "./Modal";
import { Spinner } from "./Spinner";
export const Game = ({ setPlayingFalse }) => {
  const [score, setScore] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState();
  const [isCorrect, setIsCorrect] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalAnimation,setModalAnimation] = useState('0')
  
  const setModalAnimationTo1 = () =>{
    setModalAnimation('1')
  }
  const setModalAnimationTo0 = () =>{
    setModalAnimation('0')
  }
  const endpoint = `https://opentdb.com/api.php?amount=50&type=boolean`;
  const nextQuestion = () =>{
    setIndex((previousIndex)=>previousIndex + 1)
  }
  const setIsCorrectTrue = () => {
    setIsCorrect(true);
    setDisplayModal(true);
    nextQuestion()
  };
  const setIsCorrectFalse = () => {
    setIsCorrect(false);
    setDisplayModal(true);
  };

  const incrementScore = (n) => {
    setScore((initialScore) => initialScore + n);
  };
  const resetGame = () => {
    setScore(0);
    setIndex(0);
    getQuestions();
    setDisplayModal(false);
  };

  const getQuestions = async () => {
    setFetching(true);
    const request = await fetch(endpoint);
    const response = await request.json();
    setQuestions(response.results);
    setFetching(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
    
      <div className="game__container">
        {!fetching ? (
          <div className="game__content">
            <div className="game__content--info">
              <div className="question__info--container">
                <Category data={questions[index]} />
                <Difficulty data={questions[index]} />
              </div>
              <div className="score__container">
                <span className="score">Score: {score}</span>
              </div>
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
          <Spinner/>
        )}
      </div>
      {displayModal ? (
        <Modal
          isCorrect={isCorrect}
          setPlayingFalse={setPlayingFalse}
          resetGame={resetGame}
          modalAnimation={modalAnimation}
          setModalAnimationTo1={setModalAnimationTo1}
        />
      ) : null}
    </>
  );
};
