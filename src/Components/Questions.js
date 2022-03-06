const decode = (text) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

export const Question = ({ data, index }) => {
  return (
    <div className="question__container">
      <h2 className="question__index">Question {index + 1}</h2>
      <p className="question">{decode(data.question)}</p>
    </div>
  );
};
