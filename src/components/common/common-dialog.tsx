import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CommonDialogProps {
  title: string;
  subTitle?: string;
  isVisible: boolean;
  onClose: () => void;
  closeButtonText: string;
  onConfirm: () => void;
  confirmButtonText: string;
  children?: React.ReactNode;
}

export default function CommonDialog({ title, subTitle, isVisible, onClose, closeButtonText, onConfirm, confirmButtonText, children }: CommonDialogProps) {
  return (
    <Dialog open={isVisible} onOpenChange={onClose}>
      <DialogContent className="gap-0 p-0 outline-none">
        <DialogHeader className="px-4 pb-4 pt-5">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>
        <div className="overflow-hidden rounded-t-none border-t bg-transparent px-4 pb-4 pt-4">{children}</div>
        <DialogFooter className="flex items-center border-t p-4 sm:justify-end">
          <Button variant={"outline"} onClick={onClose}>
            {closeButtonText}
          </Button>
          <Button onClick={onConfirm}>{confirmButtonText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
