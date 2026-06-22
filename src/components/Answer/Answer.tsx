import "./Answer.css";

interface AnswerProps {
  text: string;
  onClick?: () => void;
}

export function Answer({
  text,
  onClick,
}: AnswerProps) {
  return (
    <button
      className="answer t-body"
      onClick={onClick}
    >
      {text}
    </button>
  );
}