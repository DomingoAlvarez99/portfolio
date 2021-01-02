<template>
  <v-container
    id="about"
    class="about pt-15 pl-10 pb-15 pr-10"
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="7"
      >
        <h4 class="mt-3 font-weight-medium">
          <v-icon
            medium 
            color="accent"
          >
            mdi-account
          </v-icon>
          ¿Quién soy?
        </h4>
        <p class="mt-3">Soy un chico de 21 años que vive en Granada y que disfruta creando aplicaciones en su tiempo libre.</p>
        <p>Principalmente trabajo en el desarrollo de back-end usando el Framework Spring, aunque para ciertos trabajos uso Laravel. En la parte de front-end suelo usar VueJS para el desarrollo web y Android Nativo & Swift para el desarrollo móvil.</p>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="5"
      >
        <h4 class="mt-3 font-weight-medium">
          <v-icon
            medium
            color="accent"
          >
            mdi-star
          </v-icon>
          Experiencia
        </h4>
        <h5
          class="mt-3"
          v-for="item in items"
          :key="item.title"
        >
          {{item.title}}
          <h6 class="mt-2">
            <v-row>
              <v-col
                cols="3"
                sm="2"
                class="tools text-center"
                v-for="tool in item.tools"
                :key="tool.title"
              >
                <v-icon
                  :color="tool.color"
                  medium
                  >
                  {{tool.icon}}
                </v-icon>
                <p>{{tool.title}}</p>
              </v-col>
            </v-row>
          </h6>
          <h6 class="font-weight-light">
            <v-icon
              class="mr-2"
              color="ligth-gray"
              small
            >
              mdi-office-building
            </v-icon>
              {{item.company}}
          </h6>
          <h6 class="mt-2 font-weight-light">
            <v-icon
              class="mr-2"
              color="ligth-gray"
              small
            >
              mdi-timer-sand-full
            </v-icon>
              {{item.time}}
          </h6>
        </h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'Desarrollador FullStack',
            company: 'Icired Impagados',
            time: '2020 - Presente',
            tools: [
              { title: 'Java & Spring', icon: 'mdi-language-java', color: 'orange' },
              { title: 'PostgreSQL', icon: 'mdi-database', color: 'gray' },
              { title: 'VueJS', icon: 'mdi-vuejs', color: 'green' },
              { title: 'Docker', icon: 'mdi-docker', color: 'blue' },
              { title: 'Pentaho', icon: 'mdi-file', color: 'orange' }
            ]
          }
        ]
      }
    }    
  }
</script>

<style scoped>
  .about h4 {
    font-size: 1.4em;
    color: var(--v-accent-base);
  }

  .about h5 {
    font-size: 1.2em;
    color: rgb(85, 85, 85);
  }

  .about h6 {
    font-size: 0.8em;
    color: ligth-gray;
  }

  .about p {
    font-size: 1.1em;
    color: rgb(85, 85, 85);
  }

  .tools p {
    font-size: 0.8em;
  }
</style>