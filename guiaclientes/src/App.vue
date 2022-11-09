<template>
  <div id="app">
    <h1>Guia clientes</h1>
    <!-- Com Props -->
    <Cliente :cliente="clienteProps" />
    <!-- Sem Props -->
    <Cliente />
  </div>
</template>

<script>
import Cliente from './components/Cliente';
export default {
  name: 'App',
  data() {
    return {
      clienteProps: {
        nome: 'Guilherme',
        descricao: 'testando a reatividade !!',
        email: 'guilherme@gmail.com',
        idade: 26,
      },
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style></style>
