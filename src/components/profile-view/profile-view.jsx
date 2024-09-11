import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { userInfo } from './user-info';
import { UserUpdate } from './user-update';

export const ProfileView = ({ user, token, updatedUser, onLoggedOut }) => {

  const ProfileDelete = () => {
    fetch(`https://myflix-myapp-e7d3dd6fff4f.herokuapp.com/users/${user.Username}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },

      }
    ).then((response) => {
      console.log(response);
      if (response.ok) {
        console.log("Account deleted successfully!");
        onLoggedOut();
      } else {
        alert("Something wrong. Account was NOT deleted!");
      }
    })
  }

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
              <UserUpdate
                user={user}
                token={token}
                updatedUser={updatedUser}
              />
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
    </Container>
  )
};