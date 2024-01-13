import ProductModel from "@/db/models/product";
import { NextResponse } from "next/server";
import type { Product } from "@/types";
import Error from "next/error";
export async function GET(
    request: Request,
    {params}: {params: {slug: string}}
){
    try {
        const data = await ProductModel.getProductBySlug(params.slug);
        if(!data){
            throw ("Data not Found")
        }
        return Response.json({
            data
       }, {
        status: 200
       });
    } catch (error) {
        return Response.json({
            error
        })
    }
}