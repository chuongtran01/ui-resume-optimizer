import React from "react";
import { CommonCard } from "../common/common-card";
import CommonDialog from "@/components/common/common-dialog";
import { Cake, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CommonCard variant="edit" className="items-start gap-1" onClick={() => setOpen(true)} title="Contact">
        <span className="flex flex-row gap-2 justify-center items-center">
          <Mail size={16} />
          <p className="text-sm flex justify-center items-center">example@email.com</p>
        </span>
        <span className="flex flex-row gap-2 justify-center items-center">
          <Phone size={16} />
          <p className="text-sm flex justify-center items-center">+1 (999) 999-9999</p>
        </span>
        <span className="flex flex-row gap-2 justify-center items-center">
          <Cake size={16} />
          <p className="text-sm flex justify-center items-center">30/02/2000</p>
        </span>
        <span className="flex flex-row gap-2 justify-center items-center">
          <MapPin size={16} />
          <p className="text-sm flex justify-center items-center">Houston, TX</p>
        </span>
      </CommonCard>
      <CommonDialog title="Edit Contact" isVisible={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} closeButtonText="Cancel" confirmButtonText="Save">
        common-dialog
      </CommonDialog>
    </>
  );
}
