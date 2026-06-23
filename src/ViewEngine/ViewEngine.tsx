import { WidgetBubble } from "../Views/WidgetBubble/WidgetBubble";
import { WidgetProfile } from "../Views/WidgetProfile/WidgetProfile";
import { FC } from "../Views/FC/FC";
import { QC } from "../Views/QC/QC";
import { AC } from "../Views/AC/AC";
import { CF } from "../Views/CF/CF";
import { SC } from "../Views/SC/SC";

import type { ViewState } from "../State/ViewState";

interface ViewEngineProps {
  currentView: ViewState;
}

export function ViewEngine({
  currentView,
}: ViewEngineProps) {
  switch (currentView) {
    case "WidgetBubble":
      return <WidgetBubble />;

    case "WidgetProfile":
      return <WidgetProfile />;

    case "FC":
      return <FC />;

    case "QC":
      return <QC />;

    case "AC":
      return <AC />;

    case "CF":
      return <CF />;

    case "SC":
      return <SC />;

    default:
      return null;
  }
}