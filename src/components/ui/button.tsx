import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styled, { css } from "styled-components";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "accent" | "hero" | "hero-outline";
type ButtonSize = "default" | "sm" | "lg" | "xl" | "icon";

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  default: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
  `,
  destructive: css`
    background: ${({ theme }) => theme.colors.destructive};
    color: ${({ theme }) => theme.colors.primaryForeground};
  `,
  outline: css`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    border: 1px solid ${({ theme }) => theme.colors.border};
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondaryForeground};
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.foreground};
  `,
  link: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  `,
  accent: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentForeground};
  `,
  hero: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentForeground};
    font-weight: 700;

    &:hover {
      filter: brightness(0.9);
    }
  `,
  "hero-outline": css`
    background: transparent;
    color: ${({ theme }) => theme.colors.accentForeground};
    border: 2px solid ${({ theme }) => theme.colors.mutedForeground};
    font-weight: 700;

    &:hover {
      filter: brightness(0.9);
    }
  `,
};

const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  default: css`
    min-height: 40px;
    padding: 0 16px;
    font-size: 14px;
  `,
  sm: css`
    min-height: 36px;
    padding: 0 12px;
    font-size: 14px;
  `,
  lg: css`
    min-height: 48px;
    padding: 0 24px;
    font-size: 16px;
  `,
  xl: css`
    min-height: 56px;
    padding: 0 32px;
    font-size: 18px;
  `,
  icon: css`
    width: 40px;
    min-height: 40px;
    padding: 0;
  `,
};

const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: filter 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    filter: brightness(0.95);
  }

  > svg {
    flex-shrink: 0;
  }

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : StyledButton;
    return <Comp ref={ref} $variant={variant} $size={size} {...props} />;
  },
);
Button.displayName = "Button";

export { Button };
