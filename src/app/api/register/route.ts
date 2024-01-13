import UserModel from "@/db/models/user";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request){
    try {
        const body = await request.json();
        // console.log(body, "<---");
        
        await UserModel.createUser(body);
    
        return Response.json({
            data: 'success'
        },{
            status: 201
        })
    } catch (error) {
        // console.log(error);
        if(error instanceof ZodError){
            if(error.issues[0].code === 'too_small'){     
                return Response.json({
                    error: "Password must containt at least 5 characters"
                },{
                    status: 401
                })
            }
            return Response.json({
                error: error.issues[0].message
            },{
                status: 401
            })
        }
        return Response.json({
            error: "Internal server error"
        },{
            status: 500
        })
    }
}