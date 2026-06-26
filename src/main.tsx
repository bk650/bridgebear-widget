import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/Global.css";
import App from "./App";
import { ViewStoreProvider } from "./state/ViewStore";

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <ViewStoreProvider>
      <App />
    </ViewStoreProvider>
  </StrictMode>
);