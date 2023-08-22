<script setup lang="ts">
import { FactionResponse } from 'types'

const route = useRoute()
const [id, ...rest] = route.params.id.toString().split(/-(.*)/s)
const { data } = await useFetch<FactionResponse>(`/api/factions/${id}`)

const slugParam = rest.join('')
const factionName = data?.value?.faction?.name
const slug = slugify(factionName)
if (factionName && slugParam != slug) {
  const router = useRouter()
  router.replace(route.path.replace(route.params.id.toString(), `${id}-${slug}`))
}

useSeoMeta({
  title: () => `${factionName} - Factions`
})
</script>
<template>
  <div v-if="data">
    {{ factionName }}
    <hr>
    <code>
      {{ data.faction }}
    </code>
  </div>
</template>
