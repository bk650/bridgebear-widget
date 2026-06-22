import "./Question.css";

interface QuestionProps {
  text: string;
}

export function Question({
  text,
}: QuestionProps) {
  return (
    <div className="question t-heading">
      {text}
    </div>
  );
}