<script setup>
const props = defineProps({
  name: String,
  value: Number,
  spacing: { type: Boolean, required: false, default: true }
})
</script>
<template>
  <template v-if="value != 0">
    {{ name }}:&nbsp;{{ value > 0 ? '+' : '' }}{{ value }}
    <template v-if="spacing">
      &nbsp;&nbsp;&nbsp;
    </template>
  </template >
</template>
