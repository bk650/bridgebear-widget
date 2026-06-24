import "./MsgCount.css";

interface MsgCountProps {
  count: number;
}

export function MsgCount({
  count,
}: MsgCountProps) {
  
  return (
    <div className="msg-count">
      <span className="msg-count__text t-note">
        {count}
      </span>
    </div>
  );
}