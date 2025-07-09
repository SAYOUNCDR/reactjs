import { useState } from "react";
export const StatesHooks = () => {
  // number inc dec useState()
  const [count, setcount] = useState(0);
  const increment = () => setcount(count + 1);
  const decrement = () => setcount(count - 1);

  //array add, delete, update useState()
  const [friends, setFriends] = useState(["Sayoun", "Alex", "John", "Michel"]);
  const addNewFriend = () => setFriends([...friends, "New Friend"]);
  const removeFriend = () => setFriends(friends.filter((f) => f != "John"));
  const updateFriend = () => {
    setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));
  };

  //object useState()
  const [movie, setMovie] = useState({
    title: "Endagame",
    ratings: 9.8,
  });

  const handleClickRating = () => {
    //update long way
    // const copymovies = {
    //   ...movie,
    //   ratings: 5,
    // };
    // setMovie(copymovies);

    //update object short hand way
    setMovie({ ...movie, ratings: 10 });
  };

  //Array of object
  const [arrayMovies, setarrayMovies] = useState([
    { id: 1, title: "Avangers: EndGame", ratings: 9.8 },
    { id: 2, title: "Spider-man HomeComing", ratings: 8.9 },
  ]);

  const changeName = () => {
    setarrayMovies(
      arrayMovies.map((m) =>
        m.id === 1 ? { ...arrayMovies, title: "John Wick 4" , ratings: 9 } : m
      )
    );
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addNewFriend}>Add new friend</button>
      <button onClick={removeFriend}>Remove friend</button>
      <button onClick={updateFriend}>Update friend</button>

      <h1>Object title: {movie.title}</h1>
      <p>Object ratings: {movie.ratings}</p>
      <button onClick={handleClickRating}>Change Rating</button>

      {arrayMovies.map((m) => (
        <>
          <li>{m.title}</li>
          <li>{m.ratings}</li>
        </>
      ))}

      <button onClick={changeName}>Change name</button>
    </div>
  );
};
