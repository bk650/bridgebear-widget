import "./AC.css";
import { Navigation } from "../../components/Navigation/Navigation";
import { Question } from "../../components/Question/Question";
import { Answer } from "../../components/Answer/Answer";
import { ProfileImg } from "../../components/ProfileImg/ProfileImg";
import { ProfileDescription } from "../../components/ProfileDescription/ProfileDescription";
import { Comment } from "../../components/Comment/Comment";
import { Button } from "../../components/Button/Button";
import { MockQuestions } from "../../mock/MockQuestions";
import {
  useLawyerStore,
} from "../../state/LawyerStore";
import { useWidgetSettingStore } from "../../state/WidgetSettingStore";
import { useViewStore } from "../../state/ViewStore";

export function AC() {
  
  const {
    scenarioSelector,
    currentStep,
    selectedAnswerText,
    setCurrentStep,
    setCurrentView,
    closeWidget,
  } = useViewStore();

  const question = MockQuestions.find(
    (question) =>
      question.Type ===
        scenarioSelector &&
      question.SB_Order ===
        currentStep
  )!;

  const { lawyers } =
  useLawyerStore();

  const lawyer =
  lawyers[0];

  const { widgetSetting } =
    useWidgetSettingStore();

  if (
  !widgetSetting ||
  !lawyer
  ) {
    return null;
  }

  return (
    <div className="ac">
      <Navigation 
        activeStep={currentStep + 1}
        onClose={closeWidget}
      />

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
        text={widgetSetting.ButtonText_AC}
        onClick={() => {
          if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
            setCurrentView("QC");
          } else {
            setCurrentStep(4);
            setCurrentView("QC");
          }
        }}
      />
    </div>
  );
}