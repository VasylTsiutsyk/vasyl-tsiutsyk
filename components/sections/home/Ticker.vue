<template>
  <section class="section-texts">
    <div class="section-texts__container">
      <div class="section-texts__wrap">
        <div class="section-texts__slider-wrap">
          <ClientOnly>
            <Swiper
              ref="containerRef"
              class="swiper-texts"
              :modules="[Autoplay]"
              :slides-per-view="2.5"
              :space-between="8"
              :speed="4000"
              :autoplay="{ delay: 0 }"
              :loop="true"
              :breakpoints="{
                992: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 7,
                },
              }"
            >
              <SwiperSlide v-for="(word, wordIndex) in words" :key="wordIndex">
                <div>
                  {{ word }}
                </div>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const props = defineProps({
  words: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.section-texts {
  &__wrap {
    padding: rem(24) 0;
  }
}
</style>
