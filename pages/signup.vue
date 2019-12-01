<template>
  <div class="-banner -font">
    <div class="d-flex justify-content-center pt-5 pb-2">
      <img
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"
        alt=""
        class="-img"
      />
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
              rules="required|email"
              name="email"
            >
              <div class="form-group">
                <input
                  id="exampleInputEmail1"
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
            <div class="mb-3">
              <small class="text-muted">
                Al registrarse, confirma que ha leído y aceptado nuestras
                <span class="text-primary">Condiciones del Servicio</span> y
                nuestra
                <span class="text-primary">Política de Privacidad</span>.
              </small>
            </div>
            <button type="submit" class="btn btn-block btn-success">
              Continuar
            </button>
          </form>
        </ValidationObserver>
        <div class="border-bottom my-4"></div>
        <div class="text-center">
          <a href="#" class="-text-blue ">
            Ya tienes cuenta? Inicie sesion
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
