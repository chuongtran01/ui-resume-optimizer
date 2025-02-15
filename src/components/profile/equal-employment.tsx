import React from "react";
import { CommonCard } from "../common/common-card";
import CommonDialog from "@/components/common/common-dialog";

export default function EqualEmployment() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CommonCard variant="edit" onClick={() => setOpen(true)} title="Equal Employment"></CommonCard>
      <CommonDialog title="Edit Equal Employment Data" isVisible={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} closeButtonText="Cancel" confirmButtonText="Save">
        common-dialog
      </CommonDialog>
    </>
  );
}
