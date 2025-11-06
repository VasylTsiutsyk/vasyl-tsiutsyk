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
import { STATS_DATA } from '~/constants/stats-data';

import StatsCard from '~/components/general/StatsCard.vue';

const statsData = Object.values(STATS_DATA).map(({ num, label }) => ({
  value: num,
  label,
}));
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.section-stats {
  --section-py: #{fluid(80, 64)};

  &__wrap {
    padding-block: var(--section-py);
  }

  &__row {
    --col-width: 50%;
    --col-gap: 2rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: var(--col-gap);
    margin-inline: calc(var(--col-gap) / 2 * -1);

    @include respond-above(sm) {
      --col-width: 33.33%;
    }
  }

  &__col {
    flex: 0 0 var(--col-width);
    max-width: var(--col-width);
    padding-inline: calc(var(--col-gap) / 2);
  }
}
</style>
