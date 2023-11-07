"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Combobox, Transition } from '@headlessui/react'

import { Badge, Text, Table } from '@radix-ui/themes'

function player(
    idx: number, 
    first_name: string, 
    last_name: string,
    team: string,
    position: string,
    overall: string,
    height: string,
    weight: string,
    wingspan: string,
    vertical: string,
    age: string,
    number: string,
    photo: string
) {
    return {
        index: idx,
        first_name: first_name,
        last_name: last_name,
        team: team,
        position: position,
        overall: overall,
        height: height,
        weight: weight,
        wingspan: wingspan,
        vertical: vertical,
        age: age,
        number: number,
        photo: photo
    }
}

const test = [
    player(1, "Samarth",    "Shastry",      "/logo.png",    "PG | SG",  "96",   "5'9",  "115 lbs", "5'10.5",    "26'", "19", "1",   "/portrait.png"),
    player(2, "Bhardwaj",   "Tallapragada", "/logo.png",    "PG | SG",  "99",   "5'10", "140 lbs", "5'10",      "23'", "19", "8",   "/portrait.png"),
    player(3, "Pranav",     "Garigapatti",  "/logo.png",    "PF",       "71",   "5'10", "160 lbs", "5'8",       "20'", "19", "2",   "/portrait.png"),
    player(4, "Jayanth",    "Jaisankar",    "/logo.png",    "PF | C",   "95",   "6'2",  "170 lbs", "6'2",       "23'", "19", "3",   "/portrait.png"),
    player(5, "Rohil",      "Khare",        "/logo.png",    "SF",       "95",   "5'8",  "160 lbs", "5'8",       "20'", "19", "4",   "/portrait.png"),
    player(6, "Harun",      "Momin",        "/logo.png",    "PF | C",   "78",   "6'4",  "165 lbs", "6'8",       "18'", "19", "5",   "/portrait.png"),
    player(7, "Sai",        "Balakumar",    "/logo.png",    "PF",       "87",   "5'9",  "210 lbs", "5'9",       "18'", "19", "7",   "/portrait.png"),
    player(8, "Kaif",       "Jeelani",      "/logo.png",    "PF | C",   "83",   "5'11", "170 lbs", "5'8",       "20'", "19", "6",   "/portrait.png"),
    player(9, "Keenan",     "Kalra",        "/logo.png",    "SG",       "61",   "5'7",  "130 lbs", "5'6",       "20'", "19", "9",   "/portrait.png"),
    player(10, "Srijan",    "Kagitam",      "/logo.png",    "SG",       "88",   "5'10", "140 lbs", "5'10",      "26'", "19", "10",  "/portrait.png"),
    player(11, "Tanish",    "Baranwal",     "/logo.png",    "PF",       "95",   "6'2",  "160 lbs", "6'2",       "23'", "19", "30",  "/portrait.png"),
    player(12, "Shaan",     "Berar",        "/logo.png",    "PF | C",   "90",   "6'3",  "200 lbs", "6'3",       "18'", "19", "11",  "/portrait.png"),
    player(13, "Sunaad",    "Shastry",      "/logo.png",    "SG",       "80",   "5'10", "125 lbs", "5'9",       "24'", "19", "12",  "/portrait.png"),
    player(14, "Pavan",     "Unknown",      "/logo.png",    "SG",       "71",   "5'8",  "115 lbs", "5'8",       "22'", "19", "13",  "/portrait.png"),
    player(15, "Ranjit",    "Unknown",      "/logo.png",    "C",        "99",   "6'4",  "200 lbs", "6'4",       "20'", "19", "14",  "/portrait.png"),
    player(16, "Sam",       "Unknown",      "/logo.png",    "SF",       "91",   "5'8",  "140 lbs", "5'8",       "26'", "19", "15",  "/portrait.png")
]

