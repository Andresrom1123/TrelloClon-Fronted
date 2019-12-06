<template>
  <div class="-banner -font">
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
          <template>Registrarse en Trello</template>
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
                  placeholder="Introduzca su nombre de usuario"
                />
                <small class="from-text text-danger">
                  {{ errors[0] }}
                </small>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="first_name"
            >
              <div class="form-group">
                <input
                  v-model="form.first_name"
                  type="text"
                  class="form-control"
                  placeholder="Introduzca su nombre"
                />
                <small class="from-text text-danger">
                  {{ errors[0] }}
                </small>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="last_name"
            >
              <div class="form-group">
                <input
                  v-model="form.last_name"
                  type="text"
                  class="form-control"
                  placeholder="Introduzca sus apellidos"
                />
                <small class="from-text text-danger">
                  {{ errors[0] }}
                </small>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|email"
              name="email"
            >
              <div class="form-group">
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Introduzca el correo electronico"
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
                  placeholder="Crear contraseña"
                />
                <small class="from-text text-danger">
                  {{ errors[0] }}
                </small>
              </div>
            </ValidationProvider>
            <div class="mb-3">
              <small class="text-muted">
                Al registrarse, confirma que ha leído y aceptado nuestras
                <span class="text-primary">Condiciones del Servicio</span> y
                nuestra
                <span class="text-primary">Política de Privacidad</span>.
              </small>
            </div>
            <button type="submit" class="btn btn-block btn-success">
              Registrarse
            </button>
          </form>
        </ValidationObserver>
        <div class="border-bottom my-4"></div>
        <div class="text-center">
          <a href="/login" class="-text-blue ">
            Ya tienes cuenta? Inicie sesion
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      urlApi: 'http://127.0.0.1:8000/api/v1/users/'
    }
  },
  methods: {
    onSubmit() {
      axios
        .post(this.urlApi, this.form)
        .then((response) => {
          console.log(response.data)
          alert('Se creo el usuario')
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    }
  }
}
</script>
