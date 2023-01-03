import React from "react";
// import { Link, useMatch } from "react-router-dom";
import "../../pages/courses/tradingCourse/tradingCourseStyle.scss";
import "./style.scss";

const CourseCard = ({ id, hidden }) => {
  // const { url } = useMatch();
  return (
    <div
      className={
        hidden ? "course-card-wrapper  hidden" : "course-card-wrapper hover"
      }
    >
      {/* <Link to={hidden ? undefined : `${url}/${id}`} className="link">
        <div className="course-card coinman">
          <h1>{id}</h1>
        </div>
        <div className="course-card-back"></div>
      </Link> */}
    </div>
  );
};

export default CourseCard;
