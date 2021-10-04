import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Course from '../Course/Course';
import './services.css'

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));

    }
        , []);
    return (
        <div className="services">
            <div className="service">
                <h1>Our services </h1>
                <h5 >We help our customers with onsite training, data migration, implementation, training, and consulting on best practices.
                    !</h5>
            </div>
            <Carousel >
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block" style={{ width: "100%", height: "600px" }}
                        src="https://images.ctfassets.net/v8zaoys2pgzt/6NIaHWCfFJdov1PNHIxmIe/88060978b0b4dfb49218a135d7015a0d/GettyImages-1159180482.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Martial Arts</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block" style={{ width: "100%", height: "600px" }}
                        src="https://www.todaysparent.com/wp-content/uploads/2018/03/karate_kid_1280x960-768x432-1521820702.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Martial Arts</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block " style={{ width: "100%", height: "600px" }}
                        src="https://www.wellnessliving.com/blog/wp-content/uploads/2019/04/Martial-Arts-Misconceptions.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Martial Arts</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="body" style={{ margin: "20px" }}>

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

export default Services;