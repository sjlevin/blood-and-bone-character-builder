type Buff = {
    attribute: string
    modifier: number
}

type Trait = {
    name: string
    prerequisites?: Array<string>
    benefits?: Array<string>
    buffs?: Array<Buff>
    desperateActions?: Array<string>
    reactions?: Array<string>
    selected?: boolean
}

type ToggleSelected = (selectedTrait: Trait) => void
