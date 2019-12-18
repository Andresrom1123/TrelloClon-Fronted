<template>
  <div>
    <!-- Empieza container -->
    <div class="container d-flex my-5">
      <!-- Barra lateral izquierda -->
      <div class="mr-5">
        <small
          class="rounded -bg-ico-blue -text-blue-2 -ico-3 d-flex align-items-center -pointer p-3 font-weight-bold"
        >
          <i class="mr-3 fab fa-trello"></i>Tableros
        </small>
      </div>
      <!-- Termina Barra lateral izquierada -->
      <!--  -->
      <div class="col-10">
        <!-- Empieza tableros marcados -->
        <div v-if="tabledFavorite[0]" class="mb-5">
          <h5 class="font-weight-bold">
            <i class="mr-3 text-muted far fa-star"></i>Tableros marcados
          </h5>
          <div class="row">
            <div
              v-for="(card, indexTabled) in tabledFavorite"
              :key="indexTabled"
              class="bg-primary card col-2 px-0 m-2"
            >
              <div
                @click="booleanButtonFavoriteFalse(indexTabled)"
                class="p-2 text-decoration-none d-flex flex-column justify-content-between -pointer"
                style="min-height:80px;"
              >
                <h5 class="-font-size-2 -text-white">
                  {{ card.name }}
                </h5>
                <div class="text-right">
                  <small @click="buttonFavorite(indexTabled)">
                    <i class="text-warning far fa-star"></i>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Termina tableros marcados -->
        <!--  -->
        <!-- Empieza talberos personales -->
        <div class="">
          <h5 class="font-weight-bold">
            <i class="mr-3 text-muted fas fa-user"></i>Tableros personales
          </h5>
          <div class="row">
            <div
              v-for="(card, indexTabled) in tabled"
              :key="indexTabled"
              class="bg-primary card col-2 px-0 m-2"
            >
              <div
                @click="booleanButtonFavoriteFalse(indexTabled)"
                class="p-2 text-decoration-none d-flex flex-column justify-content-between -pointer"
                style="min-height:80px;"
              >
                <h5 class="-font-size-2 -text-white">
                  {{ card.name }}
                </h5>
                <div class="text-right">
                  <small @click="buttonFavorite(indexTabled)">
                    <i
                      :class="
                        card.favorite == 0 ? '-text-white' : 'text-warning'
                      "
                      class="far fa-star"
                    >
                    </i>
                  </small>
                </div>
              </div>
            </div>
            <!-- Termina tableros personales -->
            <div
              @click="$bvModal.show('bv-modal-example')"
              class="card bg-light  col-2 px-0 m-2"
            >
              <div
                class="p-2 justify-content-center -pointer d-flex align-items-center"
                href="#"
                style="height:80px;"
              >
                <small>Crear un tablero nuevo</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Termina container -->
    <!-- Mi componente modal para crear tableros -->
    <modal-t />
    <!-- Termina mi comopenete modal para crear tableros -->
  </div>
</template>
<script>
import axios from 'axios'
import ModalT from '~/components/ModalT'
export default {
  layout: 'board-layout',
  middleware: 'authenticated',
  components: {
    ModalT
  },
  data() {
    return {
      urlApiTabled: `http://127.0.0.1:8000/api/v1/users/${localStorage.getItem(
        'id'
      )}/tableros/`,
      urlApiTabledFavorite: `http://127.0.0.1:8000/api/v1/users/${localStorage.getItem(
        'id'
      )}/tablerosfavoritos/`,
      tabled: [],
      tabledFavorite: [],
      booleanButtonFavorite: true
    }
  },
  created() {
    this.getTabled()
  },
  mounted() {
    this.getTabledFavorite()
  },
  methods: {
    getTabled() {
      axios
        .get(this.urlApiTabled)
        .then((response) => {
          this.tabled = response.data
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    },
    getTabledFavorite() {
      axios
        .get(this.urlApiTabledFavorite)
        .then((response) => {
          this.tabledFavorite = response.data
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    },
    buttonFavorite(index) {
      this.booleanButtonFavorite = false
      const form = {
        users: this.tabled[index].dueno.id
      }
      axios
        .post(
          `http://127.0.0.1:8000/api/v1/tableros/${this.tabled[index].id}/fav/`,
          form
        )
        .then((response) => {
          // alert('Se agrego a tu lista de favoritos')
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    },
    booleanButtonFavoriteFalse(index) {
      if (this.booleanButtonFavorite) {
        this.$router.push(`boards/${this.tabled[index].name}`)
      } else {
        this.booleanButtonFavorite = true
      }
    }
  }
}
</script>
<style>
body {
  background-image: url(/photo5.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
