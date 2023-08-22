<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div v-if="item.factionmod1 || item.factionmod2 || item.factionmod3 || item.factionmod4">
    This item has a faction modifier.
  </div>
</template>
