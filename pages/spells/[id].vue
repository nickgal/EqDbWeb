<script setup lang="ts">
import { SpellResponse } from 'types';

const route = useRoute()
const [id, ...rest] = route.params.id.toString().split(/-(.*)/s)
const { data } = await useFetch<SpellResponse>(`/api/spells/${id}`)

const slugParam = rest.join('')
const spellName = data?.value?.spell?.name
const slug = slugify(spellName)
if (spellName && slugParam != slug) {
  await navigateTo({
    path: route.path.replace(route.params.id.toString(), `${id}-${slug}`),
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
