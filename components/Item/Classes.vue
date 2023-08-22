<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div v-if="item.itemclass == 0">
    Class: {{ getShortClassesFromBits(item.classes).join(' ') }}
  </div>
</template>
