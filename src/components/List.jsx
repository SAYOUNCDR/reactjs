export const List = () => {
  let numbers = ["Sayoun", "Ram", "John", "Anav", "Anurag"];
  return (
    <div>
      <ol>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ol>
    </div>
  );
};
