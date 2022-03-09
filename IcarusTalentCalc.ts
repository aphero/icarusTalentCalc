import { talents as talentData, Trees, SubTrees } from './talents'

interface Talents {
  name: string
  description: string
  rank: number
  prerequisites: string[]
  benefits: string[]
  tree: Trees
  subTree: SubTrees
  currentPoints: number
  totalPoints: number
  available: boolean
  spendPoint: () => void
  unspendPoint: () => void
  isAvailable: () => boolean
}

function updateAvailability() {
  for (let talent of talents) {
    talent.available = talent.isAvailable()
  }
}

class Talent implements Talents {
  name: string
  description: string
  rank: number
  prerequisites: string[]
  benefits: string[]
  tree: Trees
  subTree: SubTrees
  currentPoints: number
  totalPoints: number
  available: boolean
  constructor(v) {
    this.benefits = v.benefits
    this.currentPoints = 0
    this.totalPoints = this.benefits.length
    this.available = this.isAvailable()
  }

  spendPoint() {
    if (this.currentPoints < this.totalPoints) {
      this.currentPoints++
    }
    updateAvailability()
  }

  unspendPoint() {
    if (this.currentPoints > 0) {
      this.currentPoints--
    }
    updateAvailability()
  }

  isAvailable() {
    for (let prereq of getTalentPrerequisites(this)) {
      if (prereq.currentPoints > 0 && this.rank > 0) {
        return true
      }
    }
    return false
  }
}

function getTalentPrerequisites(talent: Talent) {
  return talents.filter(v => { return talent.prerequisites.includes(v.name)})
}

function allPrerequisitesMet(talent: Talent): boolean {
  const prereqs = getTalentPrerequisites(talent)
  const approved = prereqs.filter(v => { return v.currentPoints > 0 && talent.isAvailable()})
  return approved.length > 0
}

function getSuccessiveTalents(talent: Talent): Talent[] {
  return talents.filter(v => { return talent.prerequisites.includes(v.name)})
}

let talents: Talent[] = []
for (let data of talentData) {
  talents.push(new Talent(data))
}
console.log(talents[0])
talents[0].spendPoint()
console.log(talents[0])

/*
  Display:
  Talent.pointsSpent
  Spending a point:
  - rank met
  - prerequisites have one or more spent points 

  Left-Click Talent:

*/

"Each talent invested fills 1/4th of the progress bar towards another rank."
