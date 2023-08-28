<script setup lang="ts">
import { Zone } from 'drizzle/schema'

const props = defineProps<{
  zone: Zone
}>()

// TODO: need to figure out if nitro caching each npc api is better than doing a npcs?id=x&id=y
// see npc loottable

</script>
<template>
  <div v-if="zone?.spawns">
    <ul v-if="zone.spawns">
      <li v-for="(spawn) in zone.spawns">
        <ul v-if="spawn">
          <li v-for="(spawnEntry) in spawn.spawnEntries">
            <NpcLookupLink :npcId="spawnEntry.npcId" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
