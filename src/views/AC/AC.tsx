import "./AC.css";
import { Navigation } from "../../Components/Navigation/Navigation";
import { Question } from "../../Components/Question/Question";
import { Answer } from "../../Components/Answer/Answer";
import { ProfileImg } from "../../Components/ProfileImg/ProfileImg";
import { ProfileDescription } from "../../Components/ProfileDescription/ProfileDescription";
import { Comment } from "../../Components/Comment/Comment";
import { Button } from "../../Components/Button/Button";
import { MockQuestions } from "../../Mock/MockQuestions";
import { MockLawyers } from "../../Mock/MockLawyers";
import { MockWidgetSettings } from "../../Mock/MockWidgetSettings";
import { useViewStore } from "../../State/ViewStore";

export function AC() {
  const {
    scenarioSelector,
    currentStep,
    selectedAnswerText,
    setCurrentStep,
    setCurrentView,
  } = useViewStore();

  const question = MockQuestions.find(
    (question) =>
      question.Type ===
        scenarioSelector &&
      question.SB_Order ===
        currentStep
  )!;

  const lawyer =
    MockLawyers[0];

  const widgetSetting =
    MockWidgetSettings[0];

  return (
    <div className="ac">
      <Navigation />

      <div className="ac__question-block">
        <Question
          text={
            question.QuestionText
          }
        />

        <Answer
          text={
            selectedAnswerText
          }
          disabled
        />
      </div>

      <div className="ac__comment-block">
        <div className="ac__sub-block">
          <ProfileImg />

          <ProfileDescription
            nameRank={`${lawyer.Name} ${lawyer.Rank}`}
            description={
              lawyer.Description
            }
          />
        </div>

        <Comment
           text={
            question.CommentText ?? ""
            }
          />
      </div>

      <Button
        text={
          widgetSetting.ButtonText_AC
        }
        onClick={() => {
          if (
            currentStep < 3
          ) {
            setCurrentStep(
              currentStep + 1
            );

            setCurrentView(
              "QC"
            );
          } else {
            setCurrentView(
              "CF"
            );
          }
        }}
      />
    </div>
  );
}