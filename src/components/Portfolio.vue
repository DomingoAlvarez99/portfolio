<template>
  <div class="portfolio">
    <v-container
      id="portfolio"
      class="portfolio pt-15 pl-10 pb-15 pr-10"
      fluid
    >
      <v-row justify="center">
        <v-col cols="12">
          <h2 class="text-center">
            <v-icon
              medium 
              color="accent"
            >
              mdi-folder-open
            </v-icon>
            Proyectos
          </h2>
        </v-col>
        <v-col 
          cols="12"
        >
          <v-tabs
            class="mt-5"
            v-model="currentItem"
            background-color="white"
            color="accent"
            hide-slider
            centered
          >
            <v-tab
              v-for="tab in tabs" 
              :key="tab.key"
              class="pl-7 mt-1 mb-1 pr-7 project-tab"
              :class="[currentItem == tab.key ? 'project-tab-selected' : '', tab.css]"
              :href="'#' + tab.key"
              @click="currentItem = tab.key"
            >
              {{tab.title}}
            </v-tab>
          </v-tabs>
          <v-tabs-items
            class="mt-10"
            v-model="currentItem"
          >
            <v-tab-item
              :value="currentItem"
            >
              <v-row>
                <v-col
                  v-for="item in filteredItems()"
                  :key="item.title"
                  cols="12"
                  sm="6"
                  md="6"
                  lg="4"
                >
                  <v-hover v-slot="{ hover }">
                    <v-img
                      :src="item.src"
                      :lazy-src="item.src"
                      aspect-ratio="1"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out v-card--reveal display-3"
                        >
                          <div class="text-center">
                            <h6 class="portfolio-title font-weight-bold">{{item.title}}</h6>
                            <h6 class="portfolio-techs">{{item.technologies.join(' / ')}}</h6>
                            <v-btn
                              class="pt-5 pb-5"
                              outlined
                              color="white"
                              @click="enableDialog(item.details)"
                            >
                              VER DETALLES
                            </v-btn>
                          </div>
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-hover>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="900"
          >
            <v-card>
              <v-carousel
                progress-color="accent"
                hide-delimiters
                v-model="model"
                height="auto"
              >
                <v-carousel-item
                  v-for="img in currentItemDetails.imgs"
                  :key="img"
                >
                <v-img
                  :aspect-ratio="16/9"
                  :src="img"
                />
                </v-carousel-item>
              </v-carousel>
              <v-card-title class="headline">
                {{currentItemDetails.title}}
              </v-card-title>
               <v-card-text class="pb-4">
                  <v-btn
                    class="mr-1 text-capitalize white--text"
                    v-for="tag in currentItemDetails.tags"
                    :key="tag.title"
                    rounded
                    x-small
                    :color="tag.backgroundColor"
                  >
                    {{tag.title}}
                  </v-btn>
                </v-card-text>
              <v-divider class="mx-6"></v-divider>
              <v-card-text class="pt-3">{{currentItemDetails.description}}</v-card-text>
              <v-card-actions>
                <v-btn
                  class="mb-2"
                  v-for="item in currentItemDetails.links"
                  :key="item.icon"
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
                <v-spacer></v-spacer>
                <v-btn
                  class="mb-2"
                  color="accent"
                  text
                  @click="dialog = false"
                >
                  Cerrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      currentItem: 'all',
      currentItemDetails: {},
      dialog: false,
      tabs: [
        { key: 'all', title: 'TODOS', css: '' },
        { key: 'web', title: 'WEB', css: 'ml-5' },
        //{ key: 'mobile', title: 'MÓVIL', css: 'ml-5' }
      ],
      items: [
        {
          title: 'Lecrín TV',
          type: 'web',
          src: require('@/assets/imgs/projects/ltv/portfolio.png'),
          technologies: [
            'VueJS', 'Spring Boot', 'KeyCloak'
          ],
          details: {
            title: 'Lecrín TV',
            description: 'Lecrín TV estaba buscando rediseñar su página web y este es el resultado. Las principales mejoras son a nivel de diseño aunque también se ha añadido una parte privada securizada con KeyCloak para poder hacer un crud de las tarifas y de las imágenes de la portada de forma dinámica.',
            links: [
              //{ icon: 'mdi-github', color: 'black', link: 'https://vuetifyjs.com/en/components/buttons/' }
            ],
            tags: [
              { title: 'Spring Boot', backgroundColor: 'green' },
              { title: 'PostgreSQL', backgroundColor: 'blue' },
              { title: 'Swagger', backgroundColor: 'green' },
              { title: 'Redis', backgroundColor: 'red' },
              { title: 'KeyCloak', backgroundColor: 'black' },
              { title: 'VueJS', backgroundColor: 'green' },
              { title: 'BootstrapVue', backgroundColor: 'purple' },
              { title: 'Docker', backgroundColor: 'blue' }
            ],
            imgs: [
              require('@/assets/imgs/projects/ltv/admin/login.png'),
              require('@/assets/imgs/projects/ltv/admin/users.png'),
              require('@/assets/imgs/projects/ltv/admin/services-new.png'),
              require('@/assets/imgs/projects/ltv/admin/403.png'),
              require('@/assets/imgs/projects/ltv/admin/404-resource.png'),
              require('@/assets/imgs/projects/ltv/public/internet.png'),
              require('@/assets/imgs/projects/ltv/public/contact.png'),
              require('@/assets/imgs/projects/ltv/public/404.png'),
            ]
          }
        },
        /*
        {
          title: 'APLICACIONES MÓVILES2',
          type: 'mobile',
          repository: '',
          src: require('@/assets/imgs/projects/ltv/portfolio.png'),
          technologies: [
            'VueJS', 'Spring Boot'
          ]
        },
        {
          title: 'APLICACIONES MÓVILES3',
          type: 'mobile',
          repository: '',
          src: require('@/assets/imgs/projects/ltv/portfolio.png'),
          technologies: [
            'VueJS', 'Spring Boot'
          ]
        },
        {
          title: 'APLICACIONES MÓVILES4',
          type: 'mobile',
          repository: '',
          src: require('@/assets/imgs/projects/ltv/portfolio.png'),
          technologies: [
            'VueJS', 'Spring Boot'
          ]
        },
        {
          title: 'APLICACIONES MÓVILES5',
          type: 'mobile',
          repository: '',
          src: require('@/assets/imgs/projects/ltv/portfolio.png'),
          technologies: [
            'VueJS', 'Spring Boot'
          ]
        },
        {
          title: 'APLICACIONES MÓVILES6',
          type: 'mobile',
          repository: '',
          src: require('@/assets/imgs/projects/ltv/portfolio.png'),
          technologies: [
            'VueJS', 'Spring Boot'
          ]
        }*/
      ]
    }),
    methods: {
      filteredItems() {
        return this.currentItem == 'all'
          ? this.items : this.items.filter(item => item.type === this.currentItem)
      },
      enableDialog(details) {
        this.dialog = true
        this.currentItemDetails = details
      }
    }
  }
</script>

<style scoped>
  .portfolio {
    background-color: white;
  }

  .portfolio h2 {
    font-size: 1.4em;
    color: var(--v-accent-base);
  }
  .portfolio h4 {
    font-size: 1.15em;
  }

  .portfolio p {
    font-size: 0.95em;
  }
  .v-card--reveal {
    background-color: var(--v-primary-base);
    color: white;
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .project-tab {
    font-size: 1.1em;
  }

  .project-tab-selected {
    font-size: 1.1em;
    color: white!important;
    background-color: var(--v-accent-base)!important;
  }

  .v-card--reveal button:hover {
    background-color: white;
    color: var(--v-primary-base)!important;
  }

  .v-card--reveal button {
    font-size: 0.3em;
    border: 2px solid white;
  }

  .portfolio-title {
    font-size: 0.45em!important;
  }

  .portfolio-techs {
    font-size: 0.3em!important;
  }

  @media only screen and (max-width: 600px) {
    .project-tab {
      font-size: 1em;
      padding: 0em!important;
    }
  }
</style>