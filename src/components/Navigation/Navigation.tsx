import "./Navigation.css";
import CloseButtonImg from "../../Assets/Common/CloseButton.png";
import { ProgressDot } from "../ProgressDot/ProgressDot";

interface NavigationProps {
  activeStep: number;
  onClose?: () => void;
}

export function Navigation({
  activeStep,
  onClose,
}: NavigationProps) {
  
  return (
    <div className="navigation">
      <div className="navigation__progress">
        <ProgressDot active={activeStep >= 1} />
        <ProgressDot active={activeStep >= 2} />
        <ProgressDot active={activeStep >= 3} />
        <ProgressDot active={activeStep >= 4} />
        <ProgressDot active={activeStep >= 5} />
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