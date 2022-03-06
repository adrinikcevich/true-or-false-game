export const Category = ({ data }) => {
  return (
    <div className="category__container">
      <span className="category">{data.category}</span>
    </div>
  );
};
