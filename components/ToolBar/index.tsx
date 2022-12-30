import { Dispatch, SetStateAction } from 'react';
import ToolPill from '../ToolPill';

const ToolBar = (props: {
  setActiveTool: Dispatch<SetStateAction<string>>;
  activeTool: string;
}) => {
  return (
    <div
      className="flex flex-row rounded-md border-[1px] border-gray-400 justify-between
    px-[6px] py-[4px]
    mt-2"
    >
      <ToolPill
        isActive={props.activeTool === 'Development'}
        onClick={props.setActiveTool}
        label="Development"
        color="bg-[#FF4949]"
      />
      <ToolPill
        isActive={props.activeTool === 'Writing'}
        onClick={props.setActiveTool}
        label="Writing"
        color="bg-[#55E6C1]"
      />
      <ToolPill
        isActive={props.activeTool === 'Editing'}
        onClick={props.setActiveTool}
        label="Editing"
        color="bg-[#3B3B98]"
      />
      <ToolPill
        isActive={props.activeTool === 'Etc'}
        onClick={props.setActiveTool}
        label="Etc"
        color="bg-[#82589F]"
      />
    </div>
  );
};

export default ToolBar;
