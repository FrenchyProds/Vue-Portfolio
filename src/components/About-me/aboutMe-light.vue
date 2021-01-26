<template>
    <v-col v-if="!$vuetify.theme.dark" cols="12 background-light-about-me">
        <v-col class="align-self-right" cols="12">
          <v-icon class="arrowAnimation" @click="goHome()">mdi-arrow-up-bold</v-icon>
        </v-col>
        About Me !
        <v-col class="align-self-right" cols="12">
          <v-icon class="arrowAnimation">mdi-arrow-down-bold</v-icon>     
        </v-col>
      </v-col>
</template>

<script>
export default {
    methods: {
        goHome() {
        if(this.$router.currentRoute.name !== "home") {
            this.$router.push({ name: "home" });
        }
    },
    }
}
</script>