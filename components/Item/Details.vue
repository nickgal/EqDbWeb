<script setup lang="ts">
import { Item } from 'drizzle/schema'

const props = defineProps<{
  item: Item
}>()
</script>
<template>
  <DetailsWindow>
    <ItemIcon :item="item" />
    <ItemName :item="item" />
    <ItemProperties :item="item" />
    <ItemSlots :item="item" />
    <ItemCharges :item="item" />
    <ItemSpell :item="item" />
    <ItemWeaponStats :item="item" />
    <ItemElementalDamage :item="item" />
    <ItemBaneDamage :item="item" />
    <ItemSkillMod :item="item" />
    <ItemCompass :item="item" />
    <ItemInstrument :item="item" />
    <ItemAC :item="item" />
    <ItemFaction :item="item" />
    <ItemStats :item="item" />
    <ItemRequirements :item="item" />
    <ItemEffect :item="item" />
    <ItemFocus :item="item" />
    <ItemFoodDrink :item="item" />
    <ItemWeightSize :item="item" />
    <ItemClasses :item="item" />
    <ItemRaces :item="item" />
    <ItemDeities :item="item" />
  </DetailsWindow>
</template>
