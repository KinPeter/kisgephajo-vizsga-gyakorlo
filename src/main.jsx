import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./AppContext.jsx";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
