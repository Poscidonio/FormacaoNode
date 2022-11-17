<template>
  <div>
    <input
      type="text"
      name="email"
      id="email"
      placeholder="E-mail"
    />
    <br />
    <input
      type="text"
      name="nome"
      id="nome"
      placeholder="Nome"
    />
    <br />
    <button>TESTE !!</button>

    <h4>{{ parametroDaRota }}</h4>
  </div>
</template>

<script>
export default {
  created() {
    this.parametroDaRota = this.$route.params.dado;
  },
  data() {
    return {
      parametroDaRota: 'aaopa',
    };
  },
};
</script>

<style></style>
