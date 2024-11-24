<script setup lang="ts">
defineProps<{
  link?: string
}>()
</script>

<template>
  <button
      class="app-button"
      v-if="!link"
  >
    <slot/>
  </button>
  <NuxtLink
      class="app-button"
      v-else
  >
    <slot/>
  </NuxtLink>
</template>

<style lang="sass" scoped>
.app-button
  transition: background ease 0.3s
  padding: 16px
  border-radius: 12px
  display: flex
  align-items: center
  +text-body-l-strong


</style>