import "./TextInput.css";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export function TextInput({
  label,
  value,
  onChange,
}: TextInputProps) {
  return (
    <div className="text-input">
      <div className="text-input__label t-note">
        {label}
      </div>

      <input
        className="text-input__value t-body"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}