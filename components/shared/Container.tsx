import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative mx-auto w-full max-w-7xl px-8 py-4", className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export default Container;
