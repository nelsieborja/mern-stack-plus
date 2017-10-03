import React, { Component } from "react";
import axios from "axios";
import Helmet from "react-helmet";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import Page from "../components/Page";

const url = "api/comments";
const pollInterval = 2000;
let interval;

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
    this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    interval = setInterval(this.loadCommentsFromServer, pollInterval);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  loadCommentsFromServer() {
    axios.get(url).then(res => {
      this.setState({ data: res.data });
    });
  }
  handleCommentSubmit(comment) {
    // Optimise a bit by immediately saving new entry to state
    let comments = this.state.data;

    // Create dummy unique ID for the new comment
    comment.id = Date.now();
    // Merge new comment with comments
    let newComments = comments.concat([comment]);

    // Set merged comments to state
    this.setState({ datat: newComments });

    axios
      .post(url, comment)
      // No need to wait req before we can update state
      // .then(res => {
      // 	this.setState({ data: res });
      // })
      .catch(err => {
        console.error(err);
        // Revert state to its previous state when we got error
        this.setState({ datat: comments });
      });
  }
  handleCommentDelete(id) {
    axios
      .delete(`${url}/${id}`)
      .then(res => {
        console.log("Comment deleted");
      })
      .catch(err => {
        console.error(err);
      });
  }
  handleCommentUpdate(id, comment) {
    //sends the comment id and new author/text to our api
    axios.put(`${url}/${id}`, comment).catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <Page>
        <Helmet title="Comment" />
        <h1>
          This is the <strong>Comment</strong> view.
        </h1>
        {this.state.data.length > 0 && (
          <CommentList
            data={this.state.data}
            onCommentDelete={this.handleCommentDelete}
            onCommentUpdate={this.handleCommentUpdate}
          />
        )}
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </Page>
    );
  }
}

export default CommentBox;
