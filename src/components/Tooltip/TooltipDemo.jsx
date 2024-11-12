import Tooltip from "./index";
import "./TooltipDemo.css"; // Import the CSS file for styling the grid
import Button from "@mui/material/Button";
import { HiOutlineInbox } from "react-icons/hi";

export default function TooltipDemo() {
  return (
    <>
      <h2>Tooltip</h2>
      <div style={{ paddingBottom: "40px" }}>
        <h4>Tooltip themes: </h4>
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

      <h4>Tooltip placements:</h4>
      <p>
        Hover over the Button to see the tooltips directions: top, right,
        bottom, left
      </p>
      <div>
        <Tooltip message="Tooltip on top" placement="top">
          <Button variant="text">Top</Button>
        </Tooltip>
        <Tooltip message="Tooltip on right" placement="right">
          <Button variant="text">Right</Button>
        </Tooltip>
        <Tooltip message="Tooltip on bottion" placement="bottom">
          <Button variant="text">Bottom</Button>
        </Tooltip>
        <Tooltip message="Tooltip on left" placement="left">
          <Button variant="text">Left</Button>
        </Tooltip>
      </div>
    </>
  );
}
