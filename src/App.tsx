import React, { useState } from "react"
import AllTraits from "./AllTraits.json"
import { TraitList } from "./TraitList"
import { AbilityList } from "./AbilityList"
import { TraitType } from "./enums"
import { BuffList } from "./BuffList"

function App() {
    const [traits, setTraits] = useState<Array<Trait>>(AllTraits)
    const selectedTraits = traits.filter((trait) => trait.selected)

    const toggleSelected: ToggleSelected = (selectedTrait) => {
        const updatedTraits = traits.map((trait) => {
            if (trait === selectedTrait) {
                return { ...trait, selected: !selectedTrait.selected }
            }
            return trait
        })
        setTraits(updatedTraits)
    }

    const selectedBuffs = new Map<string, number>()
    selectedTraits.map(trait => trait.buffs).forEach((buffArray) => buffArray?.forEach((buff) => selectedBuffs.set(buff.attribute, buff.modifier + (selectedBuffs.get(buff.attribute) || 0))))

    return (
        <React.Fragment>
            <p>
                Work in Progress Character Builder for{" "}
                <a href="https://www.arcana-games.com/bloodandbone">
                    Blood and Bone by Arcana Games
                </a>
            </p>
            <TraitList
                name={"All Traits"}
                traits={traits}
                toggleSelected={toggleSelected}
            />
            <BuffList
                buffs={selectedBuffs}
            />
            <AbilityList
                traits={selectedTraits}
                traitType={TraitType.Benefits}
            />
            <AbilityList
                traits={selectedTraits}
                traitType={TraitType.DesperateActions}
            />
            <AbilityList
                traits={selectedTraits}
                traitType={TraitType.Reactions}
            />
            <a href="https://github.com/sjlevin/blood-and-bone-character-builder">
                Source Code
            </a>
        </React.Fragment>
    )
}

export default App
