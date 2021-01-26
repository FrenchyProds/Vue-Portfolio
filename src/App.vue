<template>
  <v-app class="mainApp">
    <v-main flex-row>
      <navbar/>
      <transition name="zoom" mode="out-in">
        <router-view><index/></router-view>
      </transition>
      <footerNav/>
    </v-main>
  </v-app>
</template>

<script>
import index from './components/Homepage/index.vue';
import navbar from './components/navbar.vue';
import footerNav from './components/footer.vue';

export default {
  name: 'App',

  components: {
    index,
    navbar,
    footerNav,
  },
  mounted() { 
  },
};
</script>

<style lang="scss">

html {
  overflow: hidden;
}
.mainApp {
  & body {
  font-family: 'Barlow', sans-serif;
  }
  & h1 {
    font-family: 'Lato', sans-serif;
    letter-spacing: -.0083333333em;
    line-height: 0.9 !important;
  }
  & h3 {
    font-family: 'Lato', sans-serif;
  }
}

.v-main__wrap {
  flex-direction: column;
}

.v-card__subtitle, .v-card__text, .v-card__title {
  padding: 0.5rem;
}

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    filter: blur(0px);
    transform: scale3d(3, 3, 3);
  }
  50% {
    filter: blur(8px);
  }
  100% {
    opacity: 1;
  }
}

  
</style>
