import React from "react"
import { TraitType } from "./enums"
import "./AbilityList.css"
import { AbilityListItem } from "./AbilityListItem"

interface Props {
    traits: Array<Trait>
    traitType: TraitType
}

interface Ability {
    name: string
    texts: string[]
}

export const AbilityList: React.FC<Props> = ({ traits, traitType }) => {
    const abilityName = traitType.replace(/([A-Z])/g, " $1").trim()
    const filteredAbilities = traits.map((trait) => {
        let texts: Array<string>
        if(traitType === TraitType.Buffs) {
            texts = []
        } else {
            texts = trait[traitType] || []
        }
        const ability: Ability = {
            name: trait.name,
            texts: texts,
        }
        return ability
    })

    return (
        <div className="outlined">
            <p className="capitalize">{abilityName}</p>
            {filteredAbilities.map((ability) =>
                ability.texts.map((text) => (
                    <AbilityListItem name={ability.name} text={text} />
                ))
            )}
        </div>
    )
}
