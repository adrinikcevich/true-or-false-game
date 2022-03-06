import { useState } from "react";
export const Buttons = ({
  data,
  setIsCorrectTrue,
  setIsCorrectFalse,
  incrementScore,
  setModalAnimationTo0,
}) => {
  const changeScore = (difficulty) => {
    if (difficulty === "easy") {
      incrementScore(1);
    } else if (difficulty === "medium") {
      incrementScore(2);
    } else {
      incrementScore(3);
    }
  };
  const clickOnTrue = () => {
    if (data.correct_answer === "True") {
      setIsCorrectTrue();
      changeScore(data.difficulty);
      setModalAnimationTo0()
    } else {
      setIsCorrectFalse();
    }
  };

  const clickOnFalse = () => {
    if (data.correct_answer === "False") {
      setIsCorrectTrue();
      changeScore(data.difficulty);
      setModalAnimationTo0()
    } else {
      setIsCorrectFalse();
    }
  };

  return (
    <div className="buttons__container">
      <button className="btn__true game__btn" onClick={clickOnTrue}>
        True
      </button>
      <button className="btn__false game__btn" onClick={clickOnFalse}>
        False
      </button>
    </div>
  );
};
