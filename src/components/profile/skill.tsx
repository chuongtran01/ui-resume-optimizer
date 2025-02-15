import React from "react";
import { CommonCard } from "@/components/common/common-card";
import CommonDialog from "@/components/common/common-dialog";
import { Badge } from "../ui/badge";

const data = [
  {
    id: 1,
    name: "Node.js",
  },
  {
    id: 2,
    name: "Java",
  },
  {
    id: 3,
    name: "Spring Boot",
  },
  {
    id: 4,
    name: "Typescript",
  },
  {
    id: 5,
    name: "React",
  },
  {
    id: 6,
    name: "Angular",
  },
];

export default function Skill() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CommonCard variant="add" className="flex flex-row flex-wrap gap-2 justify-start" onClick={() => setOpen(true)} title="Skills">
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
