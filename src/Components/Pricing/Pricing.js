import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Pricing.css'

const Pricing = () => {
    return (
        <div className="pricing-container">

            <p style={{ marginTop: "20px", padding: "20px" }}>One of the most common questions people ask when calling a martial arts school is:</p>
            <h1 style={{ color: "red", backgroundColor: "lightyellow", padding: "20px", borderRadius: "100px" }}>“HOW MUCH DO MARTIAL ARTS CLASSES COST?”</h1>
            <h6 style={{ width: "80%", marginLeft: "60px", padding: "20px" }}>Any time one is considering a new venture, the cost is certainly an important consideration.  But, it is important to recognize that martial arts training is more than a commodity to be selected based on price alone. </h6>


            <div className="pricing-card">
                <div>
                    <Card border="danger" style={{ width: '80%', margin: "30px" }}>
                        <Card.Body>
                            <Card.Img id="image" variant="top" src="https://www.nymaa.com/cm/dpl/images/create/black_karate_belt.jpg" />
                            <Card.Title >Black Belt Scroll</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">$99/mo</Card.Subtitle>
                            <Card.Text>
                                A black belt holds great significance. The student who has earned a black belt has combined both physical strength and mental determination to overcome difficulties. A practitioner who holds a black belt has demonstrated years of discipline, hard work and perseverance.
                            </Card.Text>
                            <Card.Link href="#">website</Card.Link>
                            <Card.Link href="#">Facebook</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card border="danger" style={{ width: '80%', margin: "30px" }}>
                        <Card.Body>
                            <Card.Img variant="top" src="https://www.nymaa.com/cm/dpl/images/create/blue_karate_belt.jpg" />
                            <Card.Title>Blue Belt Scroll</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">$99/mo</Card.Subtitle>
                            <Card.Text>
                                Blue belt is the second adult rank in Brazilian jiu-jitsu at schools that do not use yellow, orange, and green belts for adults.[1] At the blue belt level, students gain a wide breadth of technical knowledge and undertake hundreds of hours of mat time to learn how to implement these moves efficiently.
                            </Card.Text>
                            <Card.Link href="#">website</Card.Link>
                            <Card.Link href="#">facebook</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div style={{ width: '80%', margin: "30px" }}>
                <div  >
                    <h2>1.The Professional School</h2>
                    <p>prices for martial arts classes at these schools in the range of $150 to $500 per month.</p>
                </div>
                <div>
                    <h2>2.The Part-Time School</h2>
                    <p>prices for martial arts classes at these schools in the ranging from $75 per month to $150/month.</p>
                </div>
                <div>
                    <h2>3.The Community Program</h2>
                    <p>anywhere from free on the low end to around $100 per month on the high end.</p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;