import { TalentData } from "../talents/talents"

export enum Direction {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export interface Tracks {
  position: [number, number]
  direction: Direction
  length: number
  from: TalentData['name']
  to?: TalentData['name']
}
  