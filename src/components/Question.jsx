import { useGlobalContext } from "../context/context";
import SingleQuestion from "./SingleQuestion";
// import questions from "../data/questions";

const Question = () => {
  const { question } = useGlobalContext();
  // const question = questions.at(index);
  console.log(question);
  // const { quiz } = useGlobalContext();
  // const quizArray = Array.from(quiz.entries());
  return (
    <>
      {/* {quizArray.map((entry) => {
        return <SingleQuestion key={entry.question} {...entry} />;
      })} */}
    </>
  );
};

export default Question;
