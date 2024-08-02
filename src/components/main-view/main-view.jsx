import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      Description:
        "Drama films are serious presentations or stories with settings or life…",
      Genre: {
        Name: "Drama",
        Description:
          "Drama films are serious presentations or stories with settings or life…"
      },
      Director: {
        Name: "Frank Darabont",
        Bio:
          "Frank Arpad Darabont id a Hungarian-American film director, screenwrit…",
        Birth: "1959",
        Death: "None"
      },
      Featured: true,
      image: "ShawshankRedemptionMoviePoster.jpg"
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      Description:
        "Drama films are serious presentations or stories with settings or life…",
      Genre: {
        Name: "Drama",
        Description:
          "Drama films are serious presentations or stories with settings or life…"
      },
      Director: {
        Name: "Frank Darabont",
        Bio:
          "Frank Arpad Darabont id a Hungarian-American film director, screenwrit…",
        Birth: "1959",
        Death: "None"
      },
      Featured: true
    },
    {
      id: 3,
      title: "The Shawshank Redemption",
      Description:
        "Drama films are serious presentations or stories with settings or life…",
      Genre: {
        Name: "Drama",
        Description:
          "Drama films are serious presentations or stories with settings or life…"
      },
      Director: {
        Name: "Frank Darabont",
        Bio:
          "Frank Arpad Darabont id a Hungarian-American film director, screenwrit…",
        Birth: "1959",
        Death: "None"
      },
      Featured: true
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
