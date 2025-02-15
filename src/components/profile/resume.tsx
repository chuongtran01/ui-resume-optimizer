import React from "react";
import { CommonCard } from "@/components/common/common-card";
import CommonDialog from "@/components/common/common-dialog";
import { FileUser } from "lucide-react";

export default function Resume() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CommonCard variant="edit" className="flex flex-row justify-start gap-4" onClick={() => setOpen(true)} title="Resume">
        <FileUser size={40} />
        <span>
          <p className="font-semibold">User_Resume</p>
          <p className="text-sm hover:underline hover:cursor-pointer">View last upload: 02/30/2025 12:00:00 AM CDT</p>
        </span>
      </CommonCard>
      <CommonDialog title="Search Resumes" isVisible={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} closeButtonText="Cancel" confirmButtonText="Save">
        common-dialog
      </CommonDialog>
    </>
  );
}
