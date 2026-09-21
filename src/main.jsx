import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyNewsProvider } from "./ContextAPI/NewsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyNewsProvider>
      <App />
    </MyNewsProvider>
  </StrictMode>,
);
