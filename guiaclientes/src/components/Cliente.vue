<template>
  <!-- aqui estamos com reatividade twoWay com leitura e escrita ou 
seja assim que alterar ele reagiaa as alterações momentaniamente  
em todos os lugares que estao chamando o componente-->
  <div :class="{ cliente: !isPremium, clienteBlack: isPremium }">
    <h2>{{ cliente.nome }}</h2>
    <p>Descrição do cliente: {{ cliente.descricao }}</p>
    <p>Email: {{ cliente.email }}</p>
    <!-- condição de V ou F para exibição do campo  
    se for verdade exibe a idade -->
    <p v-if="showIdade === true">Idade: {{ cliente.idade }}</p>
    <!-- se for falso exibe esta mensagem  -->
    <p v-else>O usuario escondeu a idade</p>
    <hr />
    <button @click="mudarCor($event)">Mudar a cor</button>
    <button @click="emitirEventoDelete">Deletar</button>
    <h4>Id especial: {{ idEspecial }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPremium: true,
    };
  },
  props: {
    cliente: Object,
    showIdade: Boolean,
  },
  methods: {
    mudarCor: function ($event) {
      console.log($event);
      /* sempre colocar o this na frnte quando se st referenciando ao metodo */
      this.isPremium = !this.isPremium;
    },
    emitirEventoDelete: function () {
      console.log('Emitindo do filho !!!');
      this.$emit('meDelete', { idDoCliente: this.cliente.id, teste: 'Qualquer coisa !!!!', component: this });
    },
    testar: function () {
      console.log('Testando para valer !');
      alert('isso nao é um teste');
    },
  },
  filters: {
    processarEmail: function (value) {
      return value.toUpperCase();
    },
    computed: {
      idEspecial: function () {
        return this.cliente.email + this.cliente.nome + this.cliente.id;
      },
    },
  },
};
</script>

<style scoped>
.cliente {
  color: blue;
}
.clienteBlack {
  color: black;
}
</style>
