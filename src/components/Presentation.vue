<template>
  <div class="presentation">
    <v-container
      class="presentation pt-15 pb-15"
      fluid
    >
      <div class="presentation-title text-center">
        <v-avatar
          color="white"
          size="128"
        >
          <img
            :src="require('@/assets/imgs/profile.jpg')"
            alt="dalvarez"
          >
        </v-avatar>
        <h1 class="mt-6 font-weight-bold">Domingo Álvarez</h1>
        <h3 class="mt-3 font-weight-light">Desarrollador FullStack Web & Móvil</h3>
      </div>
      <div class="text-center">
        <hr class="socials-divider mt-5"/>
      </div>
      <div class="text-center pt-5">
        <v-btn
          v-for="item in socials"
          :key="item.icon"
          class="ma-2"
          fab
          outlined
          color="white"
          :href="item.link"
          target="_blank"
        >
          <v-icon :color="item.color">
            {{item.icon}}
          </v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
   data() {
     return {
       socials: [
        { icon: 'mdi-github', color: 'white', link: 'https://github.com/DomingoAlvarez99' },
        { icon: 'mdi-linkedin', color: 'white', link: 'https://www.linkedin.com/in/jos%C3%A9-domingo-%C3%A1lvarez-caba-a711ba1a7/' },
        //{ icon: 'mdi-twitter', color: 'white', link: 'https://github.com/DomingoAlvarez99' },
        { icon: 'mdi-gmail', color: 'white', link: 'mailto:dalvarezcaba@gmail.com' }
       ]
     }
   }
  }
</script>

<style scoped>
  .presentation {
    background-color: var(--v-primary-base);
  }

  .socials-divider {
    border: 0;
    height: 3px;
    background: rgb(255, 255, 255);
    width: 50px;
    margin: auto;
  }
  .presentation-title h1 {
    letter-spacing: 0.1em;
    color: white;
  }

  .presentation-title h3 {
    font-size: 1.55em;
    color: white;
  }

  .presentation-title h2 {
    margin-top: 1em;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.125em;
  }
</style>