<template>
  <div id="app">
    <div class="buttons">
      <button class="button is-primary">Primary</button>
      <button class="button is-link">Link</button>
    </div>

    <div class="buttons">
      <button class="button is-info">Info</button>
      <button class="button is-success">Success</button>
      <button class="button is-warning">Warning</button>
      <button class="button is-danger">Danger</button>
    </div>

    <h1>Guia clientes</h1>
    <!-- Com Props -->
    <!-- twoWay -->
    <input
      type="text"
      v-model="clienteProps.nome"
    />
    <input
      type="text"
      v-model="clienteProps.email"
    />
    <!-- oneWay -->
    <Cliente
      :cliente="clienteProps"
      :showIdade="true"
    />
    <Cliente
      :cliente="clienteProps1"
      :showIdade="false"
    />
    <Cliente :cliente="clienteProps2" />
    <div>
      <!-- Sem Props 
      <Cliente />-->
      <!-- percorrera toda array de clientes e exibirao comforme o id -->
      <div
        v-for="(cliente, index) in orderClientes"
        :key="cliente.id"
      >
        <h1>{{ index }}</h1>
        <Cliente
          :cliente="cliente"
          @meDelete="deletarUsuarios($event)"
        />
        <Cliente :cliente="cliente" />
        <hr />
        <h4>Edição</h4>
        <input
          type="text"
          v-model="cliente.nome"
        />
        <input
          type="text"
          v-model="cliente.email"
        />
        <hr />
        <hr />
        <small
          id="nomeErro"
          v-if="deuErro"
          >O nome é invalido, tente novamente</small
        ><br />
        <input
          type="text"
          placeholder="nome"
          v-model="nomeField"
        />
        <br />
        <input
          type="text"
          placeholder="email"
          v-model="emailField"
        />
        <br />
        <input
          type="text"
          placeholder="idade"
          v-model="idadeField"
        />

        <button @click="cadastrarUsuario">Cadastro</button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Cliente from './components/Cliente';
export default {
  name: 'App',
  data() {
    return {
      deuErro: false,
      nomeField: '',
      emailField: '',
      idadeField: 0,

      clienteProps: {
        nome: 'Guilherme',
        descricao: 'testando a reatividade !!',
        email: 'guilherme@gmail.com',
        idade: 26,
      },
      clienteProps1: {
        nome: 'Joao',
        descricao: 'roubou pao na casa !!',
        email: 'joao@gmail.com',
        idade: 26,
      },
      clienteProps2: {
        nome: 'Jubileu',
        descricao: 'Voce nao sabe nem eu  !!',
        email: 'jubileu@gmail.com',
        idade: 26,
      },
      //lista de clientes
      clientes: [
        {
          id: 1,
          nome: 'Jubileu1',
          descricao: 'Voce nao sabe nem eu  111111111111!!',
          email: 'jubileu@gmail.com',
          idade: 26,
        },
        {
          id: 2,
          nome: 'Jubileu2',
          descricao: 'Voce nao sabe nem eu  2222222222!!',
          email: 'jubileu@gmail.com',
          idade: 26,
        },
        { id: 3, nome: 'Jubileu3', descricao: 'Voce nao sabe nem eu  3333333333!!', email: 'jubileu@gmail.com', idade: 26 },
        { id: 4, nome: 'Jubileu3', descricao: 'Voce nao sabe nem eu  3333333333!!', email: 'jubileu@gmail.com', idade: 26 },
      ],
    };
  },
  components: {
    Cliente,
  },
  methods: {
    cadastrarUsuario: function () {
      if (this.nomeField == '' || this.emailField == '' || this.idadeField < 3) {
        this.deuErro = true;
      } else {
        this.clientes.push({ nome: this.nomeField, email: this.emailField, idade: this.idadeField, id: Date.now() });
        this.nomeField, this.emailField, this.idadeField;
        this.deuErro = false;
      }
    },
    deletarUsuarios: function ($event) {
      console.log('Recebendo evento');
      var id = $event.idadeField;
      /* maneira e remover eventos dentro de um array */
      var novoArray = this.clientes.filter((cliente) => cliente.id != id);
      this.clientes = novoArray;
    },
  },
  computed: {
    orderClientes: function () {
      return _.orderBy(this.clientes, ['nome'], ['asc']);
    },
  },
};
</script>

<style scoped>
#nomeErro {
  color: red;
}
</style>
