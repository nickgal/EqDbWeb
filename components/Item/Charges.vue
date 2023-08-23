<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div v-if="item.maxcharges >= 0 && (item.clickeffect > 0 || item.scrolleffect > 0)">
    <template v-if="item.clicktype == 3 || item.itemtype == 21">
      EXPENDABLE
    </template>
    Charges: {{ item.maxcharges == 0 ? 'Unlimited' : item.maxcharges }}
  </div>
</template>
