<template>
  <div>
    <h2>Registro de usuário !</h2>
    <hr />
    <div class="columns is-centered">
      <div class="column is-half">
        <p>Nome</p>
        <input
          type="text"
          placeholder="Nome do usuário"
          class="input"
          v-model="name"
        />
        <p>Email</p>
        <input
          type="email"
          placeholder="email@email.com"
          class="input"
          v-model="email"
        />
        <p>Senha</p>
        <input
          type="password"
          placeholder="******"
          class="input"
          v-model="password"
        />
        <hr />
        <button
          class="button is-sucess"
          @click="register"
        >
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      email: '',
    };
  },
  methods: {
    register() {
      axios
        .get('http://localhost:8686/', (res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
