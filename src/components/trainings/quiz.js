import Question from "./question";
import { useState } from "react";
import generateString from "../general/uniqueID";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  /*add question */
  const AddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      <Question
        key={prevQuestions.length}
        id={generateString(5)}
        onDelete={() => deleteQuestion(prevQuestions.length)}
      />,
    ]);
  };

  /*delete a question*/
  const deleteQuestion = (indexToRemove) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((value, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="w-full my-4 flex flex-col p-3 bg-white rounded-lg shadow-md shadow-gray-200">
      <div className="text-darker font-semibold">Training quiz</div>
      <div className="text-sm mt-1 text-medium_gray">
        Here you can manage the questions by clicking on the “Add Question”
        button and choose from the available types of question. You can add up
        to 100 questions.
      </div>
      <div className="divider my-1"></div>
      <div className="w-full h-fit flex flex-col gap-3">{questions}</div>
      <button
        className="w-full text-dark_blue font-semibold py-1 mt-3 bg-add_question rounded-lg hover:scale-[101%] transition-all duration-300 ease-in-out"
        onClick={AddQuestion}
      >
        Add Question +
      </button>
    </div>
  );
}
