<template>
  <v-app class="mainApp">
    <v-main flex-row>
      <navbar/>
      <router-view><index/></router-view>
      <footerNav/>
    </v-main>
  </v-app>
</template>

<script>

console.log(localStorage);

import index from './components/index';
import navbar from './components/navbar';
import footerNav from './components/footer';

export default {
  name: 'App',

  components: {
    index,
    navbar,
    footerNav,
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
</style>
