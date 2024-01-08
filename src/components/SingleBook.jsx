import React, { Component } from 'react';
import { Card, Col, } from 'react-bootstrap';

/*const SingleBook = (props) => {
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

export default SingleBook;*/

class SingleBook extends Component {
    render() {
        const { changeSelectedBook, selectedBook, book } = this.props;

        return (
            <>
                
                    <Card
                        onClick={() => changeSelectedBook(book.asin)}
                        style={{
                            border: selectedBook === book.asin ? '3px solid black' : 'none',
                        }}
                    >
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
                        </Card.Body>
                    </Card>
                
            </>
        );
    }
}

export default SingleBook;
