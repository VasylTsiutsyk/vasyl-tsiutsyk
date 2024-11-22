<template>
  <article class="project-card" :class="{ _clickable: projectLink }" @click.prevent="navigateToProject">
    <img :src="project.imgUrl" alt="" loading="lazy" class="project-card__img" />

    <div class="project-card__overlay">
      <h3 class="project-card__title">{{ project.data.title }}</h3>

      <ul class="project-card__techs">
        <li v-for="technology in project.data.technologies">
          {{ technology.technology }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const projectLink = computed(() => props.project?.data?.link);

function navigateToProject() {
  const link = projectLink.value;
  if (link) {
    if (link.startsWith('http://') || link.startsWith('https://')) {
      window.open(link, '_blank');
    } else {
      router.push(link);
    }
  }
}
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.project-card {
  position: relative;
  display: block;
  padding-bottom: 56.25%;
  overflow: hidden;

  &._clickable {
    cursor: pointer;
  }

  &:hover {
    .project-card__img {
      filter: none;
    }

    .project-card__overlay {
      visibility: visible;
      opacity: 1;
    }
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    -webkit-filter: grayscale(80%);
    filter: grayscale(80%);
    transition: filter var(--transition-duration-primary);
  }

  &__overlay {
    position: absolute;
    z-index: 9;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    background-color: rgba(0, 0, 0, 0.75);
    visibility: hidden;
    opacity: 0;
    transition: visibility var(--transition-duration-primary), opacity var(--transition-duration-primary);
  }

  &__title {
    font-size: rem(18);

    &:not(:last-child) {
      margin-bottom: rem(12);
    }
  }

  &__techs {
    list-style: disc outside;
    padding-left: 1rem;
    font-size: 0.875rem;
  }
}
</style>
