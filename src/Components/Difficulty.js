export const Difficulty = ({ data }) => {
    return (
      <div className={`difficulty__container difficulty__${data.difficulty}`}>
        <span  className="difficulty">{data.difficulty.toUpperCase()}</span>
      </div>
    );
  };
  