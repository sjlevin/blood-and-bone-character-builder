type Trait = {
    name: string
    prerequisites?: Array<string>
    benefits?: Array<string>
    desperateActions?: Array<string>
    reactions?: Array<string>
    selected?: boolean
}

type ToggleSelected = (selectedTrait: Trait) => void
