import "./WidgetProfile.css";

import { ProfileImg } from "../../components/ProfileImg/ProfileImg";
import { MsgCount } from "../../components/MsgCount/MsgCount";

export function WidgetProfile() {
  return (
    <div className="widget-profile">
      <div className="widget-profile__wrapper">
        <ProfileImg />

        <div className="widget-profile__count">
          <MsgCount count={2} />
        </div>
      </div>
    </div>
  );
}