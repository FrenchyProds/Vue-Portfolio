<template>
  <v-container pa-0 class="d-flex align-center page-container" fluid>
    <v-row class="text-center">
      <darkIndex/>
      <lightIndex/>      
        <v-col class="ma-auto textDisplay col-md-5 col-sm-8 col-xs-11">
          <h1 class="font-weight-bold ma-3">
            <span class="firstName">Paul</span><br/><span class="familyName">Yves-Menager</span>
          </h1>
          <p class="font-weight-regular">
            I'm a France based Junior Web Developer, with a strong appetite to learn and challenge myself.
          </p>
          <p class="font-weight-regular">
            Don't hesitate to get in touch if you are looking for a hard working and dedicated developer !
          </p>
        </v-col>
        <v-col class="align-self-right" cols="12">
            <v-icon class="arrowAnimation"
            @click="goToAboutMe()">mdi-arrow-down-bold</v-icon>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import darkIndex from './index-dark.vue'
import lightIndex from './index-light.vue'
  export default {
    name: 'home',
    components: {
      darkIndex,
      lightIndex
    },
    data: () => ({
      
    }),
    mounted() {
    },
    methods: {
      goToAboutMe() {
        if(this.$router.currentRoute.name !== "aboutMe") {
            this.$router.push({ name: "aboutMe" })
        }
    },
    }
  }
</script>

<style lang="scss">
@import "../../scss/style.scss";
</style>