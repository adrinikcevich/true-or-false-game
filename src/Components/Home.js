export const Home = ({setPlayingTrue}) => {
  
  return (
    <>
      <h1 className="title">Quiz Game</h1>
      <button className="btn__play" onClick={setPlayingTrue}>
        Play
      </button>
    </>
  );
};
