import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import {MovieCard} from  "../movie-card/movie-card";

export const ProfileView = ({ user, movies }) => {


  const [Username, setUsername] = useState(user.Username);
  const [Password, setPassword] = useState(user.Password);
  const [Email, setEmail] = useState(user.Email);
  const [Birthday, setBirthday] = useState(new Date(user.Birthday));


  // Format the birthday date
  const formattedBirthday = new Date(user.Birthday).toLocaleDateString();


  const ProfileDelete = () => {
    fetch(`https://myflix-myapp-e7d3dd6fff4f.herokuapp.com/users/${user.Username}`,
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
        console.log("Account deleted successfully!");
      } else {
        alert("Something wrong. Account was NOT deleted!");
      }
    })
  }

  const ProfileUpdate = (event) => {
    event.preventDefault();

    const data = {
      Username: Username,
      Password: Password,
      Email: Email,
      Birthday: Birthday
    }

    fetch(`https://myflix-myapp-e7d3dd6fff4f.herokuapp.com/users/${user.Username}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(data),
      }
    ).then((response) => {
      console.log(response);
      if (response.ok) {
        console.log("Update successful!");
        return response.json();
      } else {
        alert("Update failed!");
      }
    })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Header>
              <userInfo
                Name={user.Username}
                Email={user.Email} />
            </Card.Header>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Form onSubmit={ProfileUpdate}>
                <h2>Update User Information</h2>
                <Form.Group controlId="createUsername">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                  />
                </Form.Group>

                <Form.Group controlId="createPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="createEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="createBirthday">
                  <Form.Label>Birthday:</Form.Label>
                  <Form.Control
                    type="date"
                    value={Birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                  />
                </Form.Group>
                <br></br>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Edit Profile
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Body>
              <Button
                variant="primary"
                onClick={() => {
                  ProfileDelete();
                }}>
                Delete user
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div>
          <h4>Username: {user.Username}</h4>
          <h4>Email: {user.Email}</h4>
          <h4>Birthday: {formattedBirthday}</h4>
        </div>
       <br/>
        <h1>Favorite Movies</h1>
        {
          movies.filter(n=> JSON.parse(localStorage.getItem("user")).FavoriteMovies.includes(n.id)).map(m=><MovieCard movie={m} />)
        }
    </Container>
  )
};