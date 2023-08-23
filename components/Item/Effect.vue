<script setup lang="ts">
import { Item } from 'drizzle/schema'
import { SpellResponse } from 'types';

const props = defineProps<{
  item: Item
}>()

const hasClick = props.item.clickeffect > 0
const hasProc = props.item.proceffect > 0
const hasWorn = props.item.worneffect > 0

function getSpellId(item: Item) {
  if (hasClick) {
    return item.clickeffect
  } else if (hasProc) {
    return item.proceffect
  } else if (hasWorn) {
    return item.worneffect
  }
  return 0
}
const spellId = getSpellId(props.item)
const hasSpell = spellId > 0

const { data } = await useFetch<SpellResponse>(`/api/spells/${spellId}`, {
  immediate: hasSpell
})
const spellName = data?.value?.spell?.name

function getClickTypeDescription(item: Item) {
  switch (item.clicktype)
  {
    case 0:
    case 1:
    case 2:
    case 3:
    case 5:
      return ''
    case 4:
      return 'Must Equip. '
  }
}

const castTime = props.item.casttime <= 0 ? 'Instant' : (props.item.casttime / 1000).toFixed(1)
</script>
<template>
  <div v-if="hasSpell && data?.spell">
    Effect:
    <NuxtLink :to="`/spells/${spellId}-${slugify(spellName)}`">
      {{ data.spell.name }}
    </NuxtLink>
    <span v-if="hasClick" :title="`Level: ${Math.max(item.clicklevel2, 1)}`">
      ({{ getClickTypeDescription(item) }}Casting Time: {{ castTime }})
    </span>
    <span v-if="hasProc" :title="`Level: ${Math.max(item.proclevel2, 1)}, Rate: ${item.procrate + 100}%`">
      (Combat)
    </span>
    <template v-if="hasWorn">
      (Worn)
    </template>
  </div>
</template>
