import React, { useEffect, useState, useRef } from "react";
import Container from "../../lib/TailwindComponents";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { TestingComment, TestingReaction } from "../../components/Testing";

function UserReactions({ firebase, firestore }) {
  const containerRef = useRef(null);
  const reactionRef = firestore.collection("newReactions");
  const query = reactionRef.orderBy("createdAt");

  const [newReactions] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [newReactions]);
  return (
    <div className="h-screen bg-black py-20">
      <Container className=" flex flex-col items-start h-full ">
        <div className=" flex h-full">
          <div
            ref={containerRef}
            className=" overflow-y-scroll pr-5 pb-5 hide-scrollbar scroll-smooth h-full"
          >
            <div className=" flex flex-col items-end space-y-6">
              {newReactions &&
                newReactions.map((reaction) => (
                  <TestingReaction key={reaction.id} content={reaction} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UserReactions;
