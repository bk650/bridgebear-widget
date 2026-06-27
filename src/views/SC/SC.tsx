import { useEffect }  from "react"; 
import "./SC.css";
import Submitted from "../../assets/Common/Submitted.png";
import { useWidgetSettingStore } from "../../state/WidgetSettingStore";
import { useViewStore } from "../../state/ViewStore";


export function SC() {
  
  const { widgetSetting } =
    useWidgetSettingStore();

  if (!widgetSetting) {
    return null;
  }

  const { setCurrentView } = useViewStore();
  
  const duration: number = 6;

  useEffect(() => {
  const timer = setTimeout(() => {
    setCurrentView(
      "WidgetProfile"
    );
  }, duration * 1000);

  return () => clearTimeout(timer);
}, [duration, setCurrentView]);

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