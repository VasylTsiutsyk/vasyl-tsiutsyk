<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__wrap">
        <div class="footer__row">
          <small class="footer__copyright">Handcrafted by me ©2024</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.footer {
  --footer-padding-y: 1.5rem;

  overflow: hidden;
  border-top: rem(1) solid var(--color-gray-blur);
  font-family: var(--font-family-source-sans-pro);

  &__wrap {
    padding: var(--footer-padding-y) 0;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(12);
  }

  &__copyright {
    display: block;
    font-size: rem(16);
    font-weight: 400;
    line-height: 1.25;
  }

  &__soc {
    display: flex;
    flex-wrap: wrap;
    gap: rem(8) rem(16);

    > li {
      > a {
        display: flex;
        align-items: center;
        gap: rem(8);
        font-size: rem(16);
        font-weight: 400;
        line-height: 1.25;
      }
    }
  }
}
</style>
