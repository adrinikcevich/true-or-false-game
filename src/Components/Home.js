import TitleIMG from "../Assets/Title_1.png";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { ModalHelp } from "./ModalHelp";
export const Home = ({ setPlayingTrue }) => {
  const [displayHelp, setDisplayHelp] = useState(false);

  const closeModal = () => {
    setDisplayHelp(false);
  };
  return (
    <>
      {displayHelp ? <ModalHelp closeModal={closeModal} /> : null}
      <div className={displayHelp ? "hidden" :"home__container"}>
        <div className="home__title">
          <img src={TitleIMG} alt="True Or False" />
        </div>
        <div className="home__btn--container">
          <button className="btn__play" onClick={setPlayingTrue}>
            Play
          </button>
          <button
            className="btn__info"
            onClick={() => {
              setDisplayHelp(true);
            }}
          >
            <Icon icon="akar-icons:question" />
          </button>
          <span className="tooltip__help">Help</span>
        </div>
      </div>
    </>
  );
};
