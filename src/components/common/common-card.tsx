"use client";

import * as React from "react";
import { Edit, IconNode, Pencil, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EditableCardProps {
  variant: "edit" | "add";
  title?: string;
  iconTooltipMessage?: string;
  children?: React.ReactNode;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function CommonCard({ variant, title, iconTooltipMessage, children, className, onClick }: EditableCardProps) {
  const renderIcon = (): React.JSX.Element => {
    switch (variant) {
      case "add":
        return <Plus />;
      case "edit":
        return <Pencil />;
      default:
        return <Pencil />;
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center">
          {title && <p className="font-semibold text-lg">{title}</p>}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline" className="ml-auto rounded-full" onClick={onClick}>
                  {renderIcon()}
                </Button>
              </TooltipTrigger>
              {iconTooltipMessage && <TooltipContent sideOffset={10}>{iconTooltipMessage}</TooltipContent>}
            </Tooltip>
          </TooltipProvider>
        </CardHeader>
        {children && <CardContent className={cn("flex flex-col justify-center items-center", className)}>{children}</CardContent>}
      </Card>
    </>
  );
}
