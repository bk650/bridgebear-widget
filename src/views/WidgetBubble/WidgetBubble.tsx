import { useEffect } from "react";
import "./WidgetBubble.css";
import { MsgBubble } from "../../Components/MsgBubble/MsgBubble";
import { ProfileImg } from "../../Components/ProfileImg/ProfileImg";
import { MockWidgetSettings } from "../../Mock/MockWidgetSettings";
import { useViewStore } from "../../State/ViewStore";

export function WidgetBubble() {
  
  const widgetSetting =
    MockWidgetSettings[0];

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