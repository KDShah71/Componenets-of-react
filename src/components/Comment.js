import React from "react";
import Avatar from "./Avatar";

const formateDate = date => {
  return date.toLocaleDateString();
};

const Comment = props => {
  return (
    <div className="Comment">
      <Avatar user={props.user} />
      <div className="comment-text">{props.text}</div>
      <div className="comment-Date">{formateDate(props.date)}</div>
    </div>
  );
};

export default Comment;
