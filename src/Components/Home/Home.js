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
        <div className="home-part">
            {/* <h1>Caragory:{courses.length}</h1> */}

            <div className="header-work">
                <h1 >Our Work</h1>
                <h5 >Over 1600 martial arts studios and gyms have chosen Sitefit for website design and digital marketing!</h5>
            </div>
            <div className="body">
                <div className="course-list">
                    {

                        courses.slice(0, 4).map(course => <Course course={course}
                            key={course.key}
                        ></Course>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Home;