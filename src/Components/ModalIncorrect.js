import { Icon } from "@iconify/react";

export const ModalIncorrect = ({ setPlayingFalse, resetGame }) => {
  const mainMenuClick = () => {
    setPlayingFalse();
  };

  const tryAgainClick = () => {
    resetGame();
  };

  return (
    <div className="modal__incorrect--container">
      <div className="modal__incorrect">
        <div>
          <Icon icon="akar-icons:circle-x" className="modal__icon" />
          <span className="modal__text">Wrong Answer :(</span>
        </div>

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
