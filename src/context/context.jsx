import { useReducer, useContext, createContext } from "react";
import questions from "../data/questions.js";
import reducer from "../reducer.js";
const QuizContext = createContext();

const initialState = {
  loading: false,
  quiz: new Map(questions.map((item) => [item.question, item])),
};

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ ...state }}>{children}</QuizContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(QuizContext);
};
