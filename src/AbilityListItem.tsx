import React from "react"

interface Props {
    name: string
    text: string
}

export const AbilityListItem: React.FC<Props> = ({ name, text }) => {
    return (
        <li>
            <b>{name}</b>: {text}
        </li>
    )
}
