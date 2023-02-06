// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, isToggleLike, deleteComment} = props
  const {
    firstName,
    initialBackgroundContainer,
    name,
    comment,
    date,
    isLiked,
    id,
  } = commentDetails
  const isLike = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    isToggleLike(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-box">
      <div className="comment-container-box">
        <p className={`initial ${initialBackgroundContainer}`}>{firstName}</p>
        <div className="comments-app">
          <div className="date-container">
            <h1 className="name">{name}</h1>
            <p className="date-text">{date}</p>
          </div>
          <p className="comments-area">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <button type="button" className="button" onClick={onClickLike}>
            <img src={isLike} className="image" alt="like" />
          </button>

          {isLiked ? (
            <p className="like">Like</p>
          ) : (
            <p className="unlike">Like</p>
          )}
        </div>
        <button
          className="button"
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="seperator" />
    </li>
  )
}

export default CommentItem
