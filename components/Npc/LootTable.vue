<script setup lang="ts">
import { Npc } from 'drizzle/schema'

const props = defineProps<{
  npc: Npc
}>()

</script>
<template>
  <div v-if="npc?.loottable">
    {{ itemIds }}
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
