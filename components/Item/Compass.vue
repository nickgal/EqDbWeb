<script setup lang='ts'>
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div v-if='item.itemtype == 40'>
    The compass points North
  </div>
</template>
