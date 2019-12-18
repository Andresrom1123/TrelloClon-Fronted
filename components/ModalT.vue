<template>
  <div>
    <b-modal id="bv-modal-example" ref="my-modal" hide-footer>
      <template v-slot:modal-title>
        <div class="text-primary">
          Nuevo tablero
        </div>
      </template>
      <b-alert @dismissed="error = false" :show="error" dismissible fade>
        <small class="text-danger">
          El nombre del tablero ya existe
        </small>
      </b-alert>
      <ValidationObserver ref="observer" v-slot="{ passes }">
        <form @submit.prevent="passes(onSubmit)">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="username"
          >
            <div class="form-group">
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                placeholder="Nombre del tablero"
              />
              <small class="from-text text-danger">
                {{ errors[0] }}
              </small>
            </div>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="description"
          >
            <div class="form-group">
              <b-form-textarea
                id="textarea"
                v-model="form.description"
                style="width:50%;"
                placeholder="Descripcion del tablero"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
              <small class="from-text text-danger">
                {{ errors[0] }}
              </small>
            </div>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="visibility"
          >
            <div class="form-group">
              <label for="exampleFormControlSelectPublico">Visibilidad</label>
              <select
                id="exampleFormControlSelectPublico"
                v-model="form.visibility"
                class="form-control"
              >
                <option value="Pb">Publico</option>
                <option value="Pr">Privado</option>
              </select>
              <small class="from-text text-danger">
                {{ errors[0] }}
              </small>
            </div>
          </ValidationProvider>
          <button type="submit" class="btn btn-block btn-success">
            Crear tablero
          </button>
        </form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        name: '',
        description: '',
        dueno: localStorage.getItem('id'),
        visibility: '',
        members: [localStorage.getItem('id')]
      },
      urlApiTabled: 'http://127.0.0.1:8000/api/v1/tableros/',
      urlApiUser: 'http://127.0.0.1:8000/api/v1/users/',
      error: false,
      users: []
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    onSubmit() {
      axios
        .post(this.urlApiTabled, this.form)
        .then((response) => {
          //
          this.$refs['my-modal'].hide()
          alert('Se creo el tablero')
        })
        .catch((error) => {
          if (error.response.data.name) {
            this.error = true
          }
          // alert('Tuvimos un error')
        })
    },
    getUser() {
      axios
        .get(this.urlApiUser)
        .then((response) => {
          // Al array user le pasamos los arrays de los usuarios
          this.users = response.data
          // Le mandamaos a la funcion getId el nombre de usuario que en este caso lo sacamos por el slug de la url
          localStorage.setItem('id', this.getId(this.$route.params.slug))
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    },
    // Creamos la funcion getId en el que recibe el nombre del usuario
    getId(username) {
      // Guardamos todos el find en la constante user
      const user = this.users.find((user) => {
        // Buscamos el valor que tenga ese username en el que le pasamos a la funcion
        return user.username === username
      })
      // Retornamos al usuario con su id
      return user.id
    }
  }
}
</script>
