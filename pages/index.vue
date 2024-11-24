<script setup lang="ts">
import type {IProduct} from "~/types/interfaces";
import ProductCard from "~/components/ui/cards/productCard.vue";
import {api} from "~/api/apiService";

const {data, error} = api.get<IProduct>('products')
if(error.value){
  throw createError({statusCode: error.value.statusCode})
}

const categories = computed(() => {
  const uniqueCategories = new Set(data.value.map(product => product.category));
  return Array.from(uniqueCategories);
});

const selectedCategory = ref<string>('');

const filteredProducts = computed(() => {
  return selectedCategory.value 
    ? data.value.filter(product => product.category === selectedCategory.value) 
    : data.value;
});
</script>

<template>
<section v-if="data" class="catalog">
  <div class="container">
    <select v-model="selectedCategory">
      <option value="">Все категории</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>
    <div class="catalog__container">
      <ProductCard
          v-for="{title, price, description, category, image, rating, id} in filteredProducts"
          :id="id"
          :title="title"
          :price="price"
          :description="description"
          :category="category"
          :image="image"
          :rating="rating"
      />
    </div>
  </div>
</section>
</template>

<style lang="sass" scoped>
.catalog
  margin-top: 32px
  &__container
    margin-top: 12px
    display: grid
    grid-template-columns: repeat(3, minmax(100px, 1fr))
    gap: 32px
    +md-breakpoint
      grid-template-columns: repeat(2, minmax(100px, 1fr))
      +screen(682px)
        display: flex
        flex-direction: column
</style>