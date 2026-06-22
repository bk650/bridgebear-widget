import "./WidgetContainer.css";

interface WidgetContainerProps {
  children: React.ReactNode;
}

export function WidgetContainer({
  children,
}: WidgetContainerProps) {
  return (
    <div className="widget-container">
      {children}
    </div>
  );
}