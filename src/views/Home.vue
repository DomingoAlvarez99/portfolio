<template>
  <div>
    <Presentation/>
    <About/>
    <Services/>
    <Portfolio/>
  </div>
</template>

<script>
  import Presentation from '@/components/Presentation'
  import About from '@/components/About'
  import Services from '@/components/Services'
  import Portfolio from '../components/Portfolio.vue'

  export default {
  components: {
    Presentation,
    About,
    Services,
    Portfolio
  },
   data() {
     return {
       socials: [
         { icon: 'mdi-facebook', color: 'white' },
         { icon: 'mdi-twitter', color: 'white' },
         { icon: 'mdi-linkedin', color: 'white' },
         { icon: 'mdi-instagram', color: 'white' },
       ]
     }
   }
  }
</script>

<style scoped>
  .home {
    background-color: var(--v-primary-base);
  }

  .socials-divider {
    border: 0;
    height: 3px;
    background: rgb(255, 255, 255);
    width: 50px;
    margin: auto;
  }

  .header h1 {
    color: white;
  }

  .header h3 {
    font-size: 1.55em;
    color: white;
  }

  .home-title {
    margin-top: -10em;
  }

  .home-title h1 {
    font-size: 3em;
    letter-spacing: 0.1em;
  }
  .home-title h2 {
    margin-top: 1em;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.125em;
  }
</style>
