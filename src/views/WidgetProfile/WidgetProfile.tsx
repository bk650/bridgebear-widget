import "./WidgetProfile.css";
import { ProfileImg } from "../../Components/ProfileImg/ProfileImg";
import { MsgCount } from "../../Components/MsgCount/MsgCount";
import { useWidgetSettingStore } from "../../State/WidgetSettingStore";
import { useViewStore } from "../../State/ViewStore";

export function WidgetProfile() {
  
  const { widgetSetting } =
    useWidgetSettingStore();

  if (!widgetSetting) {
    return null;
  }

  const { setCurrentView } =
    useViewStore();

  const msgCount = [
    widgetSetting.BubbleMsg_1,
    widgetSetting.BubbleMsg_2,
  ].filter(Boolean).length;

  return (
    <div
      className="widget-profile__wrapper"
      onClick={() => setCurrentView("FC")}
    >
      <ProfileImg />

      <div className="widget-profile__count">
        <MsgCount count={msgCount} />
      </div>
    </div>
  )
}