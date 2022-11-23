<template>
  <div>
    <h2>Registro de usuário !</h2>
    <hr />
    <div class="columns is-centered">
      <div class="column is-half">
        <input
          type="text"
          placeholder="Nome do usuário"
          class="input"
        />
        <p>Email</p>
        <input
          type="email"
          placeholder="email@email.com"
          class="input"
        />
        <p>Senha</p>
        <input
          type="password"
          placeholder="******"
          class="input"
        />
        <hr />
        <button class="button is-sucess">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
