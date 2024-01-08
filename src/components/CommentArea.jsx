import React, { Component } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

class CommentArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      isLoading: false,
      isError: false,
    };
  }

  componentDidMount() {
    const { asin } = this.props;
    if (asin) {
      this.getComments();
    }
  }

  componentDidUpdate(prevProps) {
    const { asin } = this.props;
    if (asin !== prevProps.asin) {
      this.getComments();
    }
  }

  getComments = async () => {
    const { asin } = this.props;
    this.setState({ isLoading: true });

    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliOTY3YWUwZGQxZDAwMTgyZDE3MDEiLCJpYXQiOjE3MDQ2OTU0MTgsImV4cCI6MTcwNTkwNTAxOH0.9Lx6rYFI98V5axazCldU7MpOQM1VhxI0ZuGwIwKF_3o',
          },
        }
      );

      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments, isLoading: false, isError: false });
      } else {
        console.log('error');
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    const { comments, isLoading, isError } = this.state;
    const { asin } = this.props;

    return (
      <div className="text-center">
        <AddComment asin={asin} />
        <CommentList commentsToShow={comments} />
      </div>
    );
  }
}

export default CommentArea;
