import "./FC.css";
import { Navigation } from "../../Components/Navigation/Navigation";
import { ProfileImg } from "../../Components/ProfileImg/ProfileImg";
import { Question } from "../../Components/Question/Question";
import { Answer } from "../../Components/Answer/Answer";
import { MockQuestions } from "../../Mock/MockQuestions";
import { MockAnswers } from "../../Mock/MockAnswers";
import { useViewStore } from "../../State/ViewStore";

export function FC() {
  
  const {
  setCurrentView,
  setCurrentStep,
  setScenarioSelector,
} = useViewStore();

  const question = MockQuestions.find(
    (question) => question.Type === "FC"
  );

  const answers = MockAnswers
    .filter(
      (answer) => answer.Type === "FC"
    )
    .sort(
      (a, b) => a.Order - b.Order
    );

  const answerRows = [];

  for (let i = 0; i < answers.length; i += 2) {
    answerRows.push(
      answers.slice(i, i + 2)
    );
  }

  return (
    <div className="fc">
      <Navigation />

      <div className="fc__question-block">
        <ProfileImg />

        <Question
          text={
            question?.QuestionText ?? ""
          }
        />
      </div>

      <div className="fc__answer-block">
        {answerRows.map(
          (row, index) => (
            <div
              key={index}
              className="fc__sub-block"
            >
              {row.map((answer) => (
                <Answer
                  key={answer.QID}
                  text={
                    answer.AnswerText
                  }
                  onClick={() => {
                    setScenarioSelector(
                      answer.ScenarioSelector
                    );
                    setCurrentStep(1);

                    setCurrentView("QC");
                  }}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}