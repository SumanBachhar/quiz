import { useQuiz } from "../context/context";
// import SingleQuestion from "./SingleQuestion";
// import questions from "../data/questions";

const Question = () => {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  console.log(question);
  // const { quiz } = useGlobalContext();
  // const quizArray = Array.from(quiz.entries());
  return (
    <>
      {/* <h4>{question.question}</h4> */}
      {/* {quizArray.map((entry) => {
        return <SingleQuestion key={entry.question} {...entry} />;
      })} */}
    </>
  );
};

export default Question;
