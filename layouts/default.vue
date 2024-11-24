<script setup lang="ts">


</script>

<template>
  <DefaultHeader
      :burgerActive="burgerActive"
      @toggleBurger="toggleBurger"
      class="header"
  />

  <main class="main">
    <slot/>
  </main>
  <DefaultFooter/>
</template>

<style lang="sass" scoped>
.main
  width: 100%
  min-height: 100vh
  padding-top: 124px
  +md-breakpoint
    padding-top: 64px

  &__bread-crumbs
    padding-top: 40px
    +md-breakpoint
      padding-top: 20px

.header
  z-index: 100
  position: fixed
  top: 0
  left: 0
  width: 100%

.modalAnker
  position: fixed
  z-index: 2000

</style>