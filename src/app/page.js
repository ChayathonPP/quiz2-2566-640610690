"use client";

import { Comment } from "../../components/Comment";
import { PostOwner } from "../../components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner
          image={"/profileImages/profile.jpg"}
          fullname={"Chayathon Punpang"}
          studentId={640610690}
          post={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          like={100}
        />
        {/* Comment Example */}
        {/* Reply Example */}
        {/* map-loop render Comment component here */}
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment
              key={comment.username}
              userImagePath={comment.userImagePath}
              username={comment.username}
              commentText={comment.commentText}
              likeNum={comment.likeNum}
              replies={comment.replies}
            />
          ))}
      </div>
    </div>
  );
}
