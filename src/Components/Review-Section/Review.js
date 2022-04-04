import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Review.css'


const Review = () => {
    const [cars , setCars] = useState([])
    useEffect(()=> {
    
        fetch("cars.json")
        .then(res => res.json())
        .then(data => setCars(data))
        
    },[])
    return (
        <div>
             <div className="review-info">
                        {
                           cars.map(car => <ReviewDetails key={car.id} car={car} > </ReviewDetails>) 
                        }
                        
                    </div>
            
        </div>
    );
};

export default Review;