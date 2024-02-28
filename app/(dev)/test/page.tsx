"use client"

import { useEffect, useRef } from "react"

const players = [
    {player: "Samarth S.", points: 30.8, rebounds: 5.3, assists: 4.2, steals: 2.1, blocks: 2.3},
    {player: "Kaif J.", points: 10.7, rebounds: 12.3, assists: 2.3, steals: 0.1, blocks: 0.3},
    {player: "Bhardwaj T.", points: 32.8, rebounds: 4.1, assists: 5.1, steals: 1.1, blocks: 0.9},
    {player: "Jayanth J.", points: 28.7, rebounds: 10.1, assists: 10.3, steals: 0.1, blocks: 1.9},
    {player: "Rohil K.", points: 18.5, rebounds: 3.3, assists: 3.2, steals: 0.5, blocks: 0.1},
    {player: "Harun M.", points: 5.6, rebounds: 5.5, assists: 0.1, steals: 0.2, blocks: 1.5},
]

export default function Home() {

    return (
        <div className="flex w-full h-full justify-center items-center">
        <div className="mt-10 rounded-lg text-sm ring-1 ring-gray-300 w-96 h-56 overflow-scroll no-scrollbar">
            <table className="divide-y divide-gray-300 border-spacing-0 w-full h-fit">
                <thead>
                    <tr className="font-semibold">
                        <td className={`origin text-gray-900 text-left pl-6 pr-12 py-[0.875rem] sticky top-0 left-0 z-10 bg-gray-200`}>Player</td>
                        {["Points", "Rebounds", "Assists", "Steals", "Blocks"].map((header) => (
                            <td 
                                className={`sticky top-0 bg-gray-100 border-b border-b-gray-300 text-left pl-6 pr-3 py-[0.875rem] transition-all hover:text-blue-400 hover:cursor-pointer`}
                            >
                                {header}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {players.map((player, index) => (
                        <tr>
                            {Object.keys(player).map((item, idx) => (
                                <td className={`text-gray-700 pl-6 pr-3 py-[0.875rem] text-left z-1 ${idx == 0 && "sticky left-0 bg-gray-100"}`}>{player[item]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}