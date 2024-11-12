import "./App.css";
import BadgeDemo from "./components/Badges/BadgeDemo";
import AlertDemo from "./components/Alert/AlertDemo";
import CardDemo from "./components/Cards/CardDemo";
import ToastDemo from "./components/Toast/ToastDemo";
import TooltipDemo from "./components/Tooltip/TooltipDemo";

function App() {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>React Component Library</h1>
        <BadgeDemo />
        <AlertDemo />
        <CardDemo />
        <TooltipDemo />
        {/* <ToastDemo /> */}
      </div>
    </>
  );
}

export default App;
