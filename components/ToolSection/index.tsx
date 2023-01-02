"use client";

import CardContainer from "components/CardContainer";
import CardHeader from "components/CardHeader";
import ToolBar from "components/ToolBar";
import ToolCard from "components/ToolCard";
import { tools } from "lib/allTools";
import { useState } from "react";

const ToolSection = () => {
  const [activeTool, setActiveTool] = useState<string>("Development");

  return (
    <CardContainer className="max-w-[500px]">
      <CardHeader
        title={"Tools I use"}
        desc={"Here are some of the tools I use for all sort of things."}
      />
      <ToolBar setActiveTool={setActiveTool} activeTool={activeTool} />

      <div className="mt-2 flex h-[400px] flex-col gap-y-2 overflow-auto scroll-smooth pr-4">
        {tools[activeTool.toLowerCase() as keyof typeof tools].map((tool) => (
          <ToolCard
            key={tool.name}
            name={tool.name}
            info={tool.info}
            icon={tool.icon}
            url={tool.url}
          />
        ))}
      </div>
    </CardContainer>
  );
};

export default ToolSection;
