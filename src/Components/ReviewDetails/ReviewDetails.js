import React from 'react';
import Card from 'react-bootstrap/Card'

const ReviewDetails = ({car}) => {
    const {profile , name ,address,phone,email,comments} = car;
    return (
        <div>
             <Card className='card' style={{ width: '18rem' }}>
                <Card.Img className='' variant="top" src={profile} />
                <Card.Body>

                    <Card.Title>{name}</Card.Title>
                    <p> <small>{address}  </small></p> 
                    <p> <small>{phone} </small> </p>
                    <p> <small>{email} </small> </p>
                    <Card.Text>
                        <h5 className='text-center ' > Say About Us </h5>
                    <p> <small>{comments} </small> </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default ReviewDetails;