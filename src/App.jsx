import "./App.css";
import BadgeDemo from "./components/Badges/BadgeDemo";
import AlertDemo from "./components/Alert/AlertDemo";
import CardDemo from "./components/Cards/CardDemo";
import ToastDemo from "./components/Toast/ToastDemo";
import TooltipDemo from "./components/Tooltip/TooltipDemo";
import { ToastProvider } from "./components/Toast/ToastContext";
import TOC from "./components/TableOfContents/TOC";
import DotDivider from "./components/DotDivider/DotDivider";

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
          <h1 style={{ textAlign: "center" }} className="page-title">
            React Component Library
          </h1>
          <div id="badge-section" className="section">
            <BadgeDemo />
          </div>
          <DotDivider />
          <div id="alert-section" className="section">
            <AlertDemo />
          </div>
          <DotDivider />
          <div id="card-section" className="section">
            <CardDemo />
          </div>
          <DotDivider />
          <div id="tooltip-section" className="section">
            <TooltipDemo />
          </div>
          <DotDivider />
          <div id="toast-section" className="section">
            <ToastProvider>
              <ToastDemo />
            </ToastProvider>
          </div>
          <DotDivider />
        </div>
        <TOC sections={sections} />
      </div>
    </>
  );
}

export default App;
