import { getVisitorId } from "./utils/visitor";
import { useViewStore } from "./state/viewStore";
import { WidgetProfile } from "./views/WidgetProfile/WidgetProfile";

function App() {
  const visitorId = getVisitorId();

  const { currentView, setCurrentView } = useViewStore();

  return (
    <div>
      <h1>BridgeBear</h1>

      <p>Visitor: {visitorId}</p>

      <p>Current View: {currentView}</p>

      {currentView === "WIDGET_PROFILE" && (
        <WidgetProfile />
      )}

      <button
        onClick={() => setCurrentView("FC")}
      >
        Start
      </button>
    </div>
  );
}

export default App;