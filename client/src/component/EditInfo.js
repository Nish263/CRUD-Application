import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const initialState = {
  name: "",
  email: "",
  age: "",
  work: "",
  address: "",
  phone: "",
  description: "",
};
export const EditInfo = () => {
  const [frmData, setFrmData] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <div className="text-center fs-5 mt-5 text-success">
          <h2>Update Information</h2>
        </div>

        <Col className="mb-3 py-3">
          <Form className="fw-bold fs-5">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={frmData.name}
                name="name"
                type="text"
                placeholder="Enter Name"
                required
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={frmData.email}
                type="email"
                placeholder="Enter email"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                name="age"
                value={frmData.age}
                type="number"
                placeholder="Enter Age"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Work</Form.Label>
              <Form.Control
                name="work"
                value={frmData.work}
                type="text"
                placeholder="Job"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                value={frmData.address}
                type="text"
                placeholder="Enter Address"
                required
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phone"
                value={frmData.phone}
                type="number"
                placeholder="Enter Phone Number"
                required
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={frmData.description}
                as="textarea"
                rows={3}
                placeholder="Detail here"
                type="text"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onSubmit={handleOnSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
