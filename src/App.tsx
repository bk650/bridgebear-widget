import { ViewEngine } from "./ViewEngine/ViewEngine";
import { useViewStore } from "./State/ViewStore";

export default function App() {
  
  const { currentView } =
    useViewStore();

  return (
    <div
      style={{
        position: "fixed",
        top: "200px",
        right: "20px",
      }}
    >
      <ViewEngine
        currentView={currentView}
      />
    </div>
  );
}