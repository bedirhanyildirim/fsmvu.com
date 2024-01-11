"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PopupProps = {
  title: String;
  description: String;
  defaultOpen?: boolean;
};

export default function Popup({
  title,
  description,
  defaultOpen = false,
}: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (defaultOpen) {
      setIsOpen(true);
    }
  }, [title, description, defaultOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