export default function Players() {
    const [selectedItem, setSelectedItem] = useState(test[0])
    const [query, setQuery] = useState('')

    const [activeCommand, setActiveCommand] = useState(test[0])

    const filteredItems =
      query === ''
        ? test
        : test.filter((item) => 
            (item.first_name + " " + item.last_name)
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    
    return (
        <Combobox className="bg-white divide-y rounded-lg shadow-md border-[1px] w-[70rem]" as="div" value={selectedItem} onChange={setSelectedItem}>
            {activeCommand != undefined ? (
            <div className='flex flex-col-reverse divide-y-reverse divide-y'>
                <Combobox.Options static className="overflow-scroll no-scrollbar h-[25rem] py-1 bg-white mt-2">
                    <>{query.length != 0 && filteredItems.length == 0 && setActiveCommand(undefined)}</>
                    {query.length == 0 ? (
                        test.map((item) => (
                            <Combobox.Option
                                className="mx-4"
                                key={item.index}
                                value={item.first_name}
                            >
                                {({selected, active}) => (
                                    <div className="flex">
                                        <div className={`bg-white w-1/4 group flex gap-4 items-center ${activeCommand.index == item.index && "bg-blue-600 text-white"} hover:bg-blue-600 p-2 rounded-lg w-full`}>
                                            <>{active && setActiveCommand(item)}</>
                                            <span className={`text-sm text-slate-900 group-hover:text-white ${activeCommand.index == item.index && "text-white"}`}>{item.first_name + " " + item.last_name}</span>
                                        </div>
                                    </div>
                                )}
                            </Combobox.Option>
                        ))
                    ) : (
                        filteredItems.map((item) => (
                            <Combobox.Option
                                className="mx-4"
                                key={item.index}
                                value={item.first_name}
                            >
                                {({selected, active}) => (
                                    <div className={`group flex w-fit gap-4 items-center ${activeCommand.index == item.index && "bg-blue-600 text-white"} hover:bg-blue-600 p-2 rounded-lg w-full`}>
                                        <>{active && setActiveCommand(item)}</>
                                        <span className={`text-sm text-slate-900 group-hover:text-white ${activeCommand.index == item.index && "text-white"}`}>{item.first_name + " " + item.last_name}</span>
                                    </div>
                                )}
                            </Combobox.Option>
                        ))
                    )}
                </Combobox.Options>
                <div className='flex w-full mt-5 gap-5'>
                    <div className='flex flex-col h-[10rem] w-[13rem] ml-5'>
                        <div className="relative flex w-full h-full justify-center items-end overflow-hidden">
                            <Badge className="absolute bottom-2 right-2 z-10" size="2" color="indigo" variant="solid">#{activeCommand.number}</Badge>
                            <Image src={activeCommand.photo} alt="PFP" width={1080} height={1080} className="h-full w-full rounded-lg z-[4]" />
                            <div className="absolute -right-20 border-[1px] -skew-y-[60deg] top-0 w-56 h-[25rem] opacity-50 shadow-2xl bg-white z-[4]"></div>
                            <div className="absolute right-16 border-[1px] -skew-y-[60deg] -top-1 w-28 h-[25rem] shadow-lg"></div>
                            <div className="absolute -left-10 border-[1px] -skew-y-[60deg] -top-16 w-28 h-[10rem] shadow-lg z-[4] bg-white"></div>
                            <Image src={activeCommand.team} alt="logo" width={1080} height={1080} className="absolute h-fit w-fit opacity-40 -left-10 -top-10 z-[1]"/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-1/3'>
                        <div className='flex flex-col divide-y gap-2'>
                            <div className="flex gap-10">
                                <div>
                                    <div className="flex gap-2">
                                        <Badge color="indigo" variant="soft">{activeCommand.position}</Badge>
                                        <Text className="font-semibold" color="bronze">{activeCommand.first_name}</Text>
                                    </div>
                                    <p className="text-2xl tracking-[-0.048rem] font-semibold">{activeCommand.last_name}</p>
                                </div>
                                <a href="#" className="group flex items-center justify-center">
                                    <Badge className="flex flex-col justify-center items-center border-[1px] border-blue-600/50 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:cursor-pointer">
                                        <div>OVR</div>
                                        <div>{activeCommand.overall}</div>
                                    </Badge>
                                </a>
                            </div>
                            <div className="flex pt-2 gap-2">
                                <div className="flex flex-col">
                                    <div className="flex gap-2">
                                        <div className="w-20 font-semibold">Height</div>
                                        <div className="w-24">{activeCommand.height}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-20 font-semibold">Weight</div>
                                        <div className="w-24">{activeCommand.weight}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-20 font-semibold">Wingspan</div>
                                        <div className="w-24">{activeCommand.wingspan}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-2">
                                        <div className="w-20 font-semibold">Vertical</div>
                                        <div className="w-24">{activeCommand.vertical}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-20 font-semibold">Age</div>
                                        <div className="w-24">{activeCommand.age}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[40%]">
                        <div className="flex flex-col overflow-hidden border-[1px] rounded-lg divide-y">
                            <div className="flex items-center justify-center bg-[#fdb927] font-bold">2023 Season Stats</div>
                            <div className="flex gap-7 px-6 py-2">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-xs text-gray-400">PTS</div>
                                    <div className="font-bold text-2xl">33.8</div>
                                    <div className="text-xs text-gray-400">1st</div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-xs text-gray-400">REB</div>
                                    <div className="font-bold text-2xl">10.2</div>
                                    <div className="text-xs text-gray-400">2nd</div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-xs text-gray-400">AST</div>
                                    <div className="font-bold text-2xl">11.1</div>
                                    <div className="text-xs text-gray-400">2nd</div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-xs text-gray-400">FG%</div>
                                    <div className="font-bold text-2xl">52.5%</div>
                                    <div className="text-xs text-gray-400">1st</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : (
                <Combobox.Options static className="flex w-full justify-center items-center h-[12rem]">
                    <Combobox.Option className={"flex flex-col gap-4 justify-center items-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-slate-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <span className="font-bold">No player found</span>
                            <span className="text-gray-500">There is not a player with this name in the database</span>
                        </div>
                    </Combobox.Option>
                </Combobox.Options>
            )}
            <div className="flex flex-row w-full p-3 gap-3 bg-white items-center rounded-b-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <Combobox.Input 
                    className="!outline-none w-full"
                    placeholder='Search...'
                    onChange={(event) => {
                        setQuery(event.target.value)
                        setActiveCommand(test[0])
                    }} 
                />
            </div>
        </Combobox>
    )
}