import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss';

export const MovieView = ({ movies, user }) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b.id === movieId);

  const add = () => {
    fetch(`https://myflix-myapp-e7d3dd6fff4f.herokuapp.com/users/${user.Username}/favoriteMovies/${movieId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => response.json())
    .then(response=>{
      console.log(response)
      localStorage.removeItem("user")
      localStorage.setItem("user", JSON.stringify(response));
      if (response) {alert("Movie added")}
  })
    .catch(err=>console.error(err));
  };

  const remove = () => {
    fetch(`https://myflix-myapp-e7d3dd6fff4f.herokuapp.com/users/${user.Username}/favoriteMovies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => response.json())
    .then(response=>{
      console.log(response)
      localStorage.removeItem("user")
      localStorage.setItem("user", JSON.stringify(response));
      if (response) {alert("Movie removed")}
  })
    .catch(err=>console.error(err));
  };

  
   return (
    <div>
      <div>
        <img className="w-100" src={location.href.split("/")[0] + "/" + movie.ImagePath} alt="movie" />
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
      <button style={{ background: "green", color: "white" }} onClick={add}>Add</button>
      <button style={{ background: "red", color: "white" }} onClick={remove}>Remove</button>
  
    </div>
  );
};
