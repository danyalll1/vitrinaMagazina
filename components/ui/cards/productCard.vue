<script setup lang="ts">
import AppButton from "~/components/ui/buttons/appButton/appButton.vue";
import { useCartStore } from "~/stores/cartStore";
import type {IProduct} from "~/types/interfaces";

const props = defineProps<IProduct>()
const {removeItemFromCart, setItemToCart} = useCartStore()
</script>

<template>
  <div class="product-card">
    <img class="product-card__img" :src="image" :alt="`Изображение ` + title">
    <div class="product-card__bottom">
      <div class="product-card__misc">
        <p class="product-card__misc-title">
          {{title}}
        </p>
        <p class="product-card__misc-price">
          {{price}}$
        </p>
      </div>
      <div class="product-card__buttons">
        <AppButton
          @click="setItemToCart({title, price, description, category, image, rating, id})"
        >
          Добавить в корзину
        </AppButton>
        <AppButton
            :link="'/product/' + id"
        >
          Подробнее
        </AppButton>
    </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.product-card
  border: solid 2px var(--bg-gray)
  border-radius: 20px
  width: 100%
  padding: 24px
  display: flex
  flex-direction: column
  justify-content: space-between
  gap: 16px
  +md-breakpoint
    padding: 20px

  &__img
    height: 300px
    object-fit: contain
    object-position: center
    width: 100%
    flex-shrink: 0
    +md-breakpoint
      height: 200px

  &__bottom
    height: 100%
    display: flex
    flex-direction: column
    gap: 12px
    justify-content: space-between
    justify-self: flex-end

  &__buttons
    display: flex
    justify-content: space-between
    gap: 12px

  &__misc
    display: flex
    flex-direction: column
    gap: 8px

    &-price
      color: var(--brand-blue)
      +text-body-l-strong()
</style>