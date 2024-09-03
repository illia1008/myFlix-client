import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
 return (
   <Card className="h-100">

      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          See full information
        </Button>
      </Card.Body>
    </Card>
  );
};