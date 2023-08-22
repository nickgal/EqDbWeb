<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div v-if="item.ac != 0 && item.damage == 0">
    AC: {{ item.ac }}
  </div>
</template>
