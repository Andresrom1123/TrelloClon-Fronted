<template>
  <div>
    <nav class="d-fixed navbar navbar-light">
      <img src="/trello-logo.svg" width="200" class="pr-5" />
      <form class="form-inline">
        <a href="/login" class="pr-3 text-decoration-none text-white">
          Iniciar sesion
        </a>
        <a href="/signup">
          <button
            id="fondo"
            type="button"
            class="btn btn-outline-success my-2 my-sm-0"
          >
            Registrate
          </button>
        </a>
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
