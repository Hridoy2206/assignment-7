import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, id, lerner, price, duration, img } = props.course;
  return (
    <div className="course">

      <div className="courseImg d-flex align-items-center">
        <img src={img} alt="" />
      </div>

      <div className="courseDetails ">
        <p>Course Name: {name}</p>
        <p>ID: {id}</p>
        <h6>Price: {price} Taka</h6>
        <p>
          Duration of course: {duration} <br />
          Learner: {lerner}
        </p>
        <button
         onClick={()=>props.handleAddCourse(props.course)}
         className="enrollBtn">
          enroll now
          </button>
      </div>

    </div>
  );
};

export default Course;
