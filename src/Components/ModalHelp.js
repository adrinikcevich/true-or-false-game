import { Icon } from "@iconify/react";
import preview from "../Assets/preview.png";
export const ModalHelp = ({ closeModal }) => {
  return (
    <div className="modal__help--container">
      <button className="modal__help--btn" onClick={() => closeModal()}>
        <Icon icon="bi:arrow-left-circle" />
        Back
      </button>
      <div className="modal__help">
        <h1 className="modal__help--title">Help</h1>
        <h2 className="modal__help--subtitle">About</h2>
        <p>
          This is a classic true-or-false game. Every question will have a
          random category and difficulty. Each question answered correctly will
          increase the score depending on the difficulty.
          <li>Easy: +1</li>
          <li>Medium: +2</li>
          <li>Hard: +3</li>
        </p>
        <h2 className="modal__help--subtitle">How to Play</h2>
        <div className="howtoplay__list">
            <li><Icon icon="twemoji:red-heart" />1 life</li>
            <li><Icon icon="twemoji:hourglass-done" />20 seconds per question</li>
            <li><Icon icon="twemoji:check-mark-button" />Answer 50 questions correctly to win </li>
          </div>
        <div className="modal__help--preview-container">
          <img
            src={preview}
            alt="preview"
            className="modal__help--preview"
          ></img>
        </div>
      </div>
    </div>
  );
};
