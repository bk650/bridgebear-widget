import "./QC.css";
import { Navigation } from "../../Components/Navigation/Navigation";
import { ProfileImg } from "../../Components/ProfileImg/ProfileImg";
import { Question } from "../../Components/Question/Question";
import { Answer } from "../../Components/Answer/Answer";
import { MockQuestions } from "../../Mock/MockQuestions";
import { MockAnswers } from "../../Mock/MockAnswers";
import { useViewStore } from "../../State/ViewStore";

export function QC() {
 
const {
  scenarioSelector,
  currentStep,
  setCurrentView,
  setSelectedAnswerText,
  closeWidget,
} = useViewStore();

const question =
  currentStep === 4
    ? MockQuestions.find(
      (question) => 
          question.Type === "EC"
      )!
      : MockQuestions.find(
        (questions) => 
          questions.Type ===
            scenarioSelector &&
          questions.SB_Order ===
            currentStep
        )!;
  
  const answers = MockAnswers
  .filter(
    (answer) =>
      answer.QID ===
      question.QID
  )
  .sort(
    (a, b) =>
      a.Order - b.Order
  );

  return (
    <div className="qc">
      <Navigation 
        activeStep={currentStep + 1}
        onClose={closeWidget}
      />

      <div className="qc__question-block">
        <ProfileImg />

        <Question
          text={question.QuestionText}
        />
      </div>

      <div className="qc__answer-block">
        {answers.map((answer) => (
          <Answer
            key={`${answer.QID}-${answer.Order}`}
            text={answer.AnswerText}
            onClick={() => {
              setSelectedAnswerText(
                answer.AnswerText
              );

              if (currentStep === 4) {
                setCurrentView("CF");
              } else {
                setCurrentView("AC");
              }        
            }}
          />
        ))}
      </div>
    </div>
  );
}