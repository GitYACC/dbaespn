import { Flex } from "@radix-ui/themes";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Combobox } from '@headlessui/react'
import { CheckIcon, XMark } from "./home-svg";

const players = [
    "Bhardwaj T.",
    "Samarth S.",
    "Jayanth J.",
    "Rohil K.",
    "Sai B.",
    "Kaif J.",
    "Harun M."
]

interface TaggedInputProps {
    placeholder?: string,
    overall: number,
    setOverall: Dispatch<SetStateAction<number>>,
    children: ReactNode
}

function isNumeric(value: string) {
    return /^-?\d+$/.test(value);
}

function average(array: number[]) {
    return array.reduce((p, c) => p + c, 0) / array.length
}

function TaggedInput(props: TaggedInputProps) {
    const [previous, setPrevious] = useState(50)

    return (
        <Flex direction="row" className="text-sm divide-x divide-gray-300 overflow-hidden">
            <div className="flex justify-center items-center w-[10rem] py-2 bg-gray-100">
                {props.children}
            </div>
            <input 
                className="w-full pl-3 outline-none"
                placeholder={props.placeholder}
                onKeyDown={(event) => !(isNumeric(event.key) || event.key == "Backspace") && event.preventDefault()}
                onChange={(event) => {
                    let num = 
                        Number(event.target.value) > 99 
                        ? 99 
                        : Number(event.target.value) < 50
                        ? 50
                        : Number(event.target.value)

                    props.setOverall((props.overall - previous + num))
                    setPrevious(num)
                }}
            />
        </Flex>
    )
}

export default function RatingsForm() {
    const [overall, setOverall] = useState(400)
    const [selectedPerson, setSelectedPerson] = useState(players[0])
    const [query, setQuery] = useState('')

    const filteredPlayers =
    query === ''
        ? players
        : players.filter((player) => {
            return player.toLowerCase().includes(query.toLowerCase())
        })

    return (
        <div>
            <Combobox as="div" className="relative" value={selectedPerson} onChange={setSelectedPerson}>
                <Flex direction="row" className="relative mt-2 ring-1 ring-gray-300 text-sm rounded-md overflow-hidden">
                    <div className="px-3 py-2 bg-gray-100 border-r-[1px] border-r-gray-300">
                        Player
                    </div>
                    <Combobox.Input 
                        className="flex justify-end w-full pl-3 outline-none"
                        placeholder="First Name"
                        onChange={(event) => setQuery(event.target.value)} 
                    />
                    <Flex className="justify-center items-center px-4 cursor-default">
                        <span className="text-gray-400 text-sm">{Math.trunc(overall / 8)}</span>
                    </Flex>
                </Flex>
                
                <Combobox.Options className="flex flex-col rounded-lg absolute ring-1 ring-gray-300 top-12 bg-white overflow-scroll h-[9rem] w-full">
                    {filteredPlayers.length == 0 && query != "" ? (
                        <div className="flex w-full h-full items-center justify-center">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <XMark className="w-4 h-4 stroke-red-700"></XMark>
                                <span className="font-semibold text-base text-red-700">No Player Found</span>
                            </div>
                        </div>
                    ) : (filteredPlayers.map((person) => (
                        <Combobox.Option className={({active}) => `py-[0.4rem] flex items-center ${active && "bg-blue-700 text-white cursor-pointer"}`} key={person} value={person}>
                            {({selected, active}) => (
                                <>
                                    <CheckIcon className={`w-4 h-4 ${active ? "stroke-white" : "stroke-gray-900"} mx-4 ${!selected && "invisible"}`}></CheckIcon>
                                    <div>{person}</div>
                                </>
                            )}
                        </Combobox.Option>
                    )))}
                </Combobox.Options>
            </Combobox>
            <div className="mt-10 text-gray-700 text-sm">Rank each category from 50-99</div>
            <div className="flex flex-col rounded-lg ring-1 ring-gray-300 mt-2 overflow-hidden divide-y">
                <TaggedInput overall={overall} setOverall={setOverall}>Defending</TaggedInput>
                <TaggedInput overall={overall} setOverall={setOverall}>Finishing</TaggedInput>
                <TaggedInput overall={overall} setOverall={setOverall}>IQ</TaggedInput>
                <TaggedInput overall={overall} setOverall={setOverall}>Passing</TaggedInput>
                <TaggedInput overall={overall} setOverall={setOverall}>Speed</TaggedInput>
                <TaggedInput overall={overall} setOverall={setOverall}>Rebounding</TaggedInput>
                <TaggedInput overall={overall} setOverall={setOverall}>Shooting</TaggedInput>
                <TaggedInput overall={overall} setOverall={setOverall}>Handling</TaggedInput>
            </div>
            <button className="mt-5 rounded-md w-full flex justify-center items-center text-sm font-semibold text-gray-900 ring-1 ring-gray-300 py-2 hover:text-white hover:bg-blue-700">
                Submit
            </button>
        </div>
    )
}