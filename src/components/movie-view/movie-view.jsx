export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div
    >
      <img src={movie.image} alt="" className="src" />
      <p>Title: {movie.title}</p>
      <p>{movie.Description}</p>
      <p>{movie.Genre.Name}</p>
      <p>{movie.Director.Name}</p>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
