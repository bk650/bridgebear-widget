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