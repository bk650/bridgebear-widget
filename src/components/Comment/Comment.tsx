import "./Comment.css";

interface CommentProps {
  text: string;
}

export function Comment({
  text,
}: CommentProps) {
  return (
    <div className="comment">
      <div className="comment__text t-body">
        {text}
      </div>
    </div>
  );
}