<script setup lang="ts">
import { Item } from 'drizzle/schema'
import { SpellResponse } from 'types';

const props = defineProps<{
  item: Item
}>()

const spellId = props.item.focuseffect
const hasFocus = spellId > 0

const { data } = await useFetch<SpellResponse>(`/api/spells/${spellId}`, {
  immediate: hasFocus
})
const spellName = data?.value?.spell?.name
// TODO: figure out if (Worn) can be dynamic
</script>
<template>
  <div v-if="hasFocus && data?.spell">
    Focus Effect:
    <NuxtLink :to="`/spells/${spellId}-${slugify(spellName)}`">
      {{ data.spell.name }}
    </NuxtLink>
    (Worn)
  </div>
</template>
