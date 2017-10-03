import React from "react";
import CommentListItem from "./CommentListItem";
import style from "../style";

export default props => (
  <div style={style.commentList}>
    {props.data.map(comment => (
      <CommentListItem
        author={comment.author}
        text={comment.text}
        uniqueID={comment._id}
        onCommentDelete={props.onCommentDelete}
        onCommentUpdate={props.onCommentUpdate}
        key={comment._id}
      />
    ))}
  </div>
);
