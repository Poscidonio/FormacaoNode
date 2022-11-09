<template>
  <!-- aqui estamos com reatividade twoWay com leitura e escrita ou 
seja assim que alterar ele reagiaa as alterações momentaniamente  
em todos os lugares que estao chamando o componente-->
  <div id="cliente">
    <h2>{{ cliente.nome }}</h2>
    <p>Descrição do cliente: {{ cliente.descricao }}</p>
    <p>Email: {{ cliente.email }}</p>
    <p>Idade: {{ cliente.idade }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    nome: String,
    descricao: String,
    email: String,
    idade: Number,
    cliente: Object,
  },
};
</script>

<style scoped>
#cliente {
  color: blue;
}
</style>
