<script setup lang="ts">
import { Npc } from 'drizzle/schema';

const props = defineProps<{
  npc: Npc
}>()
</script>
<template>
  <NuxtLink v-if="npc" :to="`/npcs/${npc.id}-${slugify(npc.name)}`">
    {{ npc.name }}
  </NuxtLink>
</template>
