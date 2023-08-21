<script setup lang="ts">
import { SpellResponse } from 'types';

const route = useRoute()
const [id, ...rest] = route.params.id.toString().split(/-(.*)/s)
const { data } = await useFetch<SpellResponse>(`/api/spells/${id}`)

const hasSlug = !!rest.join('')
const spellName = data?.value?.spell?.name
if (!hasSlug && spellName) {
  await navigateTo({
    path: `${route.path}-${slugify(spellName)}`,
    replace: true
  })
}

useSeoMeta({
  title: () => `${spellName} - Spells`
})
</script>
<template>
  <div v-if="data">
    <DetailsWindow>
      {{ data.spell.name }}
    </DetailsWindow>
    <hr />
    <code>
      {{ data.spell }}
    </code>
  </div>
</template>
