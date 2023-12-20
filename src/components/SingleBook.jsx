import React, { useState } from 'react';
import { Card, Col, } from 'react-bootstrap';
import Component from 'react';

const SingleBook = (props) => {
    const [selected, setSelected] = useState(false);

    return (

        <Col xs={6} md={4} lg={3}>
            <Card className='custom-card'
                onClick={() => setSelected(!selected)}
                style={{ border: selected ? '2px solid black' : 'none' }}>

                <Card.Img variant="top" src={props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{props.book.title}</Card.Title>
                    <Card.Text>{props.book.price} Euro</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default SingleBook;