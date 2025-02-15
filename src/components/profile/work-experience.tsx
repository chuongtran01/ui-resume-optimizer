import React from "react";
import { CommonCard } from "@/components/common/common-card";
import CommonDialog from "@/components/common/common-dialog";

export default function WorkExperience() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CommonCard variant="add" onClick={() => setOpen(true)} title="Work Experience"></CommonCard>
      <CommonDialog title="Search Resumes" isVisible={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} closeButtonText="Cancel" confirmButtonText="Save">
        common-dialog
      </CommonDialog>
    </>
  );
}
