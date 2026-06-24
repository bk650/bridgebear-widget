import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { ViewState } from "./ViewState";

interface ViewStoreType {
  currentView: ViewState;
  setCurrentView: (
    view: ViewState
  ) => void;

  currentStep: number;
  setCurrentStep: (
    step: number
  ) => void;

selectedAnswerText: string;
setSelectedAnswerText: (
  answer: string
) => void;

  scenarioSelector: string;
  setScenarioSelector: (
    selector: string
  ) => void;
}

const ViewStoreContext =
  createContext<ViewStoreType | null>(
    null
  );

interface ViewStoreProviderProps {
  children: ReactNode;
}

export function ViewStoreProvider({
  children,
}: ViewStoreProviderProps) {
  
    const [selectedAnswerText, setSelectedAnswerText, 
    ] = useState("");
  
    const [currentView, setCurrentView] =
    useState<ViewState>(
      "WidgetBubble"
    );

  const [currentStep, setCurrentStep] =
    useState(1);

  const [
    scenarioSelector,
    setScenarioSelector,
  ] = useState("");

  return (
    <ViewStoreContext.Provider
      value={{
        currentView,
        setCurrentView,

        currentStep,
        setCurrentStep,

        scenarioSelector,
        setScenarioSelector,

        selectedAnswerText,
        setSelectedAnswerText,
      }}
    >
      {children}
    </ViewStoreContext.Provider>
  );
}

export function useViewStore() {
  const context = useContext(
    ViewStoreContext
  );

  if (!context) {
    throw new Error(
      "useViewStore must be used within ViewStoreProvider"
    );
  }

  return context;
}