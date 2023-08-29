<script setup lang="ts">
import { NpcResponse } from 'types'

const props = defineProps<{
  npcId: number
}>()

const { data } = await useFetch<NpcResponse>(`/api/npcs/${props.npcId}`)
</script>
<template>
  <NpcLink v-if="data?.npc" :npc="data.npc" />
</template>
