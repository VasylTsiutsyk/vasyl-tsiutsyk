<template>
  <section class="section">
    <div class="section__container container">
      <div class="section__wrap">
        <div class="section__header">
          <h2 class="section__title">Projects</h2>
        </div>

        <div class="section__body">
          <div class="section__slider-wrap">
            <ClientOnly>
              <Swiper
                :modules="[Autoplay, Pagination]"
                :slides-per-view="1"
                :space-between="12"
                :speed="1600"
                :autoplay="{
                  delay: 3000,
                }"
                :loop="true"
                :breakpoints="{
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                }"
                :pagination="{
                  type: 'fraction',
                }"
              >
                <SwiperSlide v-for="project in projects" :key="project.id">
                  <ProjectCard :project="project" />
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import ProjectCard from '~/components/general/ProjectCard.vue';

const props = defineProps({
  projects: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;
</style>
