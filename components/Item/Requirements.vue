<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div>
    <template v-if="item.reqlevel">
      Required level of {{ item.reqlevel }}.
    </template>
    <template v-if="item.reclevel">
      Recommended level of {{ item.reclevel }}
    </template>
    <template v-if="item.recskill">
      Recommended skill of {{ item.recskill }} {{ getItemTypeSkill(item.itemtype) }}.
    </template>
  </div>
</template>
