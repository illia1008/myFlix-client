import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div
    >
      <img src={movie.ImagePath} alt="" className="src" />
      <p>Title: {movie.Title}</p>
      <p>Description: {movie.Description}</p>
      <p>Genre: {movie.Genre.Name}</p>
      <p>Genre descrition: {movie.Genre.Description}</p>
      <p>Director: {movie.Director.Name}</p>
      <p>Bio: {movie.Director.Bio}</p>
      <button onClick={onBackClick}>Back to the all movies</button>
    </div>
  );
};
