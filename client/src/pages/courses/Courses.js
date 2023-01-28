import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  CourseCard  from "../../components/courseCard/CourseCard";
import "./style.scss";

const Courses = () => {
  return (
    <div className="courses-wrapper">
      <div className="courses">
        <Container>
          <Row md={2} className="grid-row">
            <Col className="grid-col">
              <CourseCard id={"tradingCourse"} />
            </Col>
            <Col>

            </Col>
          </Row>
        </Container>
      </div>
      <div className="courses-back"></div>
    </div>
  );
};

export default Courses;
