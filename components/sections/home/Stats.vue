<template>
  <section class="section-stats" aria-label="My Personal Statistics">
    <div class="section-stats__container container">
      <div class="section-stats__wrap">
        <ul class="section-stats__row">
          <li v-for="(stat, statIndex) in statsData" :key="statIndex" class="section-stats__col">
            <StatsCard :value="stat.value" :label="stat.label" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import StatsCard from '~/components/general/StatsCard.vue';

const statsData = [
  {
    value: '4+',
    label: 'years of experience',
  },
  {
    value: '100+',
    label: 'projects completed',
  },
  {
    value: '40+',
    label: 'satisfied clients',
  },
];
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.section-stats {
  --section-padding-y: 5rem;

  @include respond-below(md) {
    --section-padding-y: 4rem;
  }

  &__wrap {
    padding: var(--section-padding-y) 0;
  }

  &__row {
    --col-width: 50%;
    --col-gap: 2rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--col-gap) 0;
    margin: 0 calc(var(--col-gap) / 2 * -1);

    @include respond-above(sm) {
      --col-width: 33.33%;
    }
  }

  &__col {
    flex: 0 0 var(--col-width);
    max-width: var(--col-width);
    padding: 0 calc(var(--col-gap) / 2);
  }
}
</style>
