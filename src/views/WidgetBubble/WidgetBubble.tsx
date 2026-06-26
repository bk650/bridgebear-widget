import { useEffect } from "react";
import "./WidgetBubble.css";
import { MsgBubble } from "../../components/MsgBubble/MsgBubble";
import { ProfileImg } from "../../components/ProfileImg/ProfileImg";
import { useViewStore } from "../../state/ViewStore";
import { useWidgetSettingStore } from "../../state/WidgetSettingStore";
import { useLawyerStore } from "../../state/LawyerStore";

export function WidgetBubble() {
  
  const { widgetSetting } =
    useWidgetSettingStore();

  const { lawyers } =
    useLawyerStore();

  const { setCurrentView } =
    useViewStore();

  if (!widgetSetting) {
    return null;
  }

  const widgetLawyer =
    lawyers.find(
      lawyer =>
        lawyer.Assigned_Widget
    );

  const duration =
    widgetSetting.WidgetBubble_Duration;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentView(
        "WidgetProfile"
      );
    }, duration * 1000);

    return () =>
      clearTimeout(timer);
  }, [
    duration,
    setCurrentView,
  ]);

  return (
    <div
      className="widget-bubble"
      onClick={() =>
        setCurrentView("FC")
      }
    >
      <MsgBubble
        text={
          widgetSetting.BubbleMsg_1
        }
      />

      {widgetSetting.BubbleMsg_2 && (
        <MsgBubble
          text={
            widgetSetting.BubbleMsg_2
          }
        />
      )}

      <ProfileImg
        imageUrl={
          widgetLawyer
            ?.ProfileImg?.[0]?.url
        }
      />
    </div>
  );
}