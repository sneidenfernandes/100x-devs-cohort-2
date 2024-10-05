import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function insertUser(username: string, password: string, 
    firstName: string, lastName: string, email: string
){
    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
    console.log(response);
}

async function getTodos(userId:number){
    const response = await prisma.todos.findMany({
        where:{
            userId: userId
        }
    })

    console.log(response);
}

getTodos(1);
