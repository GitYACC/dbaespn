import {  
    Flex, 
    Text
} from "@radix-ui/themes"
import BasketballIcon from "@/app/context/svg/basketball2"
import SearchIcon from "@/app/context/svg/search"
import SunIcon from "@/app/context/svg/sun"
import { ReactNode } from "react"
import { signOut } from "next-auth/react"


interface NavLinkProps {
    className?: string,
    url?: string,
    children: ReactNode
}
function NavLink(props: NavLinkProps) {
    return (
        <a href={props.url ? props.url : "#"} className={props.className}>
            <Text size="3" className="font-semibold cursor-pointer hover:text-[#006dcbf2] transition ease-in-out text-black">
                {props.children}
            </Text>
        </a>
    )
}

interface NavbarProps {
    user: string
}

export default function Navbar(props: NavbarProps) {
    return (
        <Flex className="border-b-gray-200/50 border-b-[1px]">
            <Flex py="4" px="4" className="items-center justify-center gap-8 w-full">
                <a href="/home" className="flex items-center justify-center gap-3 group bg-[#008ff519] px-4 py-1 rounded-md transition ease-in-out hover:bg-blue-400 cursor-pointer">
                    <Text size="5" weight="bold" className="group-hover:text-white transition ease-in-out text-[#006dcbf2]">DBA</Text>
                    <BasketballIcon className="transition ease-in-out w-6 h-6 group-hover:stroke-white group-hover:fill-white fill-[#006dcbf2]"/>
                </a>
                <NavLink>Teams</NavLink>
                <NavLink url="/league">League</NavLink>
                <NavLink url="/test">Season</NavLink>
            </Flex>
            <Flex py="4" px="4" direction="row-reverse" className="w-full justify-end items-center gap-8">
                <button onClick={() => signOut({redirect: false})} className="font-md text-sm py-2 px-2 border-[1px] border-red-100 rounded-md bg-red-100/25 hover:border-red-200 hover:bg-red-100/50">Sign Out</button>
                <button className="py-2 px-2 border-[1px] border-blue-100 rounded-md bg-blue-100/25 hover:border-blue-200 hover:bg-blue-100/50">
                    <SunIcon className="w-5 h-5" />
                </button>
                <div className="flex items-center border-[1px] rounded-md bg-white">
                    <div className="px-2">
                        <SearchIcon className="w-4 h-4"/>
                    </div>
                    <input placeholder="Search" className="font-md text-sm outline-none ring-none my-2 w-[20rem]" />
                </div>
                <div>{props.user}</div>
            </Flex>
        </Flex>
    )
}