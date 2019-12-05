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
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="password"
            >
              <div class="form-group">
                <input
                  id="exampleInputPassword1"
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
