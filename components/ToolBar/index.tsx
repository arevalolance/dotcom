import { Dispatch, SetStateAction } from "react";
import ToolPill from "components/ToolPill";

const ToolBar = (props: {
  setActiveTool: Dispatch<SetStateAction<string>>;
  activeTool: string;
}) => {
  return (
    <div className="flex flex-row justify-between gap-x-2 overflow-auto scroll-smooth rounded-md border-[1px] border-gray-200 p-1">
      <ToolPill
        isActive={props.activeTool === "Development"}
        onClick={props.setActiveTool}
        label="Development"
        color="bg-[#FF4949]"
      />
      <ToolPill
        isActive={props.activeTool === "Writing"}
        onClick={props.setActiveTool}
        label="Writing"
        color="bg-[#55E6C1]"
      />
      <ToolPill
        isActive={props.activeTool === "Editing"}
        onClick={props.setActiveTool}
        label="Editing"
        color="bg-[#3B3B98]"
      />
      <ToolPill
        isActive={props.activeTool === "Etc"}
        onClick={props.setActiveTool}
        label="Etc"
        color="bg-[#82589F]"
      />
    </div>
  );
};

export default ToolBar;
