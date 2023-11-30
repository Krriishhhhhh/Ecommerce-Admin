import prismadb from "@/lib/prismadb";

import {format} from 'date-fns'

import { BillBoardClient } from "./components/client";
import { BillBoardColumn } from "./components/columns";

const BillBoardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billBoards = await prismadb.billBoard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillBoards: BillBoardColumn[] = billBoards.map((item)=>({
    id : item.id,
    label : item.label,
    createdAt : format(item.createdAt,"MMMM do,yyyy")
  })) 

  return (
    <div className="flex-col">
      <div className="flex space-y-4 p-8 pt-6">
        <BillBoardClient data={formattedBillBoards} />
      </div>
    </div>
  );
};

export default BillBoardsPage;
