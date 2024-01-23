import { useEffect, useState, lazy } from "react";
import "./App.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import User from "./pages/reactions/User";
import UserReactions from "./pages/reactions/UserOther";
import UserPledges from "./pages/reactions/UserPledges";
import UserQuestions from "./pages/reactions/UserQuestions";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

function App() {
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    //url base navigation using prameters
    const url = new URL(window.location.href);
    const paramName = url.searchParams.get("path");

    if (paramName) {
      setPathName(paramName);
    }
  }, []);

  return (
    <>
      {pathName === "comments" ? (
        <div>
          <User firebase={firebase} firestore={firestore} />
        </div>
      ) : pathName === "reactions" ? (
        <div>
          <UserReactions firebase={firebase} firestore={firestore} />
        </div>
      ) : pathName === "pledges" ? (
        <div>
          <UserPledges firebase={firebase} firestore={firestore} />
        </div>
      ) : pathName === "questions" ? (
        <div>
          <UserQuestions firebase={firebase} firestore={firestore} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
