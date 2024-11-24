<script lang="ts" setup>
import {HeaderTabs} from "~/components/layoutComponents/header/headerTabs";
import {tabsData} from "~/components/layoutComponents/header.vue";
import {HeaderNav} from "~/components/layoutComponents/header/headerNav";
import {HeaderMenu} from "~/components/layoutComponents/header/headerMenu";

const props = defineProps<{
  burgerActive: boolean
}>()

const activeTabId = ref<number>(tabsData[0].id)
const phone = '8 (812) 702-69-50'
const chosenTab = computed(()=>{
  return tabsData.find((el)=> el.id === activeTabId.value) || tabsData[0]
})

function changeTab(id:number){
  activeTabId.value = id
}
//TODO вынести formatPhone
function formatPhone(phone: string) {
  return phone.replace(/[^0-9+]/g, '');
}

function toggleBurger(){
  emits('toggleBurger')
}

const emits = defineEmits(['toggleBurger'])
</script>

<template>
  <header class="header">
    <div class="header__top">
     <div class="container">
       <HeaderTabs
           class="header__top-tabs"
           :tabsData="tabsData"
           :activeItemId="activeTabId"
           @change-tab="changeTab"
       />
       <div class="header__top-right">
         <NuxtLink
             :to="`tel:${formatPhone(phone)}`"
             class="header__top-link header__top-link_phone"
         >
           {{phone}}
         </NuxtLink>
         <NuxtLink to="/contacts" class="header__top-link">
           Контакты
         </NuxtLink>
         <svg class="icon header__top-icon">
           <use href="~/public/assets/svg/sprite.svg#icon-chat"/>
         </svg>
         <svg class="icon header__top-icon">
           <use href="~/public/assets/svg/sprite.svg#icon-search"/>
         </svg>
       </div>
     </div>
    </div>
    <div class="header__bottom">
     <div class="container">
       <div class="header__bottom-left">
         <NuxtLink to="/public" class="header__logo">
           <picture class="header__logo-img">
             <source srcset="../../public/assets/img/common/logo.webp">
             <img
                 src="../../public/assets/img/common/logo.webp"
                 alt="Банк Береит"
             >
           </picture>
         </NuxtLink>
         <HeaderNav
             class="header__bottom-nav"
             :links="chosenTab.tabLinks"
         />
       </div>
       <div class="header__bottom-buttons">
         <NuxtLink :to="`tel:${formatPhone(phone)}`">
           <svg class="icon header__top-icon">
             <use href="~/public/assets/svg/sprite.svg#phone"/>
           </svg>
         </NuxtLink>
         <svg class="icon header__top-icon">
           <use href="~/public/assets/svg/sprite.svg#icon-search"/>
         </svg>
         <button
             class="header__burger"
             :class="{active : burgerActive}"
             @click="toggleBurger"
         >
           <span class="header__burger-line header__burger-line_top"/>
           <span class="header__burger-line header__burger-line_middle"/>
           <span class="header__burger-line header__burger-line_bottom"/>
         </button>
       </div>
     </div>
    </div>

    <HeaderMenu
        :isActive="burgerActive"
        :activeTabId="activeTabId"
        :chosenTab="chosenTab"
        :tabsData="tabsData[0]"
        @changeTab="changeTab"
        @changePage="toggleBurger"
    />
  </header>
</template>

<style lang="sass" scoped>
@import url("style.sass")
</style>