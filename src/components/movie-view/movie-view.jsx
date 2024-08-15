export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div
    >
      <img src={movie.ImagePath} alt="" className="src" />
      <p>Title: {movie.Title}</p>
      <p>{movie.Description}</p>
      <p>{movie.Genre.Name}</p>
      <p>{movie.Director.Name}</p>
      <button onClick={onBackClick}>Back to the all movies</button>
    </div>
  );
};
