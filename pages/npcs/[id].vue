<script setup lang="ts">
import { NpcResponse } from 'types'

const route = useRoute()
const [id, ...rest] = route.params.id.toString().split(/-(.*)/s)
const { data } = await useFetch<NpcResponse>(`/api/npcs/${id}`)

const slugParam = rest.join('')
const npcName = data?.value?.npc?.name
const slug = slugify(npcName)
if (npcName && slugParam != slug) {
  const router = useRouter()
  router.replace(route.path.replace(route.params.id.toString(), `${id}-${slug}`))
}

useSeoMeta({
  title: () => `${npcName} - Npcs`
})
</script>
<template>
  <div v-if="data">
    {{ npcName }}
    <hr>
    <code>
      {{ data.npc }}
    </code>
  </div>
</template>
