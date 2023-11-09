"use client"

import { Flex, Strong } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const players = [
    {player: "Samarth S.", points: 30.8, rebounds: 5.3, assists: 4.2, steals: 2.1, blocks: 2.3},
    {player: "Kaif J.", points: 10.7, rebounds: 12.3, assists: 2.3, steals: 0.1, blocks: 0.3},
    {player: "Bhardwaj T.", points: 32.8, rebounds: 4.1, assists: 5.1, steals: 1.1, blocks: 0.9},
]

function sortByFilter(header: string) {
    switch(header) {
        case "Points": 
            players.sort((a, b) => (b.points - a.points))
            break
        case "Rebounds": 
            players.sort((a, b) => (b.rebounds - a.rebounds))
            break
        case "Assists": 
            players.sort((a, b) => (b.assists - a.assists))
            break
        case "Steals": 
            players.sort((a, b) => (b.steals - a.steals))
            break
        case "Blocks": 
            players.sort((a, b) => (b.blocks - a.blocks))
            break
    }
}

export default function HomePage() {
    const [filter, setFilter] = useState("None")

    useEffect(() => {
        players.sort((a, b) => b.points - a.points)
    }, [])

    return (
        <div className="flex h-full justify-center items-center">
            <div className="flex justify-center items-start h-fit mx-10 mt-10 w-[70rem] gap-5">
                <Flex direction="column" className="w-2/3 bg-white rounded-lg h-full border-[1px] px-6 py-10">
                    <div>
                        <div className="text-gray-900 font-semibold text-base">League Leaders</div>
                        <div className="text-gray-700 text-sm mt-2">League leaders are listed as <Strong>Top 5</Strong> in their respective categories</div>
                    </div>
                    <div className="flex mt-10 rounded-lg text-sm ring-1 ring-gray-300 w-full">
                        <table className="divide-y divide-gray-300 border-collapse w-full">
                            <thead className="font-semibold">
                                <tr>
                                    <td className="text-gray-900 text-left pl-6 pr-12 py-[0.875rem]">Player</td>
                                    {["Points", "Rebounds", "Assists", "Steals", "Blocks"].map((header) => (
                                        <td 
                                            className={`text-gray-900 text-left pl-6 pr-3 py-[0.875rem] transition-all ease-in-out hover:text-blue-400 hover:cursor-pointer ${filter == header && "text-blue-400"}`}
                                            onClick={(e) => {
                                                setFilter(header)
                                                sortByFilter(header)
                                            }}
                                        >
                                            {header}
                                        </td>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {players.map((player) => (
                                    <tr>
                                        {Object.keys(player).map((item) => (
                                            <td className="text-gray-700 pl-6 pr-3 py-[0.875rem] text-left">{player[item]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Flex>
                <Flex direction="column" className="w-1/3 bg-white border-[1px] rounded-lg h-full px-4 py-2"></Flex>
            </div>
        </div>
    )
}