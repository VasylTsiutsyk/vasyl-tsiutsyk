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
                <a :href="link.ref" target="_blank" rel="noopener noreferrer" :aria-label="link.label">
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
    label: 'Go to Telegram',
  },
  {
    id: 'github',
    ref: 'https://github.com/VasylTsiutsyk',
    icon: 'fa-github',
    label: 'Go to Github',
  },
  {
    id: 'linkedin',
    ref: 'https://www.linkedin.com/in/vasyl-tsiutsyk-85147317b/',
    icon: 'fa-linkedin',
    label: 'Go to Linkedin Profile',
  },
  {
    id: 'instagram',
    ref: 'https://www.instagram.com/v_tsiutsyk/',
    icon: 'fa-instagram',
    label: 'Go to Instagram',
  },
];
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.section-cta {
  --section-py: #{fluid(96, 64)};

  &__wrap {
    padding-block: var(--section-py);
  }

  &__row {
    --col-width: 100%;
    --col-gap: 2.5rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: var(--col-gap);
    margin-inline: calc(var(--col-gap) / 2 * -1);

    @include respond-above(sm) {
      --col-width: 50%;
      --col-gap: 3rem;
    }
  }

  &__col {
    flex: 0 0 var(--col-width);
    max-width: var(--col-width);
    padding-inline: calc(var(--col-gap) / 2);
  }

  &__title {
    max-width: fit-content;
    font-size: fluid(91, 64);
    line-height: 1.1;
    text-align: right;

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
