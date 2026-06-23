import "./SC.css";
import { MockWidgetSettings } from "../../Mock/MockWidgetSettings";
import Submitted from "../../Assets/Common/Submitted.png";

export function SC() {
  const widgetSetting =
    MockWidgetSettings[0];

  return (
    <div className="sc">
      <img
        src={Submitted}
        alt="Submitted"
        className="sc__submitted"
      />

      <div className="sc__text">
        <div className="sc__heading t-heading">
          {widgetSetting.SC_Heading}
        </div>

        <div className="sc__body t-body">
          {widgetSetting.SC_Body}
        </div>
      </div>
    </div>
  );
}