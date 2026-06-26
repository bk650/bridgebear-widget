import "./FC.css";
import { Navigation } from "../../components/Navigation/Navigation";
import { ProfileImg } from "../../components/ProfileImg/ProfileImg";
import { Question } from "../../components/Question/Question";
import { Answer } from "../../components/Answer/Answer";
import { MockQuestions } from "../../mock/MockQuestions";
import { MockAnswers } from "../../mock/MockAnswers";
import { useViewStore } from "../../state/ViewStore";
import { useLawyerStore } from "../../state/LawyerStore";

export function FC() {
  
  const {
    currentStep,
    setCurrentView,
    setCurrentStep,
    setScenarioSelector,
    closeWidget,
  } = useViewStore();

  const { lawyers } =
    useLawyerStore();

  const question =
    MockQuestions.find(
      (question) =>
        question.Type === "FC"
    );

  const lawyer =
    lawyers.find(
      (lawyer) =>
        lawyer.Assigned_Question_QID?.includes(
          question?.QID ?? ""
        )
    );

  const answers =
    MockAnswers
      .filter(
        (answer) =>
          answer.Type === "FC"
      )
      .sort(
        (a, b) =>
          a.Order - b.Order
      );

  const answerRows = [];

  for (
    let i = 0;
    i < answers.length;
    i += 2
  ) {
    answerRows.push(
      answers.slice(
        i,
        i + 2
      )
    );
  }

  return (
    <div className="fc">
      <Navigation
        activeStep={
          currentStep + 1
        }
        onClose={
          closeWidget
        }
      />

      <div className="fc__question-block">
        <ProfileImg
          imageUrl={
            lawyer
              ?.ProfileImg?.[0]
              ?.url
          }
        />

        <Question
          text={
            question
              ?.QuestionText
              ?? ""
          }
        />
      </div>

      <div className="fc__answer-block">
        {answerRows.map(
          (
            row,
            index
          ) => (
            <div
              key={index}
              className="fc__sub-block"
            >
              {row.map(
                (
                  answer
                ) => (
                  <Answer
                    key={`${answer.QID}-${answer.Order}`}
                    text={
                      answer.AnswerText
                    }
                    onClick={() => {
                      setScenarioSelector(
                        answer.ScenarioSelector
                      );

                      setCurrentStep(
                        1
                      );

                      setCurrentView(
                        "QC"
                      );
                    }}
                  />
                )
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}