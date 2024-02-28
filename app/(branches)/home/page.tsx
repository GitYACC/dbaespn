"use client"

import Navbar from "../assets/navbar";
import HomePage from "../assets/home";
import { useSession } from "next-auth/react";
import Login from "../login/login";
import Loading from "@/app/loading";

export default function Home() {
    const { data: session, status } = useSession()

    if(status === "loading") {
        return <Loading></Loading>
    }

    if(session) {
        return (
            <main className="flex">
                <div className="flex flex-col min-h-screen w-full">
                    <>{console.log(session)}</>
                    <Navbar user={session.user?.name}></Navbar>
                    <HomePage></HomePage>
                </div>
            </main>
        )
    }

    return (
        <Login />
    )
}