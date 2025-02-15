import React from "react";
import { CommonCard } from "@/components/common/common-card";
import CommonDialog from "@/components/common/common-dialog";

export default function JobPreferences() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CommonCard variant="edit" onClick={() => setOpen(true)} title="Job Preferences"></CommonCard>
      <CommonDialog title="Edit Equal Employment Data" isVisible={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} closeButtonText="Cancel" confirmButtonText="Save">
        common-dialog
      </CommonDialog>
    </>
  );
}
