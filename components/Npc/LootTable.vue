<script setup lang="ts">
import { Npc } from 'drizzle/schema'

const props = defineProps<{
  npc: Npc
}>()

// TODO: need to figure out if nitro caching each item api is better than doing a items?id=x&id=y
// const itemIds = props.npc?.loottable?.loottableEntries?.flatMap((lte) => {
//   return lte.lootdropEntries.map(lde => lde.itemId )
// })

</script>
<template>
  <div v-if="npc?.loottable">
    <h3>Items dropped</h3>
    <ul v-if="npc.loottable.loottableEntries">
      <li v-for="(loottableEntry) in npc.loottable.loottableEntries">
        <ul v-if="loottableEntry">
          <li v-if="!loottableEntry.lootdropEntries.length">
            None
          </li>
          <li v-for="(lootdropEntry) in loottableEntry.lootdropEntries">
            <ItemLookupLink :itemId="lootdropEntry.itemId" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
