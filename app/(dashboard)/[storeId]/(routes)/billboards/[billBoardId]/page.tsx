import prismadb from "@/lib/prismadb";
import { BillBoardForm } from "./components/billBorad-form";

const BillBoardPage = async({
    params
}:{
    params : {billBoardId : string}
})=>{

    const billBoard  = await prismadb.billBoard.findUnique({
        where:{
            id : params.billBoardId
        }
    })
    
    return(
        <>
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
            <BillBoardForm initialData={billBoard} />
            </div>
        </div>
        </>
    )
}

export default BillBoardPage;