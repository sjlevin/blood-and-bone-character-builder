import React, { useState } from "react"
import AllTraits from "./AllTraits.json"
import { TraitList } from "./TraitList"
import { AbilityList } from "./AbilityList"
import { TraitType } from "./enums"

function App() {
    // return <React.Fragment>{JSON.stringify(allTraits[0])}</React.Fragment>

    const [traits, setTraits] = useState<Array<Trait>>(AllTraits)
    const [selectedTraits, setSelectedTraits] = useState<Array<Trait>>([])

    const toggleSelected: ToggleSelected = (selectedTrait) => {
        const updatedTraits = traits.map((trait) => {
            if (trait === selectedTrait) {
                return { ...trait, selected: !selectedTrait.selected }
            }
            return trait
        })
        setTraits(updatedTraits)

        const updatedSelectedTraits = updatedTraits.filter((trait) => {
            return trait.selected
        })
        setSelectedTraits(updatedSelectedTraits)
    }

    return (
        <React.Fragment>
            <TraitList
                name={"All Traits"}
                traits={traits}
                toggleSelected={toggleSelected}
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
        </React.Fragment>
    )
}

export default App
