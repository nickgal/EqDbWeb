<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()

const isMagic = props.item.magic

let lore = props.item.lore
const isLore = lore.startsWith('*')
const isPendingLore = !isLore && lore.startsWith('~')
if (isLore || isPendingLore) {
  lore = lore.substring(1)
}
const isArtifact = lore.startsWith('#')
const isSummoned = lore.startsWith('~')

const isNoDrop = props.item.nodrop == 0
const isNoRent = props.item.norent == 0
</script>
<template>
  <div>
    <template v-if="isMagic">MAGIC ITEM </template>
    <template v-if="isLore">LORE ITEM </template>
    <template v-if="isPendingLore">PENDING LORE </template>
    <template v-if="isArtifact">ARTIFACT </template>
    <template v-if="isSummoned">SUMMONED </template>
    <template v-if="isNoDrop">NO DROP </template>
    <template v-if="isNoRent">NO RENT </template>
  </div>
</template>
