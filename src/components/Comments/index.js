import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentCount: 0, commentsList: []}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const firstName = name.slice(0, 1)
    const initialBackgroundColorName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: v4(),
      firstName,
      name,
      comment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialBackgroundContainer: initialBackgroundColorName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      commentCount: prevState.commentCount + 1,
    }))
  }

  isToggleLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachObject => {
        if (eachObject.id === id) {
          return {
            ...eachObject,
            isLiked: !eachObject.isLiked,
          }
        }
        return eachObject
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentList = commentsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState(prevState => ({
      commentsList: filteredCommentList,
      commentCount: prevState.commentCount - 1,
    }))
  }

  onChangeTextInput = event => {
    this.setState({name: event.target.value})
  }

  onAddCommentInput = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentCount, commentsList} = this.state
    return (
      <div className="bg-container">
        <div className="comment-bg-container">
          <div className="comment-container">
            <h1 className="heading">Comments</h1>
            <p className="text">Say something about 4.0 Technologies</p>
            <form
              className="comment-form-container"
              onSubmit={this.onAddComment}
            >
              {/* <label htmlFor="text-box" id="text-label">
              Say something about 4.0 Technologies
            </label> */}
              <input
                type="text"
                placeholder="Your Name"
                className="name-text"
                onChange={this.onChangeTextInput}
                value={name}
              />
              <textarea
                rows="8"
                cols="55"
                className="text-comment"
                onChange={this.onAddCommentInput}
                value={comment}
                placeholder="Your Comment"
              >
                {comment}
              </textarea>
              <button className="add-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comment-image"
            alt="comments"
          />
        </div>
        <hr className="separator" />
        <p className="comment-count">
          <span className="count">{commentCount}</span>Comments
        </p>
        <ul className="comments-holder">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              isToggleLike={this.isToggleLiked}
              deleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
