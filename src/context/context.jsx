import { useReducer, useContext, createContext } from "react";
import questions from "../data/questions.js";
import reducer from "../reducer.js";
const QuizContext = createContext();

const initialState = {
  loading: false,
  questions: [],
};

const QuizProvider = ({ children }) => {
  const [{ questions, dispatch }] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ questions }}>
      {children}
    </QuizContext.Provider>
  );
};

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}
export { QuizProvider, useQuiz };
