import { useEffect } from "react";
import "./WidgetBubble.css";
import { MsgBubble } from "../../Components/MsgBubble/MsgBubble";
import { ProfileImg } from "../../Components/ProfileImg/ProfileImg";
import { useViewStore } from "../../State/ViewStore";
import { useWidgetSettingStore } from "../../State/WidgetSettingStore";

export function WidgetBubble() {
  
  const { widgetSetting } =
    useWidgetSettingStore();

  if (!widgetSetting) {
    return null;
  }

  const { setCurrentView } =
    useViewStore();

  const duration =
    widgetSetting.WidgetBubble_Duration;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentView(
        "WidgetProfile"
      );
    }, duration *1000);

    return () => clearTimeout(timer);
  }, [duration, setCurrentView]);

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

      <ProfileImg />
    </div>
  );
}