import React from "react";
import Comment from "../css/Comment.css";

export default function CommentProps({
  headingComment,
  comment,
  color = "black",
}) {
  return (
    <>
      <div className={`fixComment ${color}`}>
        <span className="fixComment_header"> {headingComment} </span>
        {comment}
      </div>
    </>
  );
}
