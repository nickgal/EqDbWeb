<script setup lang="ts">
import { ZoneResponse } from 'types'

const route = useRoute()
const [id, ...rest] = route.params.id.toString().split(/-(.*)/s)
const { data } = await useFetch<ZoneResponse>(`/api/zones/${id}`)

const slugParam = rest.join('')
const zoneName = data?.value?.zone?.longName
const slug = slugify(zoneName)
if (zoneName && slugParam != slug) {
  const router = useRouter()
  router.replace(route.path.replace(route.params.id.toString(), `${id}-${slug}`))
}

useSeoMeta({
  title: () => `${zoneName} - Zones`
})
</script>
<template>
  <div v-if="data">
    {{ zoneName }}
    <hr>
    <code>
      {{ data.zone }}
    </code>
  </div>
</template>
