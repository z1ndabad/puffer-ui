import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "hover:shadow-btn-hover active:shadow-btn-active inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium shadow-btn transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-primary-foreground bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover",
        destructive:
          "border border-secondary-foreground bg-destructive text-destructive-foreground hover:bg-destructive/50 active:bg-destructive/50",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent",
        secondary:
          "border border-secondary-foreground bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary-foreground underline-offset-4 hover:underline disabled:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
