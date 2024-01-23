import React, { useEffect, useState, useRef } from "react";
import Container from "../../lib/TailwindComponents";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  TestingComment,
  TestingPledges,
  TestingQuestions,
  TestingReaction,
} from "../../components/Testing";

function UserQuestions({ firebase, firestore }) {
  const containerRef = useRef(null);
  const questionsRef = firestore.collection("questions");
  const query = questionsRef.orderBy("createdAt");

  const [questions] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    console.log(questions);

    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [questions]);
  return (
    <div className="h-screen bg-black py-20">
      <Container className=" flex flex-col items-start h-full ">
        <div className=" flex items-end h-full">
          <div
            ref={containerRef}
            className=" overflow-y-scroll space-y-6 pr-5 pb-5 hide-scrollbar h-full scroll-smooth"
          >
            <div className="flex flex-col items-end space-y-6">
              {questions &&
                questions.map((question) => (
                  <TestingQuestions key={question.id} content={question} />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UserQuestions;
