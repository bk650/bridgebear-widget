import { WidgetContainer } from "../../components/WidgetContainer/WidgetContainer";
import { ProfileImg } from "../../components/ProfileImg/ProfileImg";
import { Navigation } from "../../components/Navigation/Navigation";

export function WidgetProfile() {
  return (
    <WidgetContainer>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Navigation />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <ProfileImg />
        </div>

        <div
          style={{
            textAlign: "center",
          }}
        >
          BridgeBear Widget
        </div>
      </div>
    </WidgetContainer>
  );
}