export interface TalentData {
    name: string
    description: string
    rank: number
    prerequisites: (string | string[])[]
    benefits: string[]
    benefitsDesc?: string
    tree: Trees
    subTree: SubTrees
    position: [number, number]
  }
  
  export enum Trees {
    Survival = "Survival",
    Construction = "Construction",
    Combat = "Combat",
    Solo = "Solo"
  }
  
  export enum SubTrees {
    Resources = "Resources",
    Exploration = "Exploration",
    Hunting = "Hunting",
    CookingFarming = "CookingFarming",
  
    Repairing = "Repairing",
    Tools = "Tools",
    Building = "Building",
  
    BowsCrossbows = "BowsCrossbows",
    Spears = "Spears",
    Blades = "Blades",
    Firearms = "Firearms",
  
    Solo = "Solo"
  }