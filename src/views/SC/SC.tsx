import { useEffect }  from "react"; 
import "./SC.css";
import { useWidgetSettingStore } from "../../State/WidgetSettingStore";
import Submitted from "../../Assets/Common/Submitted.png";
import { useViewStore } from "../../State/ViewStore";


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