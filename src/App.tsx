import { useEffect } from "react";
import { ViewEngine } from "./viewengine/ViewEngine";
import { ViewStoreProvider , useViewStore } from "./state/ViewStore";
import { WidgetSettingStoreProvider, useWidgetSettingStore, } from "./state/WidgetSettingStore";
import { LawyerStoreProvider, useLawyerStore, } from "./state/LawyerStore";
import { QuestionStoreProvider, useQuestionStore, } from "./state/QuestionStore";
import { AnswerStoreProvider, useAnswerStore, } from "./state/AnswerStore";
import { SessionProvider } from "./state/SessionStore";
import { useSession } from "./state/SessionStore";
import { getVisitorId } from "./utils/Visitor";
import { getReferralSource } from "./utils/Referral";

export default function App() {
  
  return (
    <ViewStoreProvider>
    <WidgetSettingStoreProvider>
    <LawyerStoreProvider>
    <QuestionStoreProvider>
    <AnswerStoreProvider>
    <SessionProvider>
      <AppContent />
    </SessionProvider>
    </AnswerStoreProvider>
    </QuestionStoreProvider>
    </LawyerStoreProvider>
    </WidgetSettingStoreProvider>
    </ViewStoreProvider>
  );
}

function AppContent() {
  
  const { currentView } = useViewStore();
  const { widgetSetting, loadWidgetSetting,} = useWidgetSettingStore();
  const { loadLawyer } = useLawyerStore();
  const { loadQuestion } = useQuestionStore();
  const { loadAnswer } = useAnswerStore();
  const { setSession } = useSession();
  const { session } = useSession();

  useEffect(() => {
    console.log(session);
    }, [session]);

  useEffect(() => {
    setSession((prev) => ({
      ...prev,
      TrackingID: getVisitorId(),
      Date:
        new Date()
          .toISOString()
          .split("T")[0],
      LandingPath: window.location.href,
      ReferralSource: getReferralSource(),
    }));
  }, [setSession]);

  useEffect(() => {
    loadWidgetSetting("bridgebear");
    loadLawyer("bridgebear");
    loadQuestion("bridgebear");
    loadAnswer("bridgebear");
  }, [loadWidgetSetting, loadLawyer, loadQuestion, loadAnswer, ]);

  if (!widgetSetting) {
    return null;
  }

  const isMobile =
    window.innerWidth <= 768;

  const isBeforeClick =
    currentView ===
      "WidgetBubble" ||
    currentView ===
      "WidgetProfile";

  const positionStyle =
    isBeforeClick
      ? {
        position: "fixed" as const,
        right: `${isMobile ? widgetSetting.MobileOffset_X : widgetSetting.DesktopOffset_X}px`,
        top: `${isMobile ? widgetSetting.MobileOffset_Y : widgetSetting.DesktopOffset_Y}px`,
        }
      : isMobile 
      ? {
        position: "fixed" as const, 
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        }
        : {
          position: "fixed" as const,
          right: `${widgetSetting.DesktopOffset_X}px`,
          top: `${widgetSetting.DesktopOffset_Y}px`,
          };

  return (
    <div style={positionStyle}>
      <ViewEngine
        currentView={currentView}
      />
    </div>
  );
}