import React from "react"
import { AbilityListItem } from "./AbilityListItem"

interface Props {
    buffs: Map<string, number>
}

export const BuffList: React.FC<Props> = ({ buffs }) => {
    return (
        <div className="outlined">
            <p className="capitalize">Buffs</p>
            {
                // Array.from(buffs, ([key, value]) => <AbilityListItem name={key} text={String(value)} />)
                Array.from(buffs).sort((left, right) => left[0].localeCompare(right[0])).map(([key, value]) => <AbilityListItem name={key} text={String(value)} />)
            }
        </div>
    )
}
