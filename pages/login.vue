<template>
  <div class="-banner">
    <div class="d-flex justify-content-center py-1">
      <a href="/">
        <img
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"
          alt=""
          class="-img"
        />
      </a>
    </div>
    <div class="d-flex justify-content-center">
      <div class="shadow p-5 -form">
        <div class="d-flex justify-content-center mb-3 font-weight-bold">
          <template>Iniciar sesion con trello</template>
        </div>
        <ValidationObserver ref="observer" v-slot="{ passes }">
          <form @submit.prevent="passes(onSubmit)">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="username"
            >
              <div class="form-group">
                <input
                  v-model="form.username"
                  type="text"
                  class="form-control"
                  placeholder="Introduzca su nombre de usario"
                />
                <small class="from-text text-danger">
                  {{ errors[0] }}
                </small>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="password"
            >
              <div class="form-group">
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="Introduzca la contraseña"
                />
                <small class="from-text text-danger">
                  {{ errors[0] }}
                </small>
              </div>
            </ValidationProvider>
            <button type="submit" class="btn btn-block btn-success">
              Iniciar sesion
            </button>
          </form>
        </ValidationObserver>
        <div class="border-bottom my-4"></div>
        <ul class="text-center">
          <li class="-list-style-none mb-2">
            <a
              href="#"
              class="text-decoration-none -text-blue font-weight-bold"
            >
              No puedes iniciar sesion?
            </a>
          </li>
          <li class="-list-style-none">
            <a
              href="/signup"
              class="text-decoration-none -text-blue font-weight-bold"
            >
              Registrese para una cuenta nueva
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      urlApi: 'http://127.0.0.1:8000/api/token/'
    }
  },
  methods: {
    ...mapMutations(['login']),
    onSubmit() {
      axios
        .post(this.urlApi, this.form)
        .then((response) => {
          // Dirigimos la respuesta de la api
          const user = response.data
          // Mandamos a llamar el método que mapea la mutación login
          this.login(user)
          // Redireccionamos al boards
          this.$router.push('/boards')
        })
        .catch((error) => {
          console.log(error)
          // Si el usuario no existe en la base de datos
          if (error.response.status === 401) {
            alert('no existe el usario en la base de datos')
          } else if (error.response.status === 422) {
            // Si esta enviando mal la informacion
            alert('no estoy enviando bien la informacion')
          } else {
            alert('Tuvimos un error desconcido')
          }
        })
    }
  }
}
</script>
