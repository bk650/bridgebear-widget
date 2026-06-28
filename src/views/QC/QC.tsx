import "./QC.css";
import { Navigation } from "../../components/Navigation/Navigation";
import { ProfileImg } from "../../components/ProfileImg/ProfileImg";
import { Question } from "../../components/Question/Question";
import { Answer } from "../../components/Answer/Answer";
import { useViewStore } from "../../state/ViewStore";
import { useLawyerStore } from "../../state/LawyerStore";
import { useQuestionStore } from "../../state/QuestionStore";
import { useAnswerStore } from "../../state/AnswerStore";
import { useSession } from "../../state/SessionStore";

export function QC() {
 
const {
  scenarioSelector,
  currentStep,
  setCurrentView,
  setSelectedAnswerText,
  closeWidget,
} = useViewStore();

const { setSession } =
  useSession();

const { questions } =
  useQuestionStore();

const question =
  currentStep === 4
    ? questions.find(
        (question) =>
          question.Type ===
            "EC"
      )!
    : questions.find(
        (question) =>
          question.Type ===
            scenarioSelector &&
          question.SB_Order ===
            String(currentStep)
      )!;
  
  const { answers } =
      useAnswerStore();
  
  const answer =
    answers
      .filter(
        (answer) =>
          answer
            .QID_Value
              ?.includes(
              question.QID
              )
        )
      .sort(
        (a, b) =>
          a.Order - b.Order
      );

  const { lawyers } =
    useLawyerStore();
  
  const lawyer =
    lawyers.find(
      (lawyer) =>
        lawyer.Assigned_Question_QID?.includes(
          question?.QID ?? ""
        )
    );
  
  return (
    <div className="qc">
      <Navigation 
        activeStep={currentStep + 1}
        onClose={closeWidget}
      />

      <div className="qc__question-block">
        <ProfileImg
          imageUrl={
            lawyer
              ?.ProfileImg?.[0]
              ?.url
          }
        />

        <Question
          text={question.QuestionText}
        />
      </div>

      <div className="qc__answer-block">
        {answer.map((answer) => (
          <Answer
            key={`${answer.QID}-${answer.Order}`}
            text={answer.AnswerText}
            onClick={() => {
              
              setSession((prev) => {

                if (currentStep === 1) {
                  return {
                    ...prev,
                    SB1_Question: question.QuestionText,
                    SB1_Answer: answer.AnswerText,
                  };
                }

                if (currentStep === 2) {
                  return {
                    ...prev,
                    SB2_Question: question.QuestionText,
                    SB2_Answer: answer.AnswerText,
                  };
                }

                if (currentStep === 3) {
                  return {
                    ...prev,
                    SB3_Question: question.QuestionText,
                    SB3_Answer: answer.AnswerText,
                  };
                }

                if (currentStep === 4) {
                  return {
                    ...prev,
                    EC_Question: question.QuestionText,
                    EC_Answer: answer.AnswerText,
                  };
                }

                return prev;
              });

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