<script lang="ts" setup>
import { staticData } from './staticData';

</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="footer__container footer__container_top">
          <div class="footer__contacts">
            <address class="footer__contacts-address">
              <p class="footer__title">Региональный телефон</p>
              <NuxtLink href="tel:8(812)702-69-50" class="footer__link">8(812)702-69-50</NuxtLink>
            </address>
            <address class="footer__contacts-mail">
              <p class="footer__title">Почта для обращений</p>
              <NuxtLink href="mailto:mail@bereit.ru" class="footer__link">mail@bereit.ru</NuxtLink>
            </address>
          </div>
          <button type="button" class="footer__button">Написать в банк</button>
        </div>
        <hr class="footer__border" />
        <div class="footer__container footer__container_middle">
          <div class="footer__address-container">
            <address class="footer__address">
              <p class="footer__title">Адрес</p>
              <p class="footer__text">Ленинградская область, Тосненский район, Красный Бор, ул. Промышленная, д. 3, пом. II</p>
            </address>
            <div class="footer__period">
              <p class="footer__title">Режим работы</p>
              <time class="footer__text">с 9:00 до 18:00 МСК</time>
            </div>
          </div>
          <div class="footer__right">
            <div v-for="arrOfData in staticData"  class="footer__container-block">
              <div v-for="(link, index) in arrOfData" :key="`${link.title}-${index}`" class="footer__block-list">
                <NuxtLink class="footer__link footer__link_inform" :to="link.to">{{ link.title }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <hr class="footer__border" />
        <div class="footer__container footer__container_down">
          <p>&copy 2012-2024, АО «БАНК БЕРЕЙТ»</p>
          <p>Базовая лицензия на осуществление банковских операций со средствами в рублях и иностранной валюте (без
            права привлечения во вклады денежных средств физических лиц) без права на осуществление банковских операций
            с драгоценными металлами № 3505 от 16.11.2018</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@import url("./style.sass")
</style>
