import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
import styled, { css } from "styled-components";

const ToastProvider = ToastPrimitives.Provider;

const StyledViewport = styled(ToastPrimitives.Viewport)`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 100;
  width: min(420px, calc(100vw - 32px));
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ ...props }, ref) => (
  <StyledViewport ref={ref} {...props} />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

type ToastVariant = "default" | "destructive";

const rootVariant = {
  default: css`
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.cardForeground};
  `,
  destructive: css`
    border: 1px solid ${({ theme }) => theme.colors.destructive};
    background: ${({ theme }) => theme.colors.destructive};
    color: ${({ theme }) => theme.colors.primaryForeground};
  `,
};

const StyledToastRoot = styled(ToastPrimitives.Root)<{ $variant: ToastVariant }>`
  pointer-events: auto;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 16px 42px 16px 16px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  ${({ $variant }) => rootVariant[$variant]}
`;

const StyledAction = styled(ToastPrimitives.Action)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: inherit;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 6px 10px;
  cursor: pointer;
`;

const StyledClose = styled(ToastPrimitives.Close)`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.75;
  cursor: pointer;
`;

const StyledTitle = styled(ToastPrimitives.Title)`
  font-size: 14px;
  font-weight: 700;
`;

const StyledDescription = styled(ToastPrimitives.Description)`
  font-size: 14px;
  opacity: 0.9;
`;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & { variant?: ToastVariant }
>(({ variant = "default", ...props }, ref) => {
  return <StyledToastRoot ref={ref} $variant={variant} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ ...props }, ref) => (
  <StyledAction ref={ref} {...props} />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ ...props }, ref) => (
  <StyledClose ref={ref} toast-close="" {...props}>
    <X size={16} />
  </StyledClose>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ ...props }, ref) => (
  <StyledTitle ref={ref} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ ...props }, ref) => (
  <StyledDescription ref={ref} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
