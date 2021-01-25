<template>
    <div class="footerContainer">
        <v-footer
        v-if="$vuetify.theme.dark"
        padless
        color="black">
            <v-card
                width="100%"
                class="text-center white--text"
                pa-0
                color="black"
            >
                <v-row no-gutters class="text-center">
                    <v-col cols="12" sm="6">
                        <v-card-text pa-0>
                        <v-icon color="white">mdi-copyright</v-icon>
                        {{ new Date().getFullYear() }} — <strong><span class="blue--text">French</span>yProdu<span class="red--text">ctions</span></strong>
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card-text pa-0>
                        <strong>Built with :</strong>
                        <v-icon color="green">mdi-vuejs</v-icon> <a href="https://vuejs.org/">Vue.js</a> and
                        <v-icon color="blue">mdi-vuetify</v-icon> <a href="https://vuetifyjs.com/">Vuetify</a>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-footer>
        <v-footer
        v-if="!$vuetify.theme.dark"
        padless
        color="white">
            <v-card
                width="100%"
                class="text-center black--text"
                pa-0
                color="white"
            >
                <v-row no-gutters class="text-center">
                    <v-col cols="12" sm="6">
                        <v-card-text pa-0>
                        <v-icon color="black">mdi-copyright</v-icon>
                        {{ new Date().getFullYear() }} — <strong><span class="blue--text">French</span>yProdu<span class="red--text">ctions</span></strong>
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card-text pa-0>
                        <strong>Built with :</strong>
                        <v-icon color="green">mdi-vuejs</v-icon> <a href="https://vuejs.org/">Vue.js</a> and
                        <v-icon color="blue">mdi-vuetify</v-icon> <a href="https://vuetifyjs.com/">Vuetify</a>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>