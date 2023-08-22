import { Faction, Item, Spell } from 'drizzle/schema';

// TODO: move response types & api calls into repositories

export interface FactionResponse {
  faction: Faction
}

export interface FactionsResponse {
  factions: Faction[]
}

export interface ItemResponse {
  item: Item
}

export interface ItemsResponse {
  items: Item[]
}

export interface NpcResponse {
  npc: Npc
}

export interface NpcsResponse {
  npcs: Npc[]
}

export interface RaceResponse {
  race: Race
}

export interface RacesResponse {
  races: Race[]
}

export interface SpellResponse {
  spell: Spell
}

export interface SpellsResponse {
  spells: Spell[]
}
