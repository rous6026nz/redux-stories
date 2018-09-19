import React from 'react'

const Post = (props) => (
  <div>
    <h3>{props.title}</h3>
    <span>Created: {props.date}</span>
    <p>{props.content}</p>
  </div>
)

export default Post
