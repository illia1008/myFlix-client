import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "The Shawshank Redemption",
      Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      Genre: {
        Name: "Drama",
        Description: "Drama films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature."
      },
      Director: {
        Name: "Frank Darabont",
        Bio: "Frank Arpad Darabont id a Hungarian-American film director, screenwriter, and producer.",
        Birth: "1959",
        Death: "None"
      },
      Featured: true,
      image: "ShawshankRedemptionMoviePoster.jpg"
    },
    {
      id: 2,
      Title: "Inception",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      Genre: {
        Name: "Sci-Fi",
        Description: "Science fiction (Sci-Fi) is a genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science."
      },
      Director: {
        Name: "Christopher Nolan",
        Bio: "Christopher Edward Nolan is a British-American film director, producer, and screenwriter known for his complex storytelling and innovative visual techniques. Born on July 30, 1970, in London, Nolan developed a passion for filmmaking at an early age. His work often explores themes of time, memory, and identity, blending intricate narratives with striking visual effects. Nolan's contributions have earned him numerous accolades, making him one of the most influential and celebrated filmmakers of his generation.",
        Birth: "1970",
        Death: "None"
      },
      Featured: true,
      image: "Inception_poster.jpg"
    },
    {
      id: 3,
      Title: "The Dark Knight",
      Description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      Genre: {
        Name: "Action",
        Description: "Action film is a genre in which the protagonist is thrust into a series of events that typically include violence, extended fighting, physical feats, and frantic chases."
      },
      Director: {
        Name: "Christopher Nolan",
        Bio: "Christopher Edward Nolan is a British-American film director, producer, and screenwriter known for his complex storytelling and innovative visual techniques. Born on July 30, 1970, in London, Nolan developed a passion for filmmaking at an early age. His work often explores themes of time, memory, and identity, blending intricate narratives with striking visual effects. Nolan's contributions have earned him numerous accolades, making him one of the most influential and celebrated filmmakers of his generation.",
        Birth: "1970",
        Death: "None"
      },
      Featured: true,
      image: "The_Dark_Knight_poster.jpg"
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
