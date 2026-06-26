import "./CF.css";
import { useState } from "react";
import { Question } from "../../components/Question/Question";
import { TextInput } from "../../components/TextInput/TextInput";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";
import { useWidgetSettingStore } from "../../state/WidgetSettingStore";
import { useViewStore } from "../../state/ViewStore";

export function CF() {
  
  const { widgetSetting } =
    useWidgetSettingStore();

  if (!widgetSetting) {
    return null;
  }

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [checked, setChecked] =
    useState(false);

  const isValidPhone = (
      phone: string
    ) => {
      const numbers = 
        phone.replace(/\D/g, "");

      return numbers.length === 11;
    };  
  
  const isValidEmail = (
    email: string
  ) => {
    if (email === "") {
      return true;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );
  };

  const { setCurrentView } =
  useViewStore();

  const isButtonEnabled =
    name.trim() !== "" &&
    isValidPhone (phone) &&
    isValidEmail(email) &&
    checked;

  return (
    <div className="cf">
      <div className="cf__question-block">
        <Question
          text={
            widgetSetting.CF_QuestionText
          }
        />
      </div>

      <div className="cf__text-input-block">
        <TextInput
          label="성함"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <TextInput
          label="휴대폰 번호 (숫자만 입력)"
          value={phone}
          type="tel"
          onChange={(e) =>
            setPhone(
              e.target.value
            )
          }
        />

        <TextInput
          label="이메일 (선택)"
          value={email}
          type="email"
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />
      </div>

      <div className="cf__check-block">
        <Checkbox
          checked={checked}
          onChange={() =>
            setChecked(
              !checked
            )
          }
        />

        <span className="cf__check-text t-body">
          개인정보 수집 및 이용 동의 (
          <a
            href="#"
            className="cf__policy-link"
          >
            개인정보처리방침
          </a>
          )
        </span>
      </div>

      <Button
        text={
          widgetSetting.ButtonText_CF
        }
        disabled={!isButtonEnabled}
        onClick={() =>
          setCurrentView("SC")
        }
      />
    </div>
  );
}