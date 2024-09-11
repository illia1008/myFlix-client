import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";


export const UserUpdate = ({ user, updatedUser }) => {
  const token = localStorage.getItem("token");

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
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
          Authorization: `Bearer ${token}`
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
      .then((data) => {
        updatedUser(data);
        setUsername(data.Username);
        setPassword(data.Password);
        setEmail(data.Email);
        setBirthday(data.Birthday);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  )
};

UserUpdate.propTypes = {
  user: PropTypes.object.isRequired,
  updatedUser: PropTypes.func.isRequired
};