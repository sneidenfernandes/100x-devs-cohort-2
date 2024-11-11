import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from '../../db'


export function GET(req: NextRequest){

    return NextResponse.json({
        email: 'harkirat@gmail.com',
        name: "harkirat"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json();
    
    try{
        await prisma.user.create({
            data:{
                username: body.email,
                password: body.password
                
            }
        })

        return NextResponse.json({
            body
        })
    }
    catch(e){
        NextResponse.json({
            message: "Error while signing up"
        },{
            status:411
        })
    }
    
    

    return  NextResponse.json({
        message: "You are signed up."
    })
}