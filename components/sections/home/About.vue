<template>
  <section class="section-about">
    <div class="section-about__container container">
      <div class="section-about__wrap">
        <div class="section-about__header">
          <h2 class="section-about__title">About</h2>
        </div>

        <div class="section-about__body">
          <div class="section-about__row">
            <div class="section-about__col">
              <!-- Soft Skills -->
              <div class="section-about__group about-group">
                <h3 class="about-group__title">Soft Skills</h3>

                <div class="about-group__description">
                  <ul>
                    <li>Responsibility</li>
                    <li>Communication Skills</li>
                    <li>Quick-learning</li>
                    <li>Punctuality</li>
                    <li>Good analytical skills</li>
                    <li>Creative</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="section-about__col">
              <!-- Hard Skills -->
              <div class="section-about__group about-group">
                <h3 class="about-group__title">Hard Skills</h3>

                <div class="about-group__description">
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3, SASS/SCSS, BEM, Bootstap 4+, TailwindCSS</li>
                    <li>Native JS/ES6+</li>
                    <li>Vue 2/3, Nuxt 2/3</li>
                    <li>Gulp, Webpack, npm</li>
                    <li>Git, GitHub, GitLab</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="section-about__row">
            <div class="section-about__col">
              <!-- Languages -->
              <div class="section-about__group about-group">
                <h3 class="about-group__title">Languages</h3>

                <div class="about-group__description">
                  <ul>
                    <li>Ukrainian - Native</li>

                    <li>English - Intermediate</li>

                    <li>Russian - X</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="section-about__col">
              <!-- Academic Back -->
              <div class="section-about__group about-group">
                <h3 class="about-group__title">Academic Back</h3>

                <div class="about-group__description">
                  <ul>
                    <li><strong>LPML</strong> - sept 2012 - may 2015</li>
                    <li><strong>LPNU</strong> - Food Tech (Winemaking) - sept 2015 - dec 2020</li>
                    <li><strong>LOGOS IT Academy</strong> - sept 2019 - may 2020</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.section-about {
  --section-padding-y: 4.5rem;

  @include respond-below(md) {
    --section-padding-y: 3rem;
  }

  &__wrap {
    padding: var(--section-padding-y) 0;
  }

  &__header {
    &:not(:last-child) {
      margin-bottom: rem(48);

      @include respond-below(md) {
        margin-bottom: rem(24);
      }
    }
  }

  &__row {
    --col-width: 100%;
    --col-gap: 2rem;

    display: flex;
    flex-wrap: wrap;
    gap: var(--col-gap) 0;
    margin: 0 calc(var(--col-gap) / 2 * -1);

    @include respond-above(md) {
      --col-width: 50%;
    }

    &:not(:last-child) {
      margin-bottom: rem(32);

      @include respond-below(md) {
        margin-bottom: rem(24);
      }
    }
  }

  &__col {
    flex: 0 0 var(--col-width);
    max-width: var(--col-width);
    padding: 0 calc(var(--col-gap) / 2);
  }
}

.about-group {
  &__title {
    &:not(:last-child) {
      margin-bottom: rem(16);
    }
  }

  &__description {
    ul {
      list-style: disc outside;
      padding-left: rem(20);

      > li {
        &:not(:last-child) {
          margin-bottom: rem(8);
        }
      }
    }
  }
}
</style>
