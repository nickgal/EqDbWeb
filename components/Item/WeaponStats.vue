<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()

// TODO: damage bonus?
// DisplayPCBonus2HDam
// https://github.com/EQMacEmu/allaclone/blob/ec09ee3dc7329b362b8ea060353b7d0b72898e67/includes/functions.php#L978-L996
</script>
<template>
  <div v-if="item.damage > 0">
    Skill: {{ getItemTypeSkill(item.itemtype) }}
    &nbsp;&nbsp;&nbsp;
    Atk Delay: {{ item.delay }}
    <br />
    DMG: {{ item.damage }}
    <template v-if="item.ac != 0">
      &nbsp;&nbsp;&nbsp;
      AC: {{ item.ac }}
    </template>
  </div>
</template>
