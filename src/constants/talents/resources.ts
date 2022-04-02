import { TalentData, Trees, SubTrees } from "./talents.js"

export const resourcesTalents: TalentData[] = [
  {
    name: "Lumber Yield",
    description: "Increased wood from felling",
    rank: 1,
    prerequisites: [],
    benefits: ["+5%", "+10%", "+20%"],
    benefitsDesc: "Yield from Felling Trees",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [0,0]
  },
  {
    name: "Skilled Picker",
    description: "Increased yield from harvesting by hand",
    rank: 1,
    prerequisites: [],
    benefits: ["+5%","+10%","+15%","+20%",],
    benefitsDesc: "Yield from Foraging",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [4,0]
  },
  {
    name: "Rock Star",
    description: "Increased stone from mining",
    rank: 1,
    prerequisites: [],
    benefits: ["+10%","+15%","+20%"],
    benefitsDesc: "Yield from Mining Stone",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [8,0]
  },
  {
    name: "Dense Packing I",
    description: "Increased inventory weight capacity",
    rank: 1,
    prerequisites: [],
    benefits: ["+5%","+10%","+20%"],
    benefitsDesc: "Weight Capacity",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [12,0]
  },
  {
    name: "Wood Breakdown",
    description: "Unlocks the ability to turn wood into sticks",
    rank: 2,
    prerequisites: ["Lumber Yield"],
    benefits: ["Ability to turn wood into sticks"],
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [0,4]
  },
  {
    name: "All The Good Stuff",
    description: "Receive secondary resources from bushes",
    rank: 2,
    prerequisites: ["Skilled Picker"],
    benefits: ["10%","20%","30%",],
    benefitsDesc: "chance to find additional Resources in Plants",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [4,4]
  },
  {
    name: "Carry On",
    description: "Reduced encumberance penalty",
    rank: 1,
    prerequisites: ["Dense Packing I"],
    benefits: ["-3% Over-Encumberance Penalty","-8% Over-Encumberance Penalty","-15% Over-Encumberance Penalty","-25% Over-Encumberance Penalty",],
    benefitsDesc: "Over-Encumberance Penalty",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [10,4]
  },
  {
    name: "Oxygen Thief",
    description: "Increase yield from oxite nodes",
    rank: 2,
    prerequisites: ["Rock Star"],
    benefits: ["+10%","+20%","+30%",],
    benefitsDesc: "Yield from Mining Oxite",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [6,8]
  },
  {
    name: "Waste Not",
    description: "Receive stone in addition to resources when mining ore deposits",
    rank: 2,
    prerequisites: ["Rock Star"],
    benefits: ["5%","8%","10%",],
    benefitsDesc: "chance to find additional Resources while Mining",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [10,8]
  },
  {
    name: "Exotic Power",
    description: "Reduces exotics weight in your inventory",
    rank: 2,
    prerequisites: ["Dense Packing I"],
    benefits: ["-5%","-10%","-15%","-25%",],
    benefitsDesc: "Carry Weight of Exotics",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [14,8]
  },
  {
    name: "Movin' Wood",
    description: "Decreases wood weight in your inventory",
    rank: 2,
    prerequisites: ["Wood Breakdown", "Lumber Yield"],
    benefits: ["-5%","-10%","-15%","-30%"],
    benefitsDesc: "Carry Weight of Wood",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [2,12]
  },
  {
    name: "Slinging Stone",
    description: "Decreases stone weight in your inventory",
    rank: 3,
    prerequisites: ["Rock Star"],
    benefits: ["-5%","-10%","-15%","-25%"],
    benefitsDesc: "Carry Weight of Stone",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [8,12]
  },
  {
    name: "Dense Packing II",
    description: "Increased inventory weight capacity",
    rank: 3,
    prerequisites: ["Dense Packing I"],
    benefits: ["+5%","+10%","+20%"],
    benefitsDesc: "Weight Capacity",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [12,12]
  },
  {
    name: "Unburdened",
    description: "Decreased ore weight in your inventory",
    rank: 3,
    prerequisites: ["Decreased ore weight in your inventory"],
    benefits: ["-5%","-10%","-15%","-25%"],
    benefitsDesc: "Carry Weight of Ores",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [6,16]
  },
  {
    name: "Metal Miner",
    description: "Increased yield from metal deposits",
    rank: 3,
    prerequisites: ["Rock Star", "Slinging Stone"],
    benefits: ["+10%","+15%","+20%"],
    benefitsDesc: "Yield from Mining Iron",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [10,16]
  },
  {
    name: "Exotic Sprinter",
    description: "Increased movespeed with exotics in your inventory",
    rank: 3,
    prerequisites: ["Dense Packing I","Dense Packing II"],
    benefits: ["+5%","+8%","+10%"],
    benefitsDesc: "Movement Speed while Carrying Exotics",
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [14,16]
  },
  {
    name: "Seasoned Logsman",
    description: "Chopped wood is automatically added to your inventory",
    rank: 4,
    prerequisites: ["Lumber Yield", "Wood Breakdown"],
    benefits: ["Wood is automatically gathered from chopping trees"],
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [0,20]
  },
  {
    name: "Friend of the Trees",
    description: "Reduced damage from falling trees",
    rank: 4,
    prerequisites: ["Lumber Yield", "Wood Breakdown", "Seasoned Logsman"],
    benefits: ["+50% Falling Tree Resistance"],
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [4,20]
  },
  {
    name: "Peerless Lumberjack",
    description: "Chance to instantly chop up a tree",
    rank: 4,
    prerequisites: ["Lumber Yield", "Wood Breakdown", "Seasoned Logsman"],
    benefits: ["1% chance to Instantly Fell Trees"],
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [0,24]
  },
  {
    name: "Lucky Strike",
    description: "Chance to mine a deposit in one hit",
    rank: 4,
    prerequisites: ["Rock Star", "Slinging Stone", ["Unburdened", "Metal Miner"]],
    benefits: ["poop","pee","butts"],
    tree: Trees.Survival,
    subTree: SubTrees.Resources,
    position: [8,24]
  }
]