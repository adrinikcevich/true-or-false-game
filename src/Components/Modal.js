import { ModalCorrect } from "./ModalCorrect";
import { ModalIncorrect } from "./ModalIncorrect";

export const Modal = ({
  isCorrect,
  setPlayingFalse,
  resetGame,
  modalAnimation,
  setModalAnimationTo1,
  score,
  index,
  timeEnd,
}) => {
  if (!isCorrect) {
    return (
      <ModalIncorrect
        setPlayingFalse={setPlayingFalse}
        resetGame={resetGame}
        score={score}
        index={index}
        timeEnd={timeEnd}
      />
    );
  } else {
    return (
      <ModalCorrect
        modalAnimation={modalAnimation}
        setModalAnimationTo1={setModalAnimationTo1}
      />
    );
  }
};
