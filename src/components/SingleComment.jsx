import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZjE3MjBkOGEyMDAwMThhNDhiMzkiLCJpYXQiOjE3MDIyMDU0MjIsImV4cCI6MTcwMzQxNTAyMn0.wI1n2pl7S6ZJIoyOkS5jA5KxlKf2CuvRw700UVblnLo",
          },
        }
      )
      if (response.ok) {
        alert('Commento eliminato con successo')
      } else {
        alert('Errore - commento non eliminato')
      }
    } catch (error) {
      alert('Errore - commento non eliminato')
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="m-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
