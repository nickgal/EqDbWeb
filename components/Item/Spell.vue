<script setup lang="ts">
import { Item } from 'drizzle/schema'
import { SpellResponse } from 'types';

const props = defineProps<{
  item: Item
}>()

const spellId = props.item.scrolleffect
const hasSpell = spellId > 0 && props.item.itemtype == 20

const { data } = await useFetch<SpellResponse>(`/api/spells/${spellId}`, {
  immediate: hasSpell
})
const spellName = data?.value?.spell?.name
</script>
<template>
  <div v-if="hasSpell && data">
    Skill: {{ getSkillDescription(data.spell.skill) }}
    <br />
    Mana Cost: {{ data.spell.mana }}
    <br />
    Effect:
    <NuxtLink :to="`/spells/${data.spell.id}-${slugify(spellName)}`">
      {{ data.spell.name }}
    </NuxtLink>
  </div>
</template>
