import React from "react";
import { CommonCard } from "@/components/common/common-card";
import CommonDialog from "@/components/common/common-dialog";
import { Badge } from "@/components/ui/badge";

const data = [
  {
    id: 1,
    name: "Vietnamese",
  },
  {
    id: 2,
    name: "English",
  },
];

export default function Language() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CommonCard variant="add" className="flex flex-row flex-wrap gap-2 justify-start" onClick={() => setOpen(true)} title="Languages">
        {data.map((item) => (
          <Badge key={item.id}>{item.name}</Badge>
        ))}
      </CommonCard>
      <CommonDialog title="Search Resumes" isVisible={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} closeButtonText="Cancel" confirmButtonText="Save">
        common-dialog
      </CommonDialog>
    </>
  );
}
