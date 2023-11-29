"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export const BillBoardClient = () => {

  const router = useRouter();
  const params = useParams();
  
  return (
    <>
      <div className="flex items-center justify-between w-full ">
        <Heading title="BillBoard(0)" description="Manage your BillBoards" />

        <Button className="ml-auto" onClick = {()=>router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="h-4 w-4 mr-2 " />
          Add New
        </Button>
      </div>
    </>
  );
};
