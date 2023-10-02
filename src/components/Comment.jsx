import React from "react";
import Comment from "../css/Comment.css";

export default function CommentProps({
  headingComment,
  comment,
  color = "black",
  fixCommentHeaderFont,
}) {
  return (
    <>
      <div className={`fixComment ${color}`}>
        {/* <span className="fixComment_header"> {headingComment} </span> */}
        <span className={`fixComment_header ${fixCommentHeaderFont}`}>
          {headingComment}
        </span>
        {comment}
      </div>
    </>
  );
}
