import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col>
        <Container>
          <div className="text-end mt-5 mb-4 py-2">
            <Button className="bg-primary">
              <i class="fa-solid fa-plus"></i> Add Info
            </Button>
          </div>

          <div>
            <Table className="table-stripped">
              <thead>
                <tr className="table-info">
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Job</th>
                  <th>Phone Number</th>
                  <th className="text-center"> Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sam</td>
                  <td>sam1@gmail.com</td>
                  <td>Frontend-developer</td>
                  <td>04555345611</td>
                  <td className="d-flex justify-content-between ">
                    <Button variant="success">
                      <i class="fa-solid fa-eye"></i>
                    </Button>
                    <Button variant="warning">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="danger">
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sam</td>
                  <td>sam1@gmail.com</td>
                  <td>Frontend-developer</td>
                  <td>04555345611</td>
                  <td className="d-flex justify-content-between ">
                    <Button variant="success">
                      <i class="fa-solid fa-eye"></i>
                    </Button>
                    <Button variant="warning">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="danger">
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sam</td>
                  <td>sam1@gmail.com</td>
                  <td>Frontend-developer</td>
                  <td>04555345611</td>
                  <td className="d-flex justify-content-between ">
                    <Button variant="success">
                      <i class="fa-solid fa-eye"></i>
                    </Button>
                    <Button variant="warning">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="danger">
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sam</td>
                  <td>sam1@gmail.com</td>
                  <td>Frontend-developer</td>
                  <td>04555345611</td>
                  <td className="d-flex justify-content-between ">
                    <Button variant="success">
                      <i class="fa-solid fa-eye"></i>
                    </Button>
                    <Button variant="warning">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="danger">
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Sam</td>
                  <td>sam1@gmail.com</td>
                  <td>Frontend-developer</td>
                  <td>04555345611</td>
                  <td className="d-flex justify-content-between ">
                    <Button variant="success">
                      <i class="fa-solid fa-eye"></i>
                    </Button>
                    <Button variant="warning">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Button variant="danger">
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default Home;
