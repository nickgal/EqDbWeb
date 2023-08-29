<script setup lang="ts">
import { ItemResponse } from 'types'

const props = defineProps<{
  itemId: number
}>()

const { data } = await useFetch<ItemResponse>(`/api/items/${props.itemId}`)
</script>
<template>
  <ItemLink v-if="data?.item" :item="data.item" />
</template>
