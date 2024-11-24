<script lang="ts" setup>


import AppButton from "~/components/ui/buttons/appButton/appButton.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <AppButton link="/" >Каталог</AppButton>
        <AppButton link="/contacts" >Контакты</AppButton>
        <AppButton link="/cart" >Корзина</AppButton>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  background-color: var(--hover-buttonSecondary)

  &__container
    display: flex
    gap: 16px
    padding: 24px 0
    +md-breakpoint
      padding: 16px 0
</style>
