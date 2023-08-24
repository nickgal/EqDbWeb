<script setup lang="ts">
import { Item } from 'drizzle/schema'

const config = useRuntimeConfig();
const props = defineProps<{
  item: Item
}>()

function getIconStyles(item: Item) {
  const sheetIndexOffset = 500
  const sheetRows = 12
  const sheetColumns = 16
  const sheetSize = sheetRows * sheetColumns
  const iconSizePx = 40

  const sheetIndex = Math.trunc((item.icon - sheetIndexOffset) / (sheetSize))
  const iconId = (item.icon - sheetIndexOffset)
  const iconColumn = Math.trunc(iconId / sheetRows) % sheetColumns
  const iconRow = (iconId - (iconColumn * sheetRows)) % sheetRows

  return {
    backgroundImage: `url(${config.app.baseURL || '/'}dragitem0${sheetIndex + 1}.png)`,
    backgroundPosition: `-${iconSizePx * iconColumn}px -${iconSizePx * iconRow}px`,
    display: 'inline-block',
    height: `${iconSizePx}px`,
    width: `${iconSizePx}px`,
  }
}

const iconStyles = getIconStyles(props.item)
</script>
<template>
  <span class="item-icon" :style="iconStyles" :title="`Icon ${item.icon}`" />
</template>
