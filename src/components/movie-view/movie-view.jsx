import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss';


export const MovieView = ({ movies, user}) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b.id === movieId);

  const add = () => {
 
    fetch(`https://myflix-myapp-e7d3dd6fff4f.herokuapp.com/users/${user.Username}/favoriteMovies/${movieId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },

      }
    ).then((response) => {
      console.log(response);
      if (response.ok) {
        alert("Movie added successfully!");
      } else {
        alert("Something wrong. Movie was NOT added!");
      }
    })

  }

  
  const remove = () => {
 
    fetch(`https://myflix-myapp-e7d3dd6fff4f.herokuapp.com/users/${user.Username}/favoriteMovies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },

      }
    ).then((response) => {
      console.log(response);
      if (response.ok) {
        alert("Movie REMOVED successfully!");
      } else {
        alert("Something wrong. Movie was NOT REMOVED!");
      }
    })

  }

  return (
    <div>
      <div>
        <img className="w-100" src={location.href.split("/")[0] + "/" + movie.ImagePath} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
      <button style={{background: "green", color: "white"}} onClick={add}>Add</button>
      <button style={{background: "red", color: "white"}} onClick={remove}>Remove</button>
    </div>
  );
};
