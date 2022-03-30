import { TalentData } from './talents'

enum Direction {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

interface Tracks {
  position: [number, number]
  direction: Direction
  length: number
  talents: TalentData['name'][]
}

const resourcesTracks: Tracks[] = [
  {
    position: [1,2],
    direction: Direction.vertical,
    length: 2,
    talents: ['Lumber Yield', 'Wood Breakdown']
  }
]