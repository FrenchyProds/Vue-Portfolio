<template>
  <v-container pa-0 class="d-flex align-center page-container" fluid>
    <v-row class="text-center">
      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <!-- -----DARK MODE START--- -->
      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <v-col v-if="$vuetify.theme.dark" cols="12 background-dark"> 
        <div class="moonLanding">
        </div>
        <div class="stars small"></div>
        <div class="stars medium"></div>
        <div class="stars large"></div>
        <div class="p p-1"></div>
        <div class="p p-2"></div>
        <div class="p p-3"></div>
        <div class="p p-4"></div>
        <div class="p p-5"></div>
        
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
          <transition 
            enter-active-class="animate__animated animate__backInUp"
            leave-active-class="animate__animated animate__backOutDown"
          > <v-icon class="arrowAnimation-dark">mdi-arrow-down-bold</v-icon>     
          </transition>
        </v-col>
      </v-col>
      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <!-- -----DARK MODE END----- -->
      <!-- ----------------------- -->
      <!-- ----------------------- -->


      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <!-- ----LIGHT MODE START--- -->
      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <v-col v-if="!$vuetify.theme.dark" cols="12 background-light">
          <img class="shark-fin" src="../assets/shark-fin.webp" />
        <v-col cols="12" class="sea">
          <div class="s seagull-1"></div>
        <v-col class="ma-auto textDisplay col-md-5 col-sm-8 col-xs-11">
          <h1 class="font-weight-bold ma-5">
            <span class="firstName">Paul</span><br/><span class="familyName">Yves-Menager</span>
          </h1>
          <p class="textP">
            I'm a France based Junior Web Developer, with a strong appetite to learn and challenge myself.
          </p>
          <p class="textP">
            Don't hesitate to get in touch if you are looking for a hard working and dedicated developer !
          </p>
        </v-col>
        </v-col>
        <v-col class="align-self-right" cols="12">
          <transition 
            enter-active-class="animate__animated animate__backInUp"
            leave-active-class="animate__animated animate__backOutDown"
          > <v-icon class="arrowAnimation-dark">mdi-arrow-down-bold</v-icon>     
          </transition>
        </v-col>
      </v-col>
      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <!-- ----LIGHT MODE END----- -->
      <!-- ----------------------- -->
      <!-- ----------------------- -->
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({
    }),
  }
</script>

<style lang="scss">
@import "../scss/style.scss";
</style>