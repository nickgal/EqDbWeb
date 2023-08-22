<script setup lang="ts">
import { Item } from 'drizzle/schema'
import { RaceResponse } from 'types';

const props = defineProps<{
  item: Item
}>()

const hasRaceBane = props.item.banedmgrace > 0
const { data: raceData } = await useFetch<RaceResponse>(`/api/races/${props.item.banedmgrace}`, {
  immediate: hasRaceBane
})

// Example of both body type & race
// https://everquest.allakhazam.com/db/item.html?item=8980
const baneDamageType = [
  getBodyTypeDescription(props.item.banedmgbody),
  raceData?.value?.race?.name,
].filter(Boolean).join(', ')
</script>
<template>
  <div v-if="item.banedmgamt != 0">
    Bane DMG: {{ baneDamageType }} {{ item.banedmgamt }}
  </div>
</template>
