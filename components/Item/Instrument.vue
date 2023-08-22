<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()

function getItemInstrument(item: Item) {
  switch (item.bardtype)
  {
    case 23:
      return 'Wind Instruments'
    case 24:
      return 'Stringed Instruments'
    case 25:
      return 'Brass Instruments'
    case 26:
      return 'Percussion Instruments'
    case 50:
      return 'Singing'
    case 51:
      return 'All Instrument Types'
  }

  return null
}

function getItemInstrumentMod(item: Item) {
  const bardValue = item.bardvalue * 10 - 100
  if (bardValue <= 0)
    return ''

  return `+${bardValue}%`
}

const itemInstrument = getItemInstrument(props.item)
</script>
<template>
  <div v-if="itemInstrument" :title="`Modifier: ${getItemInstrumentMod(item)}`">
    {{ itemInstrument }}
  </div>
</template>
