import React, { useState } from 'react';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Component from 'react';

/*const BookList = (props) => {
    const { books } = props;

    return (
        <Container>
            <Row>
                {books.horror.map(book => (
                    <SingleBook key={book.asin} book={book} />
                ))}
            </Row>
        </Container>
    );
};

export default BookList;*/


/*const BookList = (props) => {
    const { books } = props;
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filtra i libri in base alla stringa di ricerca
    const filteredBooks = books.horror.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Cerca un libro</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder='Scrivi il titolo...'
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>

                {filteredBooks.map(book => (
                    <SingleBook key={book.asin} book={book} />
                ))}

            </Row>
        </Container>
    );
};

export default BookList;*/

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      selectedBook: null,
    };
  }

  changeSelectedBook = (asin) => {
    this.setState({ selectedBook: asin })
  }

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { books } = this.props;
    const { searchQuery, selectedBook } = this.state;

    // Filtra i libri in base alla stringa di ricerca
    const filteredBooks = books.horror.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <Container>
  <Row>
    <Col md={8}>
      <Form.Group>
        <Form.Label>Cerca un libro</Form.Label>
        <Form.Control
          type="text"
          placeholder='Scrivi il titolo...'
          value={searchQuery}
          onChange={this.handleSearchChange}
        />
      </Form.Group>
    </Col>
  </Row>

  <Row>
    <Col md={8}>
      <Row>
        {filteredBooks.map((book, index) => (
          <Col xs={12} sm={6} md={4} key={book.asin}>
            <SingleBook key={book.asin} book={book} selectedBook={selectedBook} changeSelectedBook={this.changeSelectedBook} />
          </Col>
        ))}
      </Row>
    </Col>
    <Col md={4} className="position-sticky" style={{ top: 15, maxHeight: '100vh', overflowY: 'auto' }}>
      <CommentArea asin={selectedBook} />
    </Col>
  </Row>
</Container>


          );
  }
}

          export default BookList;

