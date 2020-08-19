import React from "react"

interface Props {
    trait: Trait
    toggleSelected: ToggleSelected
}

export const TraitListItem: React.FC<Props> = ({ trait, toggleSelected }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={trait.selected}
                onClick={() => {
                    toggleSelected(trait)
                }}
            />
            {trait.name}
        </li>
    )
}
