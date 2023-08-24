<script setup lang="ts">
import { Item } from 'drizzle/schema'

defineProps<{
  item: Item
}>()
</script>
<template>
  <span class="equipment-3d">
    <equipment-3d :filename="item.idfile"></equipment-3d>
  </span>
</template>
<style>
.equipment-3d {
  position: absolute;
  top: 150px;
  left: 450px;
}
</style>
