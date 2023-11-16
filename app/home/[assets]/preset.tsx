import { ReactNode } from "react"

interface PresetProps {
    className?: string,
    children: ReactNode
}

export function Header(props: PresetProps) {
    return (
        <div className={`text-gray-900 font-semibold text-base ${props.className}`}>
            {props.children}
        </div>
    )
}