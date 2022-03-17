export const ModalWin = ({ setPlayingFalse, resetGame }) => {
  const mainMenuClick = () => {
    setPlayingFalse();
  };

  const tryAgainClick = () => {
    resetGame();
  };
  return (
    <div className="modal__win--container">
      <div className="modal__win">
        <h2>Congratulations!</h2>
        <span>You answered 50 questions correctly 👏🏻</span>
        <button className="btn__tryagain" onClick={tryAgainClick}>Play Again</button>
        <button className="btn__mainmenu" onClick={mainMenuClick}>
          Main Menu
        </button>
      </div>
    </div>
  );
};
