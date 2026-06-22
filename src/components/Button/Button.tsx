import "./Button.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  text,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="button t-subheading"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}