<script setup lang="ts">
import { useCartStore } from "~/stores/cartStore";
import AppButton from "~/components/ui/buttons/appButton/appButton.vue";

const { getCartItems, setItemToCart,  removeItemFromCart, deleteItemFromCart} = useCartStore();

</script>

<template>
  <section class="cart">
    <div class="container">
      <ul class="cart__list" v-if=" getCartItems().length">
        <li class="cart__item" v-for="item in getCartItems()" :key="item.product.id">
          <img
              class="cart__item-img"
              :src="item.product.image"
              alt="Product Image"
          />
          <div class="cart__item-text">
            <h3 class="cart__item-title">
              {{ item.product.title }}
            </h3>
            <p>{{ item.product.description }}</p>
          </div>
          <div class="cart__item-total">
            1шт. - {{ Number(item.product.price)}}
            <br>
            {{item.quantity}}шт. -  {{ Number(item.product.price) * item.quantity }}
          </div>
          <div class="cart__item-count">
            <AppButton class="cart__button" @click="setItemToCart(item.product)">+</AppButton>
           {{ item.quantity }}
            <AppButton class="cart__button" @click="removeItemFromCart(item.product)">-</AppButton>
          </div>
          <AppButton class="cart__button cart__button_delete" @click="deleteItemFromCart(item.product.id)">Удалить</AppButton>
        </li>
      </ul>
      <div v-else>
        Тут пока что пусто
      </div>
      <AppButton v-if=" getCartItems().length">Купить</AppButton>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.cart
  &__list
    display: flex
    flex-direction: column
    gap: 32px

  &__button
    padding: 4px
    height: fit-content
    align-self: center

    &_delete
      background-color: var(--brand-red)

  &__item
    display: flex
    gap: 32px
    padding: 32px

    &-img
      object-fit: contain
      height: 100px

    &-title
      +text-heading3()

    &-count
      display: flex
      align-items: center
      gap: 16px

    &-total
      flex-shrink: 0
      display: flex
      align-items: center

    &-text
      display: flex
      flex-direction: column
      justify-content: center
</style>