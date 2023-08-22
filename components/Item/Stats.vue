<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <div>
    <ItemStat name="STR" :value="item.astr" />
    <ItemStat name="DEX" :value="item.adex" />
    <ItemStat name="STA" :value="item.asta" />
    <ItemStat name="CHA" :value="item.acha" />
    <ItemStat name="WIS" :value="item.awis" />
    <ItemStat name="INT" :value="item.aint" />
    <ItemStat name="AGI" :value="item.aagi" />
    <ItemStat name="HP" :value="item.hp" />
    <ItemStat name="MANA" :value="item.mana" />
    <ItemStat name="SV&nbsp;FIRE" :value="item.fr" />
    <ItemStat name="SV&nbsp;DISEASE" :value="item.dr" />
    <ItemStat name="SV&nbsp;COLD" :value="item.cr" />
    <ItemStat name="SV&nbsp;MAGIC" :value="item.mr" />
    <ItemStat name="SV&nbsp;POISON" :value="item.pr" :spacing="false"/>
  </div>
</template>
