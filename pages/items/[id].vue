<script setup lang="ts">
import { ItemResponse } from 'types'

const route = useRoute()
const [id, ...rest] = route.params.id.toString().split(/-(.*)/s)
const { data } = await useFetch<ItemResponse>(`/api/items/${id}`)

const slugParam = rest.join('')
const itemName = data?.value?.item?.name
const slug = slugify(itemName)
if (itemName && slugParam != slug) {
  const router = useRouter()
  router.replace(route.path.replace(route.params.id.toString(), `${id}-${slug}`))
}

defineOgImageScreenshot({
  selector: '.item-details'
})

useSeoMeta({
  title: () => `${itemName} - Items`
})
</script>
<template>
  <div v-if="data">
    <ItemDetails :item="data.item" class="item-details"/>
    <hr>
      <dl>
        <template v-if="data.item.color > 0">
          <dt>Tint</dt>
          <dd :style="`background-color: #${data.item.color.toString(16)}`">
            #{{ data.item.color.toString(16) }}
          </dd>
        </template>
        <dt>Lore</dt>
        <dd>
          {{ data.item.lore }}
        </dd>
      </dl>
    <hr>
    <code>
      {{ data.item }}
    </code>
  </div>
</template>
