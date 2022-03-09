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

export const talents = [
  {
    name: "Lumber Yield",
    description: "Increased wood from felling",
    rank: 1,
    prerequisites: [],
    benefits: ["+5 Yield from Felling Trees", "+10% Yield from Felling Trees", "+20% Yield from Felling Trees"],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "Skilled Picker",
    description: "Increased yield from harvesting by hand",
    rank: 1,
    prerequisites: [],
    benefits: ["+5% Yield from Foraging","+10% Yield from Foraging","+15% Yield from Foraging","+20% Yield from Foraging",],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "Rock Star",
    description: "Increased stone from mining",
    rank: 1,
    prerequisites: [],
    benefits: ["+10% Yield from Mining Stone","+15% Yield from Mining Stone","+20% Yield from Mining Stone"],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "Dense Packing I",
    description: "Increased inventory weight capacity",
    rank: 1,
    prerequisites: [],
    benefits: ["+5% Weight Capacity","+10% Weight Capacity","+20% Weight Capacity", ],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "Carry On",
    description: "Reduced encumberance penalty",
    rank: 1,
    prerequisites: ["Dense Packing I"],
    benefits: ["-3% Over-Encumberance Penalty","-8% Over-Encumberance Penalty","-15% Over-Encumberance Penalty","-25% Over-Encumberance Penalty",],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "Wood Breakdown",
    description: "Unlocks the ability to turn wood into sticks",
    rank: 2,
    prerequisites: ["Lumber Yield"],
    benefits: ["Ability to turn wood into sticks"],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "All The Good Stuff",
    description: "Receive secondary resources from bushes",
    rank: 2,
    prerequisites: ["Skilled Picker"],
    benefits: ["10% chance to find additional Resources in Plants","20% chance to find additional Resources in Plants","30% chance to find additional Resources in Plants",],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "Oxygen Thief",
    description: "Increase yield from oxite nodes",
    rank: 2,
    prerequisites: ["Rock Star"],
    benefits: ["+10% Yield from Mining Oxite","+20% Yield from Mining Oxite","+30% Yield from Mining Oxite",],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "Waste Not",
    description: "Receive stone in addition to resources when mining ore deposits",
    rank: 2,
    prerequisites: ["Rock Star"],
    benefits: ["5% chance to find additional Resources while Mining","8% chance to find additional Resources while Mining","10% chance to find additional Resources while Mining",],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },
  {
    name: "Exotic Power",
    description: "Reduces exotics weight in your inventory",
    rank: 2,
    prerequisites: ["Dense Packing I"],
    benefits: ["-5% Carry Weight of Exotics","-10% Carry Weight of Exotics","-15% Carry Weight of Exotics","-25% Carry Weight of Exotics",],
    tree: Trees.Survival,
    subTree: SubTrees.Resources
  },]