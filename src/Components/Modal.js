import { ModalCorrect } from "./ModalCorrect";
import { ModalIncorrect } from "./ModalIncorrect";

export const Modal = ({ isCorrect, setPlayingFalse, resetGame, modalAnimation, setModalAnimationTo1}) => {
  if (!isCorrect) {
    return (
      <ModalIncorrect 
      setPlayingFalse={setPlayingFalse} 
      resetGame={resetGame} 
      />
    );
  } else {
    return <ModalCorrect modalAnimation={modalAnimation} setModalAnimationTo1={setModalAnimationTo1}/>;
  }
};
