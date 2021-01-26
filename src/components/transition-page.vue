<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    :enter-active-class="transitionEnterActiveClass"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot/>
  </transition>
</template>

<script>
const DEFAULT_TRANSITION = 'zoom';
const DEFAULT_TRANSITION_MODE = 'out-in';

export default {
  name: 'TransitionPage',
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: '',
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;

      this.transitionMode = DEFAULT_TRANSITION_MODE;
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      if (to.meta.transitionName === 'zoom') {
        this.transitionMode = 'in-out';
        this.transitionEnterActiveClass = 'zoom-enter-active';
        document.body.style.overflow = 'hidden';
      }

      if (from.meta.transitionName === 'zoom') {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null;
        document.body.style.overflow = null;
      }

      this.transitionName = transitionName;

      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>

<style lang="scss">

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 1;
    transform: scale3d(3, 3, 3);
  }

  100% {
    opacity: 1;
  }
}
</style>