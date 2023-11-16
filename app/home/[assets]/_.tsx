import { Menu } from "@headlessui/react";
import { ReactNode, useState } from "react";

interface DropProps {
    className?: string,
    options: string[],
    children: ReactNode
}

export function Drop(props: DropProps) {
    const [selection, setSelection] = useState(["", 0])

    return (
        <Menu as="div" className={`relative flex justify-center mt-4 border-[1px] border-gray-300 rounded-md w-36 hover:text-blue-400 hover:border-gray-400 ${props.className}`}>
            <Menu.Button className="w-full py-2">{selection[0]}</Menu.Button>
            <Menu.Items 
                className={
                    `absolute flex flex-col top-0 ${
                        selection[1] as number == 0
                        ? "-translate-y-[0.5rem]"
                        : selection[1] as number == 1
                        ? "-translate-y-[3rem]"
                        : "-translate-y-[5.5rem]"
                    } border-[1px] w-40 rounded-lg overflow-hidden py-2 bg-white`}>
                {props.options.map((item, index) => (
                    <Menu.Item>
                        {/* {({active}) => (
                            <a 
                                className={`${active ? "bg-blue-400 text-white" : "bg-white text-blue-400"} py-2 mx-2 rounded-lg flex justify-center items-center hover:cursor-pointer`}
                                onClick={() => setSelection([item, index])}
                            >
                                {item}
                            </a>
                        )} */}
                        {props.children}
                    </Menu.Item>
                ))}
                
            </Menu.Items>
        </Menu>
    )
}