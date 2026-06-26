import "./WidgetProfile.css";
import { ProfileImg } from "../../components/ProfileImg/ProfileImg";
import { MsgCount } from "../../components/MsgCount/MsgCount";
import { useWidgetSettingStore } from "../../state/WidgetSettingStore";
import { useLawyerStore } from "../../state/LawyerStore";
import { useViewStore } from "../../state/ViewStore";

export function WidgetProfile() {
  
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

  const msgCount = [
    widgetSetting.BubbleMsg_1,
    widgetSetting.BubbleMsg_2,
  ].filter(Boolean).length;

  return (
    <div
      className="widget-profile__wrapper"
      onClick={() => setCurrentView("FC")}
    >
      <ProfileImg
        imageUrl={
          widgetLawyer
            ?.ProfileImg?.[0]?.url
        }
      />

      <div className="widget-profile__count">
        <MsgCount count={msgCount} />
      </div>
    </div>
  );
}