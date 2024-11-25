import Tooltip from "./index";
import "./tooltipdemo.css"; // Import the CSS file for styling the grid
import Button from "@mui/material/Button";
import { HiOutlineInbox } from "react-icons/hi";

export default function TooltipDemo() {
  return (
    <>
      <h2>Tooltip</h2>
      <h3>Basic Tooltip</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip>
          <Button variant="text">Hover me</Button>
        </Tooltip>
      </div>
      <h3>Tooltip placements:</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip message="Tooltip on top" placement="top" arrow>
          <Button variant="text">Top</Button>
        </Tooltip>
        <Tooltip message="Tooltip on bottion" placement="bottom" arrow>
          <Button variant="text">Bottom</Button>
        </Tooltip>
        <Tooltip message="Tooltip on left" placement="left" arrow>
          <Button variant="text">Left</Button>
        </Tooltip>
        <Tooltip message="Tooltip on right" placement="right" arrow>
          <Button variant="text">Right</Button>
        </Tooltip>
      </div>
      <h3>Tooltip with icon, title</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tooltip
          icon={<HiOutlineInbox />}
          title="Archive notes"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
          placement="right"
          arrow
        >
          <Button variant="text">Custom Tooltip</Button>
        </Tooltip>
      </div>

      <div style={{ paddingBottom: "40px" }}>
        <h3>Tooltip themes: </h3>
      </div>

      {/* Grid container for displaying tooltips */}
      <div className="tooltip-grid">
        <div>
          <Tooltip
            icon={<HiOutlineInbox />}
            title="Archive notes"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            placement="right"
            sticky={true}
            initialVisible={true}
            maxWidth="320px"
            arrow
          ></Tooltip>
        </div>
        <div>
          <Tooltip
            icon={<HiOutlineInbox />}
            title="Archive notes"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            placement="right"
            sticky={true}
            initialVisible={true}
            theme={"light"}
            maxWidth="320px"
            arrow
          ></Tooltip>
        </div>
        <div>
          <Tooltip
            icon={<HiOutlineInbox />}
            title="Archive notes"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            placement="right"
            sticky={true}
            initialVisible={true}
            theme={"blue"}
            maxWidth="320px"
            arrow
          ></Tooltip>
        </div>
        <div>
          <Tooltip
            icon={<HiOutlineInbox />}
            title="Archive notes"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            placement="right"
            sticky={true}
            initialVisible={true}
            theme={"blue-light"}
            maxWidth="320px"
            arrow
          ></Tooltip>
        </div>
        <div>
          <Tooltip
            icon={<HiOutlineInbox />}
            title="Archive notes"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            placement="right"
            sticky={true}
            initialVisible={true}
            theme={"pink"}
            maxWidth="320px"
            arrow
          ></Tooltip>
        </div>
        <div>
          <Tooltip
            icon={<HiOutlineInbox />}
            title="Archive notes"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            placement="right"
            sticky={true}
            initialVisible={true}
            theme={"pink-light"}
            maxWidth="320px"
            arrow
          ></Tooltip>
        </div>
        <div>
          <Tooltip
            icon={<HiOutlineInbox />}
            title="Archive notes"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            placement="right"
            sticky={true}
            initialVisible={true}
            theme={"green"}
            maxWidth="320px"
            arrow
          ></Tooltip>
        </div>
        <div>
          <Tooltip
            icon={<HiOutlineInbox />}
            title="Archive notes"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            placement="right"
            sticky={true}
            initialVisible={true}
            theme={"green-light"}
            maxWidth="320px"
            arrow
          ></Tooltip>
        </div>
      </div>
    </>
  );
}
