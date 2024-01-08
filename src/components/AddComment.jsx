import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        comment: '',
        rate: 1,
        elementId: null,
      },
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.setElementId();
    }
  }

  setElementId = () => {
    const { asin } = this.props;
    this.setState((prevState) => ({
      comment: {
        ...prevState.comment,
        elementId: asin,
      },
    }));
  };

  sendComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(this.state.comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliOTY3YWUwZGQxZDAwMTgyZDE3MDEiLCJpYXQiOjE3MDQ2OTU0MTgsImV4cCI6MTcwNTkwNTAxOH0.9Lx6rYFI98V5axazCldU7MpOQM1VhxI0ZuGwIwKF_3o',
          },
        }
      );
      if (response.ok) {
        alert('Comment was sent!');
        this.setState({
          comment: {
            comment: '',
            rate: 1,
            elementId: null,
          },
        });
      } else {
        console.log('error');
        alert('Something went wrong');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  handleCommentChange = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        comment: e.target.value,
      },
    });
  };

  handleRateChange = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        rate: parseInt(e.target.value, 10),
      },
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Comment text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment here"
              value={this.state.comment.comment}
              onChange={this.handleCommentChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={this.handleRateChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
