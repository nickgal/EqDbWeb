<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div v-if="item.skillmodtype > 0 && item.skillmodvalue != 0">
    Skill Mod: {{ getSkillDescription(item.skillmodtype) }} +{{ item.skillmodvalue }} %
  </div>
</template>
