<script setup lang="ts">
import { NpcResponse } from 'types'

const props = defineProps<{
  npcId: number
}>()

const { data } = await useFetch<NpcResponse>(`/api/npcs/${props.npcId}`)

</script>
<template>
  <div v-if="data?.npc">
    <NuxtLink :to="`/npcs/${data.npc.id}-${slugify(data.npc.name)}`">
      {{ data.npc.name }}
    </NuxtLink>
  </div>
</template>
