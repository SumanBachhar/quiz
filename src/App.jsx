import Header from "./components/Header";
import Main from "./components/Main";
import Question from "./components/Question";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <div className="main">
          <Question />
        </div>
      </div>
    </>
  );
};

export default App;
