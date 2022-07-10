import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import profile from "../assests/profile.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";

export const PersonalDetail = () => {
  return (
    <Container className="mt-5 ">
      <h1 className="fw-normal">Welcome Nisha</h1>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Row>
            <Col className="detail-left ">
              {" "}
              <img src={profile} width="150px" alt="profile" className="mb-3" />
              <p>
                Name: {""}
                <span>Sam Smith</span>
              </p>
              <p>
                Age: <span>25 yrs</span>
              </p>
              <p>
                <WorkIcon /> Work:<span>Front-End Developer</span>
              </p>
              <p>
                <MailOutlineIcon /> Email: <span>sam01@gmail.com</span>
              </p>
            </Col>
            <Col className="detail-right mt-5">
              <p>
                <PhoneIcon /> Phone:<span>04519939000</span>
              </p>
              <p>
                <LocationOnIcon /> Location: <span> 25 Alan St Austral</span>
              </p>
              <p>
                <DescriptionIcon /> {""} Description:
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda sapiente nisi iure totam placeat sunt necessitatibus
                </span>
              </p>
            </Col>
          </Row>
        </CardContent>
      </Card>
    </Container>
  );
};
