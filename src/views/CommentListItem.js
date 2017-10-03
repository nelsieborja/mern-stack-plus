import React, { Component } from "react";
import CommentForm from "./CommentForm";
import style from "../style";
import marked from "marked";

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toBeUpdated: false
    };

    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }
  rawMarkup() {
    let rawMarkup = marked(this.props.text.toString());
    return { __html: rawMarkup };
  }
  deleteComment(e) {
    e.preventDefault();
    this.props.onCommentDelete(this.props.uniqueID);
    console.log("oops deleted");
  }
  updateComment(e) {
    e.preventDefault();
    //brings up the update field when we click on the update link.
    this.setState({
      toBeUpdated: !this.state.toBeUpdated
    });
  }
  handleCommentUpdate(comment) {
    this.props.onCommentUpdate(this.props.uniqueID, comment);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated
    });
  }
  render() {
    return (
      <div style={style.comment}>
        {this.props.author && <h3>{this.props.author}</h3>}
        {this.props.text && <span dangerouslySetInnerHTML={this.rawMarkup()} />}
        <a style={style.updateLink} href="#" onClick={this.updateComment}>
          {this.state.toBeUpdated ? "close update" : "update"}
        </a>
        <a style={style.deleteLink} href="#" onClick={this.deleteComment}>
          delete
        </a>
        {this.state.toBeUpdated && (
          <CommentForm
            onCommentSubmit={this.handleCommentUpdate}
            author={this.props.author}
            text={this.props.text}
          />
        )}
      </div>
    );
  }
}
