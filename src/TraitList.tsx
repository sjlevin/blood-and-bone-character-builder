import React from "react"
import { TraitListItem } from "./TraitListItem"

interface Props {
    name: string
    traits: Array<Trait>
    toggleSelected: ToggleSelected
}

export const TraitList: React.FC<Props> = ({
    name,
    traits,
    toggleSelected,
}) => {
    return (
        <>
            {name}:
            <ul>
                {traits.sort((left, right) => left.name.localeCompare(right.name)).map((trait) => (
                    <TraitListItem
                        trait={trait}
                        toggleSelected={toggleSelected}
                    />
                ))}
            </ul>
        </>
    )
}
