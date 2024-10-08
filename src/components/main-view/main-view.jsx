import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";


export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || "");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch("https://myflix-myapp-e7d3dd6fff4f.herokuapp.com/movies", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then((response) => response.json())
        .then((data) => {
          const moviesFromApi = data.map((movie) => {

            return {
              id: movie._id,
              Title: movie.Title,
              Description: movie.Description,
              ImagePath: movie.ImagePath,
              Director: movie.Director.Name,
              Bio: movie.Director.Bio,
              Genre: movie.Genre.Name,
            };
          });

          setMovies(moviesFromApi);
        });
    }
  }, [localStorage.getItem("token")]);

  const onLoggedOut = () => {
    localStorage.clear();
    location.href = "/";
  }
  const updatedUser = user => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  const filteredMovies = movies.filter(movie => 
    movie.Title.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={onLoggedOut}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} user={user} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/users/:Username"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={5}>
                    <ProfileView
                      user={user}
                      movies={movies}
                      updatedUser={updatedUser}
                      onLoggedOut={onLoggedOut}
                    />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              !user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <>
                  <Col md={12} style={{ marginBottom: "1em" }}>
                    <input
                      type="text"
                      placeholder="Search movie title"
                      value={filterTerm}
                      onChange={(e) => setFilterTerm(e.target.value)} 
                      style={{ width: "50%", padding: "1em", fontSize: "1em" }}
                    />
                  </Col>
                  {filteredMovies.map((movie) => (
                    <Col className="mb-4" key={movie.id} md={3}>
                      <MovieCard movie={movie} />
                    </Col>
                  ))}
                </>
              )
            }
          />
        </Routes>

      </Row>
    </BrowserRouter>
  );
};