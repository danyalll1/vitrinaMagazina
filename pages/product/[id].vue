<script setup lang="ts">
import {api} from "~/api/apiService";
import type {IProduct} from "~/types/interfaces";
import AppButton from "~/components/ui/buttons/appButton/appButton.vue";
import { useCartStore } from "~/stores/cartStore";

const {setItemToCart} = useCartStore()
const route = useRoute()

const {data, error} = api.get<IProduct>(`products/${route.params.id}`)
if(error.value){
  throw createError({statusCode: error.value.statusCode})
}
</script>

<template>
<section class="product">
  <div class="container">
    <div v-if="data" class="product__container">
      <img
          class="product__img"
          :src="data.image"
          :alt="'Изображение ' + data.title"
      />
      <div class="product__content">
        <div>
          <h1 class=" product__content-param product__content-param_title">{{data.title}}</h1>
          <p class="product__content-param product__content-param_description">{{data.description}}</p>
          <p class="product__content-param product__content-param_price">{{data.price}}$</p>
          <p class="product__content-param product__content-param_rating">Рейтинг: {{data.rating.rate}}, Оценок: {{data.rating.count}}</p>
        </div>
        <div class="product__content-buttons">
          <AppButton @click="setItemToCart(data)" link="/cart">Купить</AppButton>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="sass" scoped>
.product

  &__title
    +text-heading1()

  &__container
    display: flex
    gap: 64px
    +md-breakpoint
      gap: 40px
      flex-direction: column

  &__img
    object-fit: contain
    object-position: center
    height: 400px

  &__content
    display: flex
    flex-direction: column
    gap: 64px
    justify-content: space-between
    &-param
      &_title
        +text-heading3()

      &_description
        margin-top: 32px

      &_price
        margin-top: 24px
        +text-body-l-strong()

      &_rating
        margin-top: 16px


</style>