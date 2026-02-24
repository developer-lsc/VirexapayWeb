import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styled from "styled-components";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const StyledContent = styled(TooltipPrimitive.Content)`
  z-index: 50;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.cardForeground};
  padding: 6px 10px;
  font-size: 13px;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ sideOffset = 4, ...props }, ref) => (
  <StyledContent ref={ref} sideOffset={sideOffset} {...props} />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
