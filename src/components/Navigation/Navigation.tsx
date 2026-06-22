import "./Navigation.css";

import { ProgressDot } from "../ProgressDot/ProgressDot";

export function Navigation() {
  return (
    <div className="navigation">
      <ProgressDot active />
      <ProgressDot />
      <ProgressDot />
      <ProgressDot />
      <ProgressDot />
    </div>
  );
}