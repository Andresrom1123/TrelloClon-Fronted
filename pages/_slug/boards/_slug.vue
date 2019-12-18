<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand text-white background1 ">Negocios</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-white background" href="#">
              <i class="far fa-star"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white background ml-2" href="#">
              team <span class="org-label">free</span>
            </a>
          </li>
          <li class="nav-item dropdown ">
            <a class="nav-link text-white background ml-2 ">
              <i class="fas fa-user-friends"></i> visible para el equipo
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled text-white background ml-2">
              Invitar
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button
            class="btn text-white  my-2 my-sm-0 background mr-2"
            type="submit"
          >
            <span
              class="board-header-btn-icon icon-sm plugin-icon mod-reset"
              style="background-image: url('https://app.butlerfortrello.com/master-194/./img/butler-powerup-btn-white.svg');"
            >
            </span>
            Blutter
          </button>
          <button class="btn text-white my-2 my-sm-0 background" type="submit">
            ... Mostrar Menu
          </button>
        </form>
      </div>
    </nav>
    <div id="app" class="container ml-4">
      <div class="row">
        <div class="col-md-4 mt-3" v-for="(list, index) in lists" :key="index">
          <div class="card table">
            <div class="card-header">
              <div class="d-flex justify-content-between">
                <h4>{{ list.name }}</h4>
                <button
                  :class="
                    list.status == 'creating' ? 'btn-warning' : 'btn-danger'
                  "
                  class="btn btn-sm"
                  @click="removeList(index)"
                >
                  {{ list.status == 'creating' ? 'Cancelar' : 'Eleminar' }}
                </button>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="saveList(list)" action="/">
                <div class="form-group" v-if="list.status == 'creating'">
                  <input
                    v-model="list.name"
                    class="form-control"
                    placeholder="Nombre de la lista"
                  />
                </div>
                <button
                  v-if="list.status != 'saved'"
                  class="btn btn-primary btn-block"
                >
                  Guardar
                </button>
                <!-- Agregar Tarjeta -->
                <div
                  class="form-group"
                  :key="card"
                  v-for="(card, indexCard) in list.cards"
                >
                  <div class="d-flex" id="cardContainer">
                    <div class="col-10 pr-1">
                      <input
                        v-model="card.title"
                        class="form-control"
                        placeholder="descpricion de la tarjeta"
                        readonly="indexCard != list.cards.length - 1"
                      />
                    </div>
                    <div class="d-flex">
                      <button
                        class="btn btn-danger"
                        @click="removeListCard(index, indexCard)"
                      >
                        X
                      </button>
                      <button
                        class="btn btn-primary"
                        @click="editCard($event)"
                        v-if="indexCard != list.cards.length - 1"
                      >
                        E
                      </button>
                    </div>
                  </div>
                  <!-- <imput @remove="removeListCard(index)" :title="card.title"></imput> -->
                </div>
                <button
                  v-if="list.status == 'saved'"
                  class="btn btn-success btn-block"
                  @click="addCard(list)"
                >
                  Aregar tarjeta
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <button class="btn  btn-block background" @click="addList">
            <i class="fas fa-plus"></i> Agregar lista
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body {
  background-image: url(/photo5.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
}
nav {
  background: none;
}
.background {
  background-color: hsla(0, 0%, 100%, 0.24);
  padding: 5px;
  border-radius: 5%;
  color: white;
}
.background1:hover {
  background-color: hsla(0, 0%, 100%, 0.24);
  padding: 5px;
  border-radius: 5%;
}
.org-label {
  font-size: 12px;
  background: hsla(0, 0%, 100%, 0.2);
  border-radius: 12px;
  margin-left: 8px;
  padding: 2px 6px;
}
.table {
  background-color: #ebecf0;
  width: 272px;
}
</style>
<script>
export default {
  data() {
    return {
      lists: []
    }
  },
  methods: {
    addList() {
      const newList = {
        name: '',
        status: 'creating',
        cards: []
      }
      this.lists.push(newList)
    },
    saveList(list) {
      list.status = 'saved'
    },
    removeList(index) {
      this.lists.splice(index, 1)
    },
    addCard(list) {
      const newCard = {
        title: '',
        if: false
      }
      list.cards.push(newCard)
    },
    removeListCard(indexList, index) {
      this.lists[indexList].cards.splice(index, 1)
    },
    editCard(event) {
      const button = event.target
      const cardContainer = button.closest('#cardContainer') // Buscamos al elemento mas cercano con el id carContainer del evento que dispara el evento
      const input = cardContainer.querySelector('input') // Buscamos un input dentro de cardContainer
      input.readOnly = false // Modificamos el elemento artributo readonly
      console.log(cardContainer)
    }
  }
}
</script>
