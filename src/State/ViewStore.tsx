import { createContext, useContext, useState, type ReactNode } from "react";
// 💡 ViewState는 현재 화면이 어떤 상태(예: 'WidgetBubble', 'WidgetProfile' 등)를 가질 수 있는지 제한하는 글자(Literal Type)들의 모음집입니다.
import type { ViewState } from "./ViewState";

/**
 * 1. 저장소 설계도 (Interface)
 * - 이 Context 저장소(구글 클라우드)에 어떤 데이터와 어떤 변경 함수들이 담길지 규격을 정의합니다.
 * - 다른 파일에서 `useViewStore()`를 사용할 때 자동완성으로 뜨는 목록이 바로 이것입니다.
 */
interface ViewStoreType {
  // 현재 사용자에게 보여주고 있는 위젯의 화면 상태 (예: 말풍선 화면, 프로필 화면 등)
  currentView: ViewState;
  // 화면을 다른 화면으로 전환하고 싶을 때 호출하는 함수
  setCurrentView: (view: ViewState) => void;

  // 설문조사나 챗봇 시나리오에서 사용자가 현재 머물고 있는 단계 번호 (0부터 시작)
  currentStep: number;
  // 단계를 다음 단계로 넘기거나(currentStep + 1) 처음으로 되돌릴 때 호출하는 함수
  setCurrentStep: (step: number) => void;

  // 사용자가 가장 최근에 클릭하거나 입력한 답변 텍스트 내용을 임시 저장하는 공간
  selectedAnswerText: string;
  // 사용자가 새로운 답변을 고를 때마다 그 텍스트를 업데이트하는 함수
  setSelectedAnswerText: (answer: string) => void;

  // 사용자가 어떤 시나리오 경로(예: "A코스", "환불문의" 등)를 선택했는지 식별하는 문자열 값
  scenarioSelector: string;
  // 선택한 시나리오 분기점을 변경할 때 호출하는 함수
  setScenarioSelector: (selector: string) => void;
  
  // 위젯의 'X' 버튼을 누르거나 종료할 때, 저장소의 모든 상태를 초기 상태로 싹 비워주는 일괄 리셋 함수
  closeWidget: () => void;
}

/**
 * 2. 빈 저장소 공간 생성 (Context)
 * - 실제로 데이터가 담길 '공유 폴더' 공간을 메모리에 개설합니다.
 * - 최초에는 아무 데이터도 없기 때문에 기본값을 `null`로 지정하며, 위에서 만든 설계도(`ViewStoreType`) 규격을 따르도록 강제합니다.
 */
const ViewStoreContext = createContext<ViewStoreType | null>(null);

/**
 * 3. Provider를 위한 Props(속성) 타입 정의
 * - `ViewStoreProvider` 태그가 감싸 안을 하위 자식 컴포넌트들(`children`)의 타입을 지정합니다.
 * - `ReactNode`는 HTML 태그, 글자, 다른 React 컴포넌트 등 화면에 그려질 수 있는 모든 것을 허용한다는 뜻입니다.
 */
interface ViewStoreProviderProps {
  children: ReactNode;
}

/**
 * 4. 데이터 공장 및 실시간 공급 장치 (Provider 컴포넌트)
 * - 구글 클라우드의 '서버 인프라' 역할을 합니다. 
 * - 이 안에서 실제 데이터가 `useState`를 통해 살아 숨 쉬며, 값이 바뀌면 이 Provider 내부의 자식들이 전부 실시간으로 리렌더링(화면 갱신)됩니다.
 */
export function ViewStoreProvider({ children }: ViewStoreProviderProps) {
  
  // [상태 1] 현재 화면 상태관리 (최초 앱이 켜졌을 때는 기본값으로 "WidgetBubble" 말풍선 화면을 보여줍니다)
  const [currentView, setCurrentView] = useState<ViewState>("WidgetBubble");

  // [상태 2] 진행 단계 상태관리 (최초 단계는 당연히 0단계부터 시작합니다)
  const [currentStep, setCurrentStep] = useState(0);

  // [상태 3] 선택된 답변 텍스트 관리 (시작할 때는 아무것도 선택하지 않았으므로 빈 문자열 ""을 둡니다)
  const [selectedAnswerText, setSelectedAnswerText] = useState("");

  // [상태 4] 시나리오 선택자 관리 (사용자가 루트를 고르기 전이므로 빈 문자열 ""로 시작합니다)
  const [scenarioSelector, setScenarioSelector] = useState("");

  /**
   * [기능 함수] 위젯 종료 및 초기화 로직
   * - 사용자가 위젯을 닫았을 때, 이전에 조작하던 데이터가 남아있으면 다음에 열 때 꼬이게 됩니다.
   * - 따라서 위에서 선언한 4가지 상태의 변경 함수(set~)들을 한데 모아, 위젯이 처음 켜졌을 때의 클린한 상태로 되돌리는 역할을 합니다.
   */
  const closeWidget = () => {
    setCurrentView("WidgetProfile");   // 위젯을 닫으면 다음 번엔 프로필 화면이 먼저 보이도록 세팅 (비즈니스 로직에 따라 변경 가능)
    setCurrentStep(0);                 // 단계를 다시 0단계로 리셋
    setScenarioSelector("");           // 선택했던 시나리오 루트 초기화
    setSelectedAnswerText("");         // 입력했던 답변 글자 대피소 비우기
  };

  return (
    // ViewStoreContext 라는 공유 폴더에 가공된 4개의 데이터와 5개의 함수(closeWidget 포함)를 담아서 넘겨줍니다.
    // value 안에 넣어준 값들은 자식 컴포넌트(`children`)들이 언제든 꺼내 쓸 수 있는 공용 자산이 됩니다.
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
        closeWidget,
      }}
    >
      {/* 이 Provider 태그 사이에 감싸진 하위 화면들이 이 자리에 들어와 데이터 혜택을 받습니다 */}
      {children}
    </ViewStoreContext.Provider>
  );
}

/**
 * 5. 데이터를 간편하게 꺼내 쓰는 '전용 바로가기 열쇠' (Custom Hook)
 * - 다른 파일에서 Context에 접근할 때 매번 `useContext(ViewStoreContext)`라고 길게 쓰는 번거로움을 줄여줍니다.
 * - 이 함수를 가져와 구조 분해 할당으로 `const { currentStep, setCurrentStep } = useViewStore();` 와 같이 원하는 것만 쏙 빼서 씁니다.
 */
export function useViewStore() {
  // 국외선 공유 폴더(Context)에서 데이터를 조회합니다.
  const context = useContext(ViewStoreContext);

  // 🔥 [안전장치] 만약 개발자가 실수로 최상단에 <ViewStoreProvider> 울타리를 치지 않은 채, 
  // 하위 컴포넌트에서 이 열쇠를 사용하려고 하면 하얗게 화면이 뻗는 대신 아래와 같이 명확한 에러 메시지를 띄워 실수를 바로잡아 줍니다.
  if (!context) {
    throw new Error(
      "useViewStore는 반드시 ViewStoreProvider의 울타리(하위 자식) 안에서만 사용되어야 합니다."
    );
  }

  // 안전장치를 통과했다면 정상적으로 데이터와 함수가 담긴 오브젝트를 반환합니다.
  return context;
}
