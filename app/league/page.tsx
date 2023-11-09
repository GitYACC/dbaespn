import Navbar from "../home/[assets]/navbar";
import Players from "./[assets]/players";

export default function Home() {
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