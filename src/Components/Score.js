import { ScoreIncrement } from "./ScoreIncrement";

export const Score = ({score, increment,setIncrementTo0}) => {
  return (
    <div className="score__container">
        <ScoreIncrement increment={increment} setIncrementTo0={setIncrementTo0}/>
      <span className="score">Score: {score}</span>
    </div>
  );
};
