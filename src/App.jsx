/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Quiz from "./components/Quiz/Quiz";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";


function App() {

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=25&category=9");
        const data = await response.json();
        const formattedQuestions = data.results.map((question) => ({
          question: question.question,
          choices: [...question.incorrect_answers, question.correct_answer],
          correctAnswer: question.correct_answer,
        }));
        console.log(formattedQuestions);
        setQuestions(formattedQuestions);
       
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(questions);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);


  return(
    <Router>
    <Routes>
      <Route path="/" element={currentUser ? <Quiz questions={questions} /> : <Navigate to={"/login"} />} />
      <Route path="/auth" element={<AuthDetails />} />
      <Route path="/login" element={currentUser ? <Navigate to={"/"} /> : <SignIn />} />
      <Route path="/signup" element={currentUser ? <Navigate to={"/"} /> : <SignUp />} />
    </Routes>
  </Router>
  )
}

export default App
