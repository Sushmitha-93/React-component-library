import "./App.css";
import BadgeDemo from "./components/Badges/BadgeDemo";
import AlertDemo from "./components/Alert/AlertDemo";
import CardDemo from "./components/Cards/CardDemo";
import ToastDemo from "./components/Toast/ToastDemo";
import TooltipDemo from "./components/Tooltip/TooltipDemo";
import { ToastProvider } from "./components/Toast/ToastContext";
import TOC from "./components/TableOfContents/TOC";

const sections = [
  { id: "badge-section", label: "Badges" },
  { id: "alert-section", label: "Alerts" },
  { id: "card-section", label: "Cards" },
  { id: "tooltip-section", label: "Tooltips" },
  { id: "toast-section", label: "Toasts" },
];

function App() {
  return (
    <>
      <div className="main-container">
        <div className="content">
          <h1 style={{ textAlign: "center" }}>React Component Library Demo</h1>
          <div id="badge-section">
            <BadgeDemo />
          </div>
          <div id="alert-section">
            <AlertDemo />
          </div>
          <div id="card-section">
            <CardDemo />
          </div>
          <div id="tooltip-section">
            <TooltipDemo />
          </div>
          <div id="toast-section">
            <ToastProvider>
              <ToastDemo />
            </ToastProvider>
          </div>
        </div>
        <TOC sections={sections} />
      </div>
    </>
  );
}

export default App;
