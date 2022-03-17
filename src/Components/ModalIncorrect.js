import { Icon } from "@iconify/react";

export const ModalIncorrect = ({
  setPlayingFalse,
  resetGame,
  score,
  index,
  timeEnd,
}) => {
  const mainMenuClick = () => {
    setPlayingFalse();
  };

  const tryAgainClick = () => {
    resetGame();
  };

  return (
    <div className="modal__incorrect--container">
      <div className="modal__incorrect">
        {!timeEnd ? (
          <div>
            <Icon icon="akar-icons:circle-x" className="modal__icon" />
            <span className="modal__text">Wrong Answer :(</span>
          </div>
        ) : (
          <div>
            <Icon icon="fa:hourglass-3" className="modal__icon modal__icon--hourglass" />
            <span className="modal__text">Time's Up</span>
          </div>
        )}
        <span>Correct answers: {index}</span>
        <span>Your score: {score}</span>
        <span>
          Highest score: {window.localStorage.getItem("Highest Score")}
        </span>
        <button className="btn__tryagain" onClick={tryAgainClick}>
          Try Again
        </button>
        <button className="btn__mainmenu" onClick={mainMenuClick}>
          Main Menu
        </button>
      </div>
    </div>
  );
};
