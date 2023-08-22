import BODY_TYPES from '~/constants/body-types'
import ELEMENTAL_DAMAGE_TYPES from '~/constants/elemental-damage-types'
import EQUIPTMENT_SLOTS from '~/constants/equipment-slots'
import CHARACTER_CLASSES from '~/constants/character-classes'
import CHARACTER_DEITIES from '~/constants/character-deities'
import CHARACTER_RACES from '~/constants/character-races'
import ITEM_SIZES from '~/constants/item-sizes'
import SKILLS from '~/constants/skills'

export function getBodyTypeDescription(id: number) {
  return BODY_TYPES.find(bodyType => bodyType.id == id)?.name
}

export function getElementalDamageTypeDescription(id: number) {
  return ELEMENTAL_DAMAGE_TYPES.find(elemDmgType => elemDmgType.id == id)?.name
}

export function getItemSizeDescription(id: number) {
  return ITEM_SIZES.find(itemSize => itemSize.id == id)?.name
}

export function getSkillDescription(id: number) {
  return SKILLS.find(skill => skill.id == id)?.name
}

export function getShortClassesFromBits(classesBits: number) {
  const allMask = (1 << CHARACTER_CLASSES.length) - 1
  const classes = new Set<string>()
  if (classesBits == 0) {
    classes.add('NONE')
  } else if (classesBits >= allMask) {
    classes.add('ALL')
  } else {
    CHARACTER_CLASSES.forEach(characterClass => {
      if (classesBits & characterClass.mask) {
        classes.add(characterClass.shortName)
      }
    })
  }

  return [...classes]
}

export function getShortRacesFromBits(racesBits: number) {
  const allMask = (1 << CHARACTER_RACES.length) - 1
  const races = new Set<string>()
  if (racesBits == 0) {
    races.add('NONE')
  } else if (racesBits >= allMask) {
    races.add('ALL')
  } else {
    CHARACTER_RACES.forEach(characterRace => {
      if (racesBits & characterRace.mask) {
        races.add(characterRace.shortName)
      }
    })
  }

  return [...races]
}

export function getEquipmentSlotsFromBits(slotsBits: number) {
  const slots = new Set<string>()
  EQUIPTMENT_SLOTS.forEach(slot => {
    if (slotsBits & slot.mask) {
      slots.add(slot.name)
    }
  })

  return [...slots]
}

export function getDeitiesFromBits(deitiesBits: number) {
  const deities = new Set<string>()
  CHARACTER_DEITIES.forEach(deity => {
    if (deitiesBits & deity.mask) {
      deities.add(deity.name)
    }
  })

  return [...deities]
}

export function getItemTypeSkill (itemtype: number) {
  switch (itemtype) {
    case 0:
      return '1H Slashing'
    case 1:
      return '2H Slashing'
    case 2:
      return 'Piercing'
    case 3:
      return '1H Blunt'
    case 4:
      return '2H Blunt'
    case 5:
    case 6:
    case 17:
    case 27:
    case 28:
    case 29:
      return 'Archery'
    case 7:
    case 19:
      return 'Throwing'
    case 10:
      return 'Defense'
    case 35:
      return '2H Piercing'
  }

  return 'Hand to Hand'
}
