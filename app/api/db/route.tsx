import { NextResponse } from "next/server"
import prisma from "./interfaces/prisma"

export const POST = async (req: Request) => {
    let user = await prisma.users.create({
        data: {
            user: "yacc",
            name: "Samarth Shastry",
            password: "something",
            admin: true
        }
    })
    return NextResponse.json(user)
}

export const DELETE = async (req: Request) => {
    const result = await prisma.users.deleteMany({
        where: { user: "yacc" }
    })
    // so u have a phat bussy and ur mom is a hoe and you have mo friends and ur gilr is a 4 on a good day and ur breath stank and 


    return NextResponse.json(result)
}

export const GET = async (res: Response) => {
    const result = await prisma.users.findMany()

    return NextResponse.json(result)
}
