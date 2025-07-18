import { useFetch } from "./useFetch";

export const FetchEffect = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>{data && data.map((item) => <p key={item.id}>Title - {item.title}</p>)}</div>
  );
};
