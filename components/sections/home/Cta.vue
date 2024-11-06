<template>
  <section class="section-cta">
    <div class="section-cta__container container">
      <div class="section-cta__wrap">
        <div class="section-cta__row">
          <div class="section-cta__col">
            <h2 class="section-cta__title">
              <span data-aos="fade-right">GET IN TOUCH</span>

              <small data-aos="fade-right" data-aos-delay="200">with us</small>
            </h2>
          </div>

          <div class="section-cta__col">
            <form action="send-email.php" method="post" class="section-cta__form cta-form">
              <div class="cta-form__row">
                <div class="cta-form__col">
                  <div class="cta-form__group">
                    <div class="cta-form__input input">
                      <input type="text" name="name" id="nameControl" placeholder="name" />
                    </div>
                  </div>
                </div>

                <div class="cta-form__col">
                  <div class="cta-form__group">
                    <div class="cta-form__input input">
                      <input type="tel" name="phone" id="phoneControl" placeholder="phone" />
                    </div>
                  </div>
                </div>

                <div class="cta-form__col cta-form__col--full">
                  <div class="cta-form__group">
                    <div class="cta-form__input input">
                      <input type="email" name="email" id="emailControl" placeholder="email" />
                    </div>
                  </div>
                </div>

                <div class="cta-form__col cta-form__col--full">
                  <div class="cta-form__group">
                    <button type="submit" class="cta-form__btn btn">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
