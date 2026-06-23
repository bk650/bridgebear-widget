import "./Answer.css";

interface AnswerProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Answer({
  text,
  disabled = false,
  onClick,
}: AnswerProps) {
  return (
    <button
      className={`answer ${
        disabled
          ? "answer--disabled"
          : ""
      }`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <span className="answer__text t-body">
        {text}
      </span>
    </button>
  );
}