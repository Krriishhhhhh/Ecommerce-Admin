"use client";
import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { BillBoardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

interface BillBoardClientProps {
  data: BillBoardColumn[];
}

export const BillBoardClient: React.FC<BillBoardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex flex-col w-full space-y-5">
        <div className="flex items-center justify-between w-full ">
          <Heading
            title={`BillBoards(${data.length})`}
            description="Manage your BillBoards"
          />

          <Button
            className="ml-auto"
            onClick={() => router.push(`/${params.storeId}/billBoards/new`)}
          >
            <Plus className="h-4 w-4 mr-2 " />
            Add New
          </Button>
        </div>
        <div className="block w-full">
          <Separator />
        </div>
        <DataTable searchKey="label" columns={columns} data={data} />
        <Heading title="API" description="API calls for BillBoards"/>
        <Separator/>
        <ApiList entityName="BillBoards" entityIdName="BillBoardId"/>

      </div>
    </>
  );
};
