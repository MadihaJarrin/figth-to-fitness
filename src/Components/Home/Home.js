import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));

    }
        , []);
    return (
        <div>
            {/* <h1>Caragory:{courses.length}</h1> */}
            <div className="body">
                <div>
                    <h1>Our Work</h1>
                    <h5>Over 1600 martial arts studios and gyms have chosen Sitefit for website design and digital marketing!</h5>
                </div>
                <div className="course-list">
                    {

                        courses.map(course => <Course course={course}

                        ></Course>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Home;