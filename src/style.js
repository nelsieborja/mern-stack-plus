const style = {
  commentBox: {
    width: "80vw",
    margin: "0 auto",
    fontFamily: "Helvetica, sans-serif"
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase"
  },
  commentList: {
    border: "1px solid #e4e4e4",
    padding: "10px",
    maxHeight: "70vh",
    overflow: "scroll"
  },
  comment: {
    backgroundColor: "#fafafa",
    padding: "10px",
    fontSize: ".85rem"
  },
  commentForm: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between"
  },
  commentFormAuthor: {
    minWidth: "150px",
    margin: "3px",
    padding: "0 10px",
    borderRadius: "3px",
    height: "40px",
    flex: "2",
    border: "1px solid #e4e4e4",
    boxShadow: "inset 0 1px 1px #eee"
  },
  commentFormText: {
    flex: "4",
    minWidth: "400px",
    margin: "3px",
    padding: "0 10px",
    height: "40px",
    borderRadius: "3px",
    border: "1px solid #e4e4e4",
    boxShadow: "inset 0 1px 1px #eee"
  },
  commentFormPost: {
    minWidth: "75px",
    flex: "1",
    height: "40px",
    margin: "3px",
    fontSize: "1rem",
    backgroundColor: "#0000ff",
    borderRadius: "3px",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: ".055rem",
    border: "none"
  },
  updateLink: {
    textDecoration: "none",
    paddingRight: "15px",
    fontSize: ".7rem"
  },
  deleteLink: {
    textDecoration: "none",
    paddingRight: "15px",
    fontSize: ".7rem",
    color: "red"
  }
};

module.exports = style;
