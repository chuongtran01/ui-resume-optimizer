import React from "react";
import { CommonCard } from "@/components/common/common-card";
import CommonDialog from "@/components/common/common-dialog";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Badge } from "@/components/ui/badge";

export default function ProfileAvatar() {
  const [open, setOpen] = React.useState(false);
  const principalState = useSelector((state: RootState) => state.principal);

  return (
    <>
      <CommonCard variant="edit" onClick={() => setOpen(true)}>
        <Avatar className="h-32 w-32">
          <AvatarImage src={principalState.avatarUrl} alt="@shadcn" className="rounded-full" />
          <AvatarFallback>{`${principalState.firstName[0].toUpperCase()}${principalState.lastName[0].toUpperCase()}`}</AvatarFallback>
        </Avatar>
        <p className="font-semibold mt-5">Firstname Lastname</p>
        <p className="text-xs font-semibold mt-2">Job Search Status</p>
        <Badge className="mt-1" variant={"secondary"}>
          Not specified
        </Badge>
      </CommonCard>
      <CommonDialog title="Edit Profile" isVisible={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} closeButtonText="Cancel" confirmButtonText="Save">
        common-dialog
      </CommonDialog>
    </>
  );
}
