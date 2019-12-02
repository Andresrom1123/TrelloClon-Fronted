<template>
  <div>
    <nav class="navbar navbar-light">
      <img src="/trello-logo.svg" width="200" class="pr-5" />
      <form class="form-inline">
        <h6 class="pr-3 .bg-white">Iniciar seccion</h6>
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          id="fondo"
        >
          Registrate
        </button>
      </form>
    </nav>
    <nuxt />
  </div>
</template>

<style scoped>
nav {
  background: linear-gradient(135deg, #0079bf, #5067c5);
}
h6 {
  color: #ffffff;
}
#fondo {
  background: #ffffff;
  color: #0178bf;
  border: none;
}
</style>
