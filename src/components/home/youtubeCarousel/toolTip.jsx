import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function ToolTip({ children, text }) {
  return (
    <Tooltip>
      <TooltipTrigger className="absolute inset-0 w-full h-full z-40">{children}</TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
}
