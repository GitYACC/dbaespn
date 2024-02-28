"use client"

import Loading from "@/app/loading";
import Navbar from "../assets/navbar";
import Login from "../login/login";
import Players from "../assets/players";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession()

    if(status === "loading") {
        return <Loading></Loading>
    }

    if(session) {
        return (
            <main className="flex">
                <div className="flex flex-col min-h-screen w-full">
                    <Navbar></Navbar>
                    <div className="flex justify-center items-center h-full mx-10 mt-5">
                        <Players />
                    </div>
                </div>
            </main>
        )
    }

    return (
        <Login />
    )
}