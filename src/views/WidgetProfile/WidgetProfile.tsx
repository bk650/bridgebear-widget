import "./WidgetProfile.css";
import { ProfileImg } from "../../components/ProfileImg/ProfileImg";
import { MsgCount } from "../../components/MsgCount/MsgCount";
import { useWidgetSettingStore } from "../../state/WidgetSettingStore";
import { useViewStore } from "../../state/ViewStore";

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