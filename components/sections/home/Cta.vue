<template>
  <section class="section-cta">
    <div class="section-cta__container container">
      <div class="section-cta__wrap">
        <div class="section-cta__row">
          <div class="section-cta__col">
            <h2 class="section-cta__title">
              <span data-aos="fade-right">GET IN TOUCH</span>

              <small data-aos="fade-right" data-aos-delay="200">with me</small>
            </h2>
          </div>

          <div class="section-cta__col">
            <ul class="section-cta__soc soc">
              <li v-for="link in socLinks" :key="link.id">
                <a :href="link.ref" target="_blank" rel="noopener noreferrer">
                  <i class="fab" :class="link.icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const socLinks = [
  {
    id: 'telegram',
    ref: 'https://telegram.me/tsiutsyk',
    icon: 'fa-telegram',
  },
  {
    id: 'github',
    ref: 'https://github.com/VasylTsiutsyk',
    icon: 'fa-github',
  },
  {
    id: 'linkedin',
    ref: 'https://www.linkedin.com/in/vasyl-tsiutsyk-85147317b/',
    icon: 'fa-linkedin',
  },
  {
    id: 'instagram',
    ref: 'https://www.instagram.com/v_tsiutsyk/',
    icon: 'fa-instagram',
  },
];
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.section-cta {
  --section-padding-y: 6rem;

  @include respond-below(md) {
    --section-padding-y: 5rem;
  }

  @include respond-below(sm) {
    --section-padding-y: 4rem;
  }

  &__wrap {
    padding: var(--section-padding-y) 0;
  }

  &__row {
    --col-width: 100%;
    --col-gap: 2.5rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--col-gap) 0;
    margin: 0 calc(var(--col-gap) / 2 * -1);

    @include respond-above(sm) {
      --col-width: 50%;
      --col-gap: 3rem;
    }
  }

  &__col {
    flex: 0 0 var(--col-width);
    max-width: var(--col-width);
    padding: 0 calc(var(--col-gap) / 2);
  }

  &__title {
    max-width: fit-content;
    font-size: rem(91);
    line-height: 1.1;
    text-align: right;

    @include respond-below(xl) {
      font-size: rem(80);
    }

    @include respond-below(md) {
      font-size: rem(64);
    }

    span {
      text-transform: uppercase;
    }

    small {
      display: block;
      font-family: var(--font-family-primary);
      font-size: 33%;
    }
  }

  &__form {
    @include respond-above(md) {
      margin-right: auto;
      margin-left: auto;
      max-width: rem(372);
    }
  }

  &__soc {
    &.soc {
      justify-content: center;
    }
  }
}
</style>
