<template>
    <v-row class="text-center">
      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <!-- -----DARK MODE START--- -->
      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <v-col v-if="$vuetify.theme.dark" cols="12 background-dark">
        <v-col class="align-self-right" cols="12">
          <transition 
            enter-active-class="animate__animated animate__backInUp"
            leave-active-class="animate__animated animate__backOutDown"
          > <v-icon class="arrowAnimation-dark">mdi-arrow-up-bold</v-icon>     
          </transition>
        </v-col>
        About Me !
        <div class="stars small"></div>
        <div class="stars medium"></div>
        <div class="stars large"></div>
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
      <v-col v-if="!$vuetify.theme.dark" cols="12 background-light-about-me">
        <canvas id='bgCanvas'></canvas>
        About Me !

      </v-col>
      <!-- ----------------------- -->
      <!-- ----------------------- -->
      <!-- -----DARK MODE END----- -->
      <!-- ----------------------- -->
      <!-- ----------------------- -->
    </v-row>
</template>

<script>
export default {
  name: 'aboutMe',
  mounted() {
    var canvas = document.getElementById('bgCanvas');
    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 300;

    function bubbles() {
    for(var i=0; i<particleCount;i++)
    particles.push(new particle());

    function particle() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 300;
      this.speed = 1 + Math.random();
      this.radius = Math.random() * 3;
      this.opacity = (Math.random() * 100) / 1000;
    }
    
    function loop() {
      requestAnimationFrame(loop);
      draw();
    }

    function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      
      ctx.globalCompositeOperation = 'lighter';
      for(var i=0; i<particles.length; i++) {
        var p = particles[i];
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,' + p.opacity + ')';
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2, false);
        ctx.fill();
        p.y -= p.speed;
        if(p.y <= -10)
          particles[i] = new particle();
      }
    }

    loop();
  }
  if(!this.$vuetify.theme.dark) {
    bubbles();
    console.log(this.$vuetify.theme.dark)
  }
  },
  methods: {
    activateBubbles() {
      this.bubbles();
    }
  }
}
</script>

<style lang="scss">
@import "../scss/style.scss";

.page-container {
  padding: 0;
}

</style>