<script setup lang="ts">

</script>

<template>
  <section class="contacts">
    <div class="container">
      <h1 class="contacts__header">Контакты</h1>
      <p class="contacts__address">Адрес: ул. Примерная, д. 1</p>
      <NuxtLink
          class="contacts__link"
          to="tel:+71234567890"
      >
        Телефон: +7 (123) 456-78-90
      </NuxtLink>
      <NuxtLink
          class="contacts__link"
          to="mailto:example@example.com"
      >
        example@example.com
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.contacts
  &__header
    +text-heading1
  &__address
    margin-top: 32px
    +text-heading3()
  &__link
    margin-top: 24px
    color: var(--brand-blue)
    +text-body-l-strong()
</style>