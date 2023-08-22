<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div v-if="item.slots > 0">
    Slot: {{ getEquipmentSlotsFromBits(item.slots).join(' ') }}
  </div>
</template>
