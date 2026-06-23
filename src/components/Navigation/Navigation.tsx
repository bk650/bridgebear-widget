import "./Navigation.css";

import CloseButtonImg from "../../Assets/Common/CloseButton.png";

import { ProgressDot } from "../ProgressDot/ProgressDot";

interface NavigationProps {
  currentStep: number;
  onClose?: () => void;
}

export function Navigation({
  currentStep,
  onClose,
}: NavigationProps) {
  return (
    <div className="navigation">
      <div className="navigation__progress">
        <ProgressDot active={currentStep >= 1} />
        <ProgressDot active={currentStep >= 2} />
        <ProgressDot active={currentStep >= 3} />
        <ProgressDot active={currentStep >= 4} />
        <ProgressDot active={currentStep >= 5} />
      </div>

      <button
        className="navigation__close-button"
        onClick={onClose}
      >
        <img
          className="navigation__close-icon"
          src={CloseButtonImg}
          alt="Close"
        />
      </button>
    </div>
  );
}