<script setup lang="ts">
import { Npc } from 'drizzle/schema'

const props = defineProps<{
  npc: Npc
}>()

// TODO: need to figure out if nitro caching each item api is better than doing a items?id=x&id=y
// see loot table

</script>
<template>
  <div v-if="npc?.merchantlists?.length">
    <h3>Items sold</h3>
    <ul>
      <li v-for="(merchantlist) in npc.merchantlists">
        <ItemLookupLink :itemId="merchantlist.item" />
      </li>
    </ul>
  </div>
</template>
