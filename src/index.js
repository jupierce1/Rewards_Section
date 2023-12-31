import { createRoot } from "react-dom/client";
import ComponentYouSelected from "./components/ComponentYouSelected";
import "./styles/reset.css";
import "./styles/variables.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1366px", background: "#e2e2e2" }} data-ignore="used only for top most containter width">
    <ComponentYouSelected />
  </div>
);
