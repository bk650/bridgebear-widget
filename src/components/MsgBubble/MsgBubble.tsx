import "./MsgBubble.css";

interface MsgBubbleProps {
  text: string;
}

export function MsgBubble({
  text,
}: MsgBubbleProps) {
  return (
    <div className="msg-bubble">
      <span className="msg-bubble__text t-body">
        {text}
      </span>
    </div>
  );
}