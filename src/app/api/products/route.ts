import ProductModel from "@/db/models/product"
import { NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const search:string = searchParams.get('search') || "";
    // console.log(search, '<-- search');
    
    const data = await ProductModel.getAllProducts(search);
    return Response.json({
        data
   }, {
    status: 200
   });
}