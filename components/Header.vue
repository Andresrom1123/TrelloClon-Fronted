<template>
  <header class="-bg-blue p-1">
    <div class="d-flex align-items-center">
      <div class="col-4 pl-0 d-flex text-left">
        <div
          class="-ico d-flex align-items-center justify-content-center rounded -pointer mr-1"
        >
          <nuxt-link to="/boards">
            <i class="-text-white fas fa-home"></i>
          </nuxt-link>
        </div>
        <div
          class="-ico-2 d-flex align-items-center justify-content-center rounded -pointer mr-1 p-2"
        >
          <i class="-text-white mr-2 fab fa-trello"></i>
          <small class="font-weight-bold -text-white">
            Tableros
          </small>
        </div>
        <div
          class="-ico-3 -bg-ico-white d-flex align-items-center justify-content-end rounded -pointer p-2"
        >
          <i class="-text-white fas fa-search"></i>
        </div>
      </div>
      <div class="text-center col-4">
        <nuxt-link to="/boards">
          <img
            src="/trello-logo.svg"
            alt=""
            height="32px"
            width="60px"
            class="-pointer"
          />
        </nuxt-link>
      </div>
      <div class="col-4 d-flex pr-0 justify-content-end">
        <b-nav-item-dropdown
          class="-ico d-flex align-items-center justify-content-center rounded -pointer mr-1"
          html="<i></i>"
          toggle-class="text-white fas fa-plus"
          right
          no-caret
        >
          <b-dropdown-item @click="$bvModal.show('bv-modal-example')">
            <i class="mr-2 fab fa-trello"></i>Crear tablero
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <div
          class="-ico d-flex align-items-center justify-content-center rounded -pointer mr-1"
        >
          <i class="-text-white fas fa-exclamation-circle"></i>
        </div>
        <div
          class="-ico d-flex align-items-center justify-content-center rounded -pointer mr-1"
        >
          <i class="-text-white fas fa-bell"></i>
        </div>
        <b-nav-item-dropdown
          class="-ico rounded-circle justify-content-center d-flex align-items-center bg-secondary -pointer"
          no-caret
          toggle-class="-text-white -hover p-0 fas fa-user-circle"
          html="<i></i>"
          right
        >
          <b-dropdown-item @click="localStorageRemove()">
            Cerrar sesion
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    localStorageRemove() {
      localStorage.removeItem('vuex')
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
