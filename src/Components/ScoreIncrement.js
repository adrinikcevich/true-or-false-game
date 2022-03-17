export const ScoreIncrement = ({ increment, setIncrementTo0 }) => {
  if(increment > 0){
    return <span className='score__increment' onAnimationEnd={()=>setIncrementTo0()}>+{increment}</span>;
  }else return null
};
