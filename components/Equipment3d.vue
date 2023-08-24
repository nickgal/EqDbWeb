<script setup lang="ts">
const props = defineProps<{
  filename: string
}>()

typeof window !== `undefined` && import('@google/model-viewer')
const src = `https://eq-web.gitlab.io/assets/equipment/${props.filename.toLowerCase()}.glb`
</script>
<template>
  <client-only>
    <model-viewer :src="src" auto-rotate camera-controls orientation="-93deg 0 0"></model-viewer>
  </client-only>
</template>
<style scoped>
model-viewer {
  --progress-bar-color: transparent;
}
</style>
