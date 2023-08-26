<script setup lang="ts">
import { ItemResponse } from 'types'

const props = defineProps<{
  itemId: number
}>()

const { data } = await useFetch<ItemResponse>(`/api/items/${props.itemId}`)

</script>
<template>
  <div v-if="data?.item">
    <ItemIcon :item="data.item" />
    <NuxtLink :to="`/items/${itemId}-${slugify(data.item.name)}`">
      {{ data.item.name }}
    </NuxtLink>
  </div>
</template>
