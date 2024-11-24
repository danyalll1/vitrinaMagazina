<script setup lang="ts">
import {CommonHeroSection} from '~/components/common/commonHeroSection';
import { LinksSection, BenefitsSection, BusinessSection } from "~/components/sections/index";
import OfferSection from "~/components/sections/index/offerSction/offerSection.vue";


</script>

<template>
  <CommonHeroSection  class="hero"/>
  <LinksSection class="links-section"/>
  <OfferSection class="offer-section"/>
  <BusinessSection class="business-section"/>
  <BenefitsSection class="benefits-section"/>
</template>

<style lang="sass" scoped>
.benefits-section
  margin-top: 48px

.links-section, .business-section, .offer-section
  margin-top: 60px
</style>