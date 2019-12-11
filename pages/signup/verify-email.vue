<template>
  <div class="-banner -font">
    <div class="d-flex justify-content-center py-2">
      <a href="/">
        <img
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"
          alt=""
          class="-img"
        />
      </a>
    </div>
    <div class="d-flex justify-content-center">
      <div class="shadow p-5 -form bg-white">
        <div class="text-center ">
          <template>
            Consulta la bandeja de entrada para finalizar el registro
          </template>
        </div>
        <small class="text-left text-muted d-block my-3">
          Consulta el correo electrónico para finalizar el registro. Te hemos
          enviado un enlace de registro a la dirección:
        </small>
        <h3 class="text-center -font-size-1 mb-4">
          {{ email }}
        </h3>
        <img
          src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.80/static/media/check-your-email.d7f186eb.svg"
          alt=""
        />
        <div class="border-bottom my-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  created() {
    this.getToken()
  },
  methods: {
    getToken() {
      this.email = localStorage.getItem('email')
    }
  }
}
</script>
