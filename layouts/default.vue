<script setup lang="ts">
import Header from "~/components/layoutComponents/header.vue";
import Footer from "~/components/layoutComponents/footer.vue";
</script>

<template>
  <Header/>
  <main class="main">
    <slot/>
  </main>
  <Footer/>
</template>

<style lang="sass" scoped>
.main
  width: 100%
  min-height: 100vh
  padding-top: 104px
  padding-bottom: 64px
  +md-breakpoint
    padding-top: 88px
    padding-bottom: 40px

.header
  z-index: 100
  position: fixed
  top: 0
  left: 0
  width: 100%

</style>