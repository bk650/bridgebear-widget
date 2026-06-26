import { FC } from "../views/FC/FC";
import { QC } from "../views/QC/QC";
import { AC } from "../views/AC/AC";
import { CF } from "../views/CF/CF";
import { SC } from "../views/SC/SC";
import type { ViewState } from "../state/ViewState";
import { WidgetBubble } from "../views/WidgetBubble/WidgetBubble";
import { WidgetProfile } from "../views/WidgetProfile/WidgetProfile";

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