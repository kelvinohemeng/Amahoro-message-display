import React, { useEffect, useState, useRef } from "react";
import Container from "../../lib/TailwindComponents";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  TestingComment,
  TestingPledges,
  TestingReaction,
} from "../../components/Testing";

function UserPledges({ firebase, firestore }) {
  const containerRef = useRef(null);
  const pledgesRef = firestore.collection("pledges");
  const query = pledgesRef.orderBy("createdAt");

  const [pledges] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [pledges]);
  return (
    <div className="h-screen bg-black py-20">
      <Container className=" flex flex-col items-start h-full ">
        <div className=" flex items-end h-full">
          <div
            ref={containerRef}
            className=" overflow-y-scroll space-y-6 pr-5 pb-5 hide-scrollbar h-full scroll-smooth"
          >
            <div className="flex flex-col items-end space-y-6">
              {pledges &&
                pledges.map((pledge) => (
                  <TestingPledges key={pledge.id} content={pledge} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UserPledges;
