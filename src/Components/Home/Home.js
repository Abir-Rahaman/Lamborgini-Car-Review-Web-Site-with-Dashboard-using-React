import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from '../../Asset/lamborghini.png'
import './Home.css'
import HomeReview from '../Home-Review/HomeReview';
import { Link } from 'react-router-dom';

const Home = () => {
    const [cars , setCars] = useState([])
    useEffect(()=> {
    
        fetch("cars.json")
        .then(res => res.json())
        .then(data => setCars(data))
        
    },[])
    return (
            <Container className='mt-5 pt-5'>
                <Row>
                    <Col sm={6}>
                        <div className="homepage-info">
                        <h1> Your Next Car is... </h1>
                        <h1 className='color' > Super Car Lambo  </h1>
                        </div>
                        <p className='details-info' > Depending on the model, a Lamborghini may cost anywhere from $200,000 to $500,000. We take pleasure in dealing with discriminating clientele from all around the world who understand the value of the Lamborghini brand. Let us assist you in getting into the automobile of your dreams by contacting us now! </p>
                        
                    </Col>
                    <Col sm={6}>
                        <img className='w-100' src={image} alt="A Car"/>
                    </Col>
                </Row>
                <div className="review-section">
                    <h1 className='mt-5 text-center'> Expensive Review Of Our <span className='orange'>Rich Customer ( {cars.length} ) </span> </h1>
                    <div className="review-info ">
                        {
                           cars.map(car => <HomeReview key={car.id} car={car} > </HomeReview>) 
                        }
                        
                    </div>

                  <Link to='/review' className=' btn px-5 ms-5 ps-5 py-10 btn' variant="success">See All Reviews</Link>{' '}


                </div>
            </Container>
    );
};

export default Home;