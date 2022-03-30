import { Direction, Tracks } from "./tracks";

export const resourcesTracks: Tracks[] = [
  {
    position: [1,2],
    direction: Direction.vertical,
    length: 2,
    from: 'Lumber Yield',
    to: 'Wood Breakdown'
  },
  {
    position: [1,6],
    direction: Direction.vertical,
    length: 7,
    from: 'Wood Breakdown'
  },
  {
    position: [1,13],
    direction: Direction.horizontal,
    length: 1,
    from: 'Wood Breakdown',
    to: "Movin' Wood"
  },
  {
    position: [1,13],
    direction: Direction.vertical,
    length: 7,
    from: 'Wood Breakdown', 
    to: 'Seasoned Logsman'
  },
  {
    position: [1,22],
    direction: Direction.vertical,
    length: 2,
    from: 'Seasoned Logsman', 
    to: 'Peerless Lumberjack'
  },
  {
    position: [5,2],
    direction: Direction.vertical,
    length: 2,
    from: 'Skilled Picker', 
    to: 'All The Good Stuff'
  },
  {
    position: [9,2],
    direction: Direction.vertical,
    length: 7,
    from: 'Rock Star'
  },
  {
    position: [8,9],
    direction: Direction.horizontal,
    length: 1,
    from: 'Rock Star', 
    to: 'Oxygen Thief'
  },
  {
    position: [9,9],
    direction: Direction.horizontal,
    length: 1,
    from: 'Rock Star', 
    to: 'Waste Not'
  },
  {
    position: [9,9],
    direction: Direction.vertical,
    length: 3,
    from: 'Rock Star', 
    to: 'Slinging Stone'
  },
  {
    position: [9,14],
    direction: Direction.vertical,
    length: 3,
    from: 'Slinging Stone'
  },
  {
    position: [8,16],
    direction: Direction.horizontal,
    length: 1,
    from: 'Slinging Stone', 
    to: 'Unburdened'
  },
  {
    position: [8,16],
    direction: Direction.horizontal,
    length: 1,
    from: 'Unburdened', 
    to: 'Lucky Strike'
  },
  {
    position: [9,16],
    direction: Direction.horizontal,
    length: 1,
    from: 'Slinging Stone', 
    to: 'Metal Miner'
  },
  {
    position: [9,16],
    direction: Direction.horizontal,
    length: 1,
    from: 'Metal Miner', 
    to: 'Lucky Strike'
  },
  {
    position: [13,2],
    direction: Direction.vertical,
    length: 3,
    from: 'Dense Packing I', 
  },
  {
    position: [12,5],
    direction: Direction.horizontal,
    length: 1,
    from: 'Dense Packing I', 
    to: 'Carry On'
  },
  {
    position: [13,5],
    direction: Direction.vertical,
    length: 4,
    from: 'Dense Packing I', 
    to: 'Exotic Power'
  },
  {
    position: [13,9],
    direction: Direction.horizontal,
    length: 1,
    from: 'Dense Packing I', 
    to: 'Exotic Power'
  },
  {
    position: [13,9],
    direction: Direction.vertical,
    length: 3,
    from: 'Dense Packing I', 
    to: 'Dense Packing II'
  },
  {
    position: [14,10],
    direction: Direction.horizontal,
    length: 1,
    from: 'Dense Packing II', 
    to: 'Exotic Sprinter'
  },
  {
    position: [15,10],
    direction: Direction.vertical,
    length: 3,
    from: 'Dense Packing II', 
    to: 'Exotic Sprinter'
  },
]