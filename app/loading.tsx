"use client"
import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export default function Loading() {
    const [loop, setLoop] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setLoop((prev) => !prev)
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full h-full items-center justify-center">Loading...</div>
    )
}