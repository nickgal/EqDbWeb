<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()

const itemWeight = (props.item.weight / 10).toFixed(1)
</script>
<template>
  <div>
    WT: {{ itemWeight }}
    <template v-if="item.range > 0">
      &nbsp;&nbsp;&nbsp;
      Range: {{ item.range }}
    </template>
    &nbsp;&nbsp;&nbsp;
    <template v-if="item.itemclass == 1">
      Weight Reduction: {{ item.bagwr }}%
      <br />
      Capacity: {{ item.bagslots }}
      &nbsp;&nbsp;&nbsp;
      Size Capacity: {{ getItemSizeDescription(item.bagsize) }}
    </template>
    <template v-else>
      Size: {{ getItemSizeDescription(item.size) }}
    </template>
  </div>
</template>
