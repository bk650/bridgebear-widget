import "./ProgressDot.css";

interface ProgressDotProps {
  active?: boolean;
}

export function ProgressDot({
  active = false,
}: ProgressDotProps) {
  return (
    <div
      className={`progress-dot ${
        active ? "active" : ""
      }`}
    />
  );
}