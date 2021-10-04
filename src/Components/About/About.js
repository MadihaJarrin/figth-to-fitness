import React from 'react';
import { Link } from 'react-router-dom';
import institute from '../../images/institute.jpg';
import institute2 from '../../images/institute2.jpg';
import institute3 from '../../images/institute3.jpg';
import Institute from '../Institute/Institute';
import './About.css'

const About = () => {
    return (
        <div className="container" style={{ backgroundColor: "lightsalmon" }} >
            <div className="box">
                <div className="imgBx">
                    <img src={institute} alt="" />
                </div>
                <div className="content">
                    <h2>Fight to Fitness</h2>
                    <small>This is a Japanese martial art whose physical aspects seek the development of defensive body movements.Though its mental and moral aspects target the overall improvement.</small>
                    <p><Link to="/service">
                        Click me
                    </Link></p>
                </div>
            </div>
            <div className="box">
                <div className="imgBx">
                    <img src={institute2} alt="" />
                </div>
                <div className="content">
                    <h2>Fight to Fitness</h2>
                    <small>This is a Japanese martial art whose physical aspects seek the development of defensive body movements.Though its mental and moral aspects target the overall improvement.</small>
                    <p><Link to="/service">
                        Click me
                    </Link></p>
                </div>
            </div>
            <div className="box">
                <div className="imgBx">
                    <img src={institute3} alt="" />
                </div>
                <div className="content">
                    <h2>Fight to Fitness</h2>
                    <small>This is a Japanese martial art whose physical aspects seek the development of defensive body movements.Though its mental and moral aspects target the overall improvement.</small>
                    <p><Link to="/service">
                        Click me
                    </Link></p>
                </div>
            </div>
            <div>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <p>
                    <a href="#">website</a>
                    <a href="#">facebook</a>
                </p>
            </div>
        </div>
    );
};

export default About;