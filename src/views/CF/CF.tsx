import "./CF.css";
import { useState } from "react";
import { Question } from "../../Components/Question/Question";
import { TextInput } from "../../Components/TextInput/TextInput";
import { Checkbox } from "../../Components/Checkbox/Checkbox";
import { Button } from "../../Components/Button/Button";
import { MockWidgetSettings } from "../../Mock/MockWidgetSettings";

export function CF() {
  const widgetSetting =
    MockWidgetSettings[0];

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [checked, setChecked] =
    useState(false);

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
          label="연락처"
          value={phone}
          onChange={(e) =>
            setPhone(
              e.target.value
            )
          }
        />

        <TextInput
          label="이메일 (선택)"
          value={email}
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
      />
    </div>
  );
}