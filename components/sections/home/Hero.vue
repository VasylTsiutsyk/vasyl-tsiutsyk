<template>
  <section class="hero">
    <h1 class="sr-only">Vasyl Tsiutsyk | Frontend Developer</h1>

    <div class="hero__container container">
      <div class="hero__wrap">
        <div class="hero__row">
          <div class="hero__col">
            <h2 class="hero__title">
              <span data-aos="fade-right">Vasyl Tsiutsyk</span>

              <small data-aos="fade-right" data-aos-delay="800">Frontend Developer</small>
            </h2>
          </div>

          <div class="hero__col">
            <h3 class="hero__subtitle" data-aos="fade-left" data-aos-delay="1200">Enjoy what you do</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.hero {
  &__wrap {
    padding: rem(180) 0 rem(48);

    @include respond-below(md) {
      padding: rem(80) 0 rem(32);
    }
  }

  &__row {
    --col-width: 100%;
    --col-gap: 2rem;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: var(--col-gap) 0;
    margin: 0 calc(var(--col-gap) / 2 * -1);

    @include respond-above(sm) {
      --col-width: 50%;
    }
  }

  &__col {
    flex: 0 0 var(--col-width);
    max-width: var(--col-width);
    padding: 0 calc(var(--col-gap) / 2);
  }

  &__title {
    max-width: fit-content;
    font-size: rem(157);
    line-height: 1.05;
    text-align: right;

    @include respond-below(lg) {
      font-size: rem(124);
    }

    @include respond-below(md) {
      font-size: rem(96);
    }

    span {
      text-transform: uppercase;
    }

    small {
      display: block;
      font-family: var(--font-family-primary);
      font-size: 14.65%;
    }
  }

  &__subtitle {
    font-family: var(--font-family-primary);
    font-size: rem(38);
    font-weight: 300;
    line-height: 1.1;
    text-align: right;
    text-transform: uppercase;

    @include respond-below(lg) {
      font-size: rem(32);
    }

    @include respond-below(md) {
      font-size: rem(24);
    }

    @include respond-above(md) {
      padding-right: rem(13);
      padding-bottom: rem(28);
    }
  }
}
</style>
