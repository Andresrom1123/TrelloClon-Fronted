<template>
  <div>
    <div class="container d-flex my-5">
      <div class="mr-5">
        <small
          class="rounded -bg-ico-blue -text-blue-2 -ico-3 d-flex align-items-center -pointer p-3 font-weight-bold"
        >
          <i class="mr-3 fab fa-trello"></i>Tableros
        </small>
      </div>
      <div class="col-10">
        <h5 class="font-weight-bold">
          <i class="mr-3 text-muted fas fa-user"></i>Tableros personales
        </h5>
        <div class="row">
          <div
            v-for="card in tabled"
            :key="card.tabled"
            class="bg-primary card col-2 px-0 m-2"
          >
            <nuxt-link
              class="p-2 text-decoration-none"
              :to="'boards/' + tabled.name"
              style="height:80px;"
            >
              <h5 class="-font-size-2 -text-white">
                {{ card.name }}
              </h5>
            </nuxt-link>
          </div>
          <div class="card col-2 px-0 m-2">
            <div
              class="p-2 bg-light justify-content-center -pointer d-flex align-items-center"
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
</template>
<script>
import axios from 'axios'
export default {
  layout: 'board-layout',
  middleware: 'authenticated',
  data() {
    return {
      tabled: [],
      urlApi: 'http://127.0.0.1:8000/api/v1/tableros/'
    }
  },
  created() {
    this.getTabled()
  },
  methods: {
    getTabled() {
      axios
        .get(this.urlApi)
        .then((response) => {
          this.tabled = response.data.results
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    }
  }
}
</script>
