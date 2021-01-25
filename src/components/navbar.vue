<template>
    <div>
        <v-app-bar
            v-if="$vuetify.theme.dark"
            app
            color="black"
            width="100%"
        >
            <v-container class="d-flex justify-space-around align-items-center">
                <v-tabs
                show-arrows
                centered
                background-color="black"
                dark
                icons-and-text
                height="110%"
                >
                    <v-tab @click="goHome()">
                        Home
                        <v-icon>mdi-home</v-icon>
                    </v-tab>
                    <v-tab @click="goToAboutMe()">
                        About Me
                        <v-icon>mdi-account</v-icon>
                    </v-tab>
                    <v-tab @click="goToProjects()">
                        Projects
                        <v-icon>mdi-cellphone-link</v-icon>
                    </v-tab>
                    <v-tab @click="goToContact()">
                        Contact
                        <v-icon>mdi-card-account-phone</v-icon>
                    </v-tab>
                </v-tabs>
                <div>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                        <v-btn v-on="on" color="black" small fab @click="darkMode">
                            <v-icon color="white" ma-auto>mdi-white-balance-sunny</v-icon>
                        </v-btn>
                        </template>
                        <span>Light Mode</span>
                    </v-tooltip>
                </div>
            </v-container>
        </v-app-bar>
        <v-app-bar
            v-if="!$vuetify.theme.dark"
            app
            color="white"
            width="100%"
        >
            <v-container class="d-flex justify-space-around align-items-center">
                <v-tabs
                show-arrows
                centered
                background-color="white"
                light
                icons-and-text
                height="110%"
                >
                    <v-tab @click="goHome()">
                        Home
                        <v-icon>mdi-home</v-icon>
                    </v-tab>
                    <v-tab @click="goToAboutMe()">
                        About Me
                        <v-icon>mdi-account</v-icon>
                    </v-tab>
                    <v-tab @click="goToProjects()">
                        Projects
                        <v-icon>mdi-cellphone-link</v-icon>
                    </v-tab>
                    <v-tab @click="goToContact()">
                        Contact
                        <v-icon>mdi-card-account-phone</v-icon>
                    </v-tab>
                </v-tabs>
                <div>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                        <v-btn v-on="on" color="white" small fab @click="darkMode">
                            <v-icon color="black" class="ma-auto">mdi-moon-waxing-crescent</v-icon>
                        </v-btn>
                        </template>
                        <span>Dark Mode</span>
                    </v-tooltip>
                </div>
            </v-container>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: ["home", "aboutMe", "projects", "contact"]
        }
    },
    methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    goHome() {
        if(this.$router.currentRoute.name !== "home") {
            this.$router.push({ name: "home" });
        }
    },
    goToAboutMe() {
        if(this.$router.currentRoute.name !== "aboutMe") {
            this.$router.push({ name: "aboutMe" })
        }
    },
    goToProjects() {
        if(this.$router.currentRoute.name !== "projects") {
            this.$router.push({ name: "projects" })
        }
    },
    goToContact() {
        if(this.$router.currentRoute.name !== "contact") {
            this.$router.push({ name: "contact" })
        }
    },
  }
}
</script>
