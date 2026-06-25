import { useEffect } from "react";
import { ViewEngine } from "./ViewEngine/ViewEngine";
import { useViewStore } from "./State/ViewStore";
import {
  WidgetSettingStoreProvider,
  useWidgetSettingStore,
} from "./State/WidgetSettingStore";

export default function App() {
  return (
    <WidgetSettingStoreProvider>
      <AppContent />
    </WidgetSettingStoreProvider>
  );
}

function AppContent() {
  const { currentView } = useViewStore();

  const { loadWidgetSetting } =
    useWidgetSettingStore();

  useEffect(() => {
    loadWidgetSetting("bridgebear");
  }, [loadWidgetSetting]);

  return (
    <div
      style={{
        position: "fixed",
        top: "200px",
        right: "20px",
      }}
    >
      <ViewEngine currentView={currentView} />
    </div>
  );
}