import { Flex, Badge, Text, Theme } from "@radix-ui/themes";
import Navbar from "./[assets]/navbar";
import HomePage from "./[assets]/home";

export default function Home() {
    return (
        <main className="flex">
            <div className="flex flex-col min-h-screen w-full">
                <Navbar></Navbar>
                <HomePage></HomePage>
            </div>
        </main>
    )
}