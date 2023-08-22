<script setup lang='ts'>
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()

function getFoodDescription(item: Item)
{
    if (item.casttime < 6)
      return 'This is a snack.'

    if (item.casttime < 21)
      return 'This is a meal.'

    if (item.casttime < 31)
      return 'This is a hearty meal.'

    if (item.casttime < 41)
      return 'This is a banquet size meal.'

    if (item.casttime < 51)
      return 'This meal is a feast!'

    if (item.casttime < 61)
      return 'This is an enduring meal!'

    return 'This is a miraculous meal!'
}

function getDrinkDescription(item: Item)
{
    if (item.casttime < 6)
        return 'This is a whistle wetter.'

    if (item.casttime < 21)
        return 'This is a drink.'

    if (item.casttime < 31)
        return 'This is a refreshing drink.'

    if (item.casttime < 41)
        return 'This is a lasting drink.'

    if (item.casttime < 51)
        return 'This is a flowing drink!'

    if (item.casttime < 61)
        return 'This is an enduring drink!'

    return 'This is a miraculous drink!'
}

function getFoodDrinkDescription(item: Item) {
  switch (item.itemtype) {
    case 14:
      return getFoodDescription(item)
    case 15:
      return getDrinkDescription(item)
  }

  return null
}

const foodDrinkDescription = getFoodDrinkDescription(props.item)
</script>
<template>
  <div v-if='foodDrinkDescription'>
    {{ foodDrinkDescription }}
  </div>
</template>
