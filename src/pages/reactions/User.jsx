import React, { useEffect, useState, useRef } from "react";
import Container from "../../lib/TailwindComponents";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { TestingComment, TestingReaction } from "../../components/Testing";

function User({ firebase, firestore }) {
  const containerRef = useRef(null);
  const commentsRef = firestore.collection("comments");
  const query = commentsRef.orderBy("createdAt");

  const [comments] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    comments && console.log(comments);
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [comments]);
  return (
    <div className="h-screen bg-black py-20">
      <Container className=" flex h-full ">
        <div className=" flex h-full">
          <div
            ref={containerRef}
            className=" p-5 overflow-y-scroll space-y-6 pr-5 pb-5 hide-scrollbar scroll-smooth h-full"
          >
            <div className="flex flex-col items-end space-y-6">
              {comments &&
                comments.map((comment) => (
                  <TestingComment key={comment.id} content={comment} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default User;
