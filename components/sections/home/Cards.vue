<template>
  <section class="section-cards">
    <div class="section-cards__container container">
      <div class="section-cards__wrap">
        <div v-if="title" class="section-cards__header">
          <h2 class="section-cards__title">{{ title }}</h2>
        </div>

        <ul class="section-cards__grid">
          <li v-for="project in projects" :key="project.id" data-aos="fade-in" class="section-cards__grid-item">
            <ProjectCard :project="project" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '~/components/general/ProjectCard.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.section-cards {
  --section-padding-y: 4rem;

  @include respond-below(md) {
    --section-padding-y: 3rem;
  }

  &__wrap {
    padding: var(--section-padding-y) 0;
  }

  &__header {
    &:not(:last-child) {
      margin-bottom: rem(32);

      @include respond-below(md) {
        margin-bottom: rem(24);
      }
    }
  }

  &__grid {
    --col-width: 33.33%;
    --col-gap: 1rem;

    display: flex;
    flex-wrap: wrap;
    gap: var(--col-gap) 0;
    margin: 0 calc(var(--col-gap) / 2 * -1);

    @include respond-below(md) {
      --col-width: 50%;
      --col-gap: 0.75rem;
    }

    @include respond-below(s-sm) {
      --col-width: 100%;
    }

    > li {
      flex: 0 0 var(--col-width);
      max-width: var(--col-width);
      padding: 0 calc(var(--col-gap) / 2);
    }
  }
}
</style>
