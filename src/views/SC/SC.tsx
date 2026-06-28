import { useEffect, useState } from "react";
import "./SC.css";
import Submitted from "../../assets/Common/Submitted.png";
import { useWidgetSettingStore } from "../../state/WidgetSettingStore";
import { useViewStore } from "../../state/ViewStore";
import { useSession } from "../../state/SessionStore";

export function SC() {

  const { widgetSetting } =
    useWidgetSettingStore();

  const { setCurrentView } =
    useViewStore();

  const { resetSession } =
    useSession();

  if (!widgetSetting) {
    return null;
  }

  const duration: number = 5;

  const [countdown, setCountdown] =
    useState(duration);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        resetSession();

        setCurrentView(
          "WidgetProfile"
        );

      }, duration * 1000);

    return () =>
      clearTimeout(timer);

  }, [
    duration,
    resetSession,
    setCurrentView,
  ]);

  useEffect(() => {

    const timer =
      setInterval(() => {

        setCountdown(
          (prev) =>
            prev - 1
        );

      }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

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

        <div className="sc__body t-body">
          {countdown}
          초 후 자동으로 종료됩니다.
        </div>

      </div>

    </div>
  );
}