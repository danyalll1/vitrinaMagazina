<script setup lang="ts">
defineProps<{
  link?: string
  target?:  string | '_blank'
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
      :target="target"
      :to="link"
      v-else
  >
    <slot/>
  </NuxtLink>
</template>

<style lang="sass" scoped>
.app-button
  transition: all ease 0.3s
  padding: 12px
  border-radius: 8px
  display: flex
  align-items: center
  background-color: var(--brand-blue)
  color: var(--fg-white)
  +text-body-m()
  cursor: pointer
  border: solid 2px transparent

  &:hover
    background-color: var(--fg-white)
    color: var(--brand-blue)
    border-color: var(--brand-blue)


</style>