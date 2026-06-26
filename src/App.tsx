import { useEffect } from "react";

import { ViewEngine } from "./viewengine/ViewEngine";
import { useViewStore } from "./state/ViewStore";

import {
  WidgetSettingStoreProvider,
  useWidgetSettingStore,
} from "./state/WidgetSettingStore";

import {
  LawyerStoreProvider,
  useLawyerStore,
} from "./state/LawyerStore";

export default function App() {
  return (
    <WidgetSettingStoreProvider>
      <LawyerStoreProvider>
        <AppContent />
      </LawyerStoreProvider>
    </WidgetSettingStoreProvider>
  );
}

function AppContent() {
  const { currentView } =
    useViewStore();

  const { widgetSetting,
    loadWidgetSetting,
  } =
    useWidgetSettingStore();

  const { loadLawyer } =
    useLawyerStore();

  useEffect(() => {
    loadWidgetSetting(
      "bridgebear"
    );

    loadLawyer(
      "bridgebear"
    );
  }, [
    loadWidgetSetting,
    loadLawyer,
  ]);

  if (!widgetSetting) {
    return null;
  }

  const isMobile =
    window.innerWidth <= 768;

  const isBeforeClick =
    currentView ===
      "WidgetBubble" ||
    currentView ===
      "WidgetProfile";

  const positionStyle =
    isBeforeClick
      ? {
          position:
            "fixed" as const,

          right: `${
            isMobile
              ? widgetSetting
                  .MobileOffset_X
              : widgetSetting
                  .DesktopOffset_X
          }px`,

          top: `${
            isMobile
              ? widgetSetting
                  .MobileOffset_Y
              : widgetSetting
                  .DesktopOffset_Y
          }px`,
        }
      : isMobile
        ? {
            position:
              "fixed" as const,

            top: "50%",
            left: "50%",

            transform:
              "translate(-50%, -50%)",
          }
        : {
            position:
              "fixed" as const,

            right: `${
              widgetSetting
                .DesktopOffset_X
            }px`,

            top: `${
              widgetSetting
                .DesktopOffset_Y
            }px`,
          };

  return (
    <div style={positionStyle}>
      <ViewEngine
        currentView={
          currentView
        }
      />
    </div>
  );
}