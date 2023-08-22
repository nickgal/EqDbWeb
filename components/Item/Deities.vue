<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
const itemDeities = getDeitiesFromBits(props.item.deity)
</script>
<template>
  <div v-if="itemDeities.length">
    Deity: {{ itemDeities.join(' &nbsp;') }}
  </div>
</template>
