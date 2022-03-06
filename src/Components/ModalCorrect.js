import { Icon } from "@iconify/react";
import { useState } from "react";

export const ModalCorrect = ({modalAnimation, setModalAnimationTo1}) => {
  

  return (
    <div
      className="modal__correct"
      onAnimationEnd={() => setModalAnimationTo1()}
      animation={modalAnimation}
    >
      <Icon icon="akar-icons:circle-check" className="modal__icon" />
      <span className="modal__text">Correct!</span>
    </div>
  );
};
