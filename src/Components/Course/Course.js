import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, img, details, key, cost, duration, adress } = props.course;
    console.log(props.course);
    return (
        <div className="details-container">
            <div className="card">

                <img src={img} alt="" />

                <div className="card-body">
                    <h4>Martial art :{name}</h4>
                    <h5>Course Duration: {duration}</h5>
                    <h5>Course Fee : ${cost}</h5>
                    <p>Adress : {adress}</p>
                    <p>Details: {details}</p>

                </div>
            </div>
        </div>
    );
};

export default Course;