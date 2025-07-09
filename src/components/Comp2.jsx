export const Comp2 = ({ count, onClickHandler }) => {
  const handleClick = onClickHandler;
  return (
    <div>
      <h3>Comp1 Counter</h3>
      <p>{count}</p>
      <button onClick={handleClick}> + </button>
    </div>
  );
};
