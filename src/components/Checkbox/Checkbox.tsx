import "./Checkbox.css";
import CheckmarkImg from "../../Assets/Common/Checkmark.png";

interface CheckboxProps {
  checked: boolean;
  onChange?: () => void;
}

export function Checkbox({
  checked,
  onChange,
}: CheckboxProps) {
  
  return (
    <button
      className={`checkbox ${
        checked ? "checkbox--checked" : ""
      }`}
      onClick={onChange}
      type="button"
    >
      {checked && (
        <img
          className="checkbox__checkmark"
          src={CheckmarkImg}
          alt="Checked"
        />
      )}
    </button>
  );
}