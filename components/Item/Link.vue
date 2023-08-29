<script setup lang="ts">
import { Item } from 'drizzle/schema';

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <NuxtLink :to="`/items/${item.id}-${slugify(item.name)}`">
    <ItemIcon :item="item" />
    {{ item.name }}
  </NuxtLink>
</template>
