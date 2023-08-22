<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div v-if="item.elemdmgamt != 0">
    {{ getElementalDamageTypeDescription(item.elemdmgtype) }}
    DMG: {{ item.elemdmgamt }}
  </div>
</template>
