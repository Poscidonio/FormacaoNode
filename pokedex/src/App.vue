<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <img src="./assets/logo.png" />
      <hr />
      <h4 class="is-size-4">Pokedex</h4>
      <input
        class="input is-rounded"
        type="text"
        placeholder="Buscar pokemon pelo nome"
        v-model="busca"
      />
      <button
        class="button is-dark"
        id="buscaBtn"
        @click="buscar"
      >
        Bucar
      </button>
      <div
        v-for="(poke, index) in filterPokemons"
        :key="poke.url"
      >
        <Pokemon
          :name="poke.name"
          :url="poke.url"
          :num="index + 1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from './components/Pokemon';
export default {
  name: 'App',
  data() {
    return {
      pokemons: [],
      filterPokemons: [],
      busca: '',
    };
  },
  created: function () {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then((res) => {
      console.log('Consumiu a API !');
      this.pokemons = res.data.results;
      this.filterPokemons = res.data.results;
    });
  },
  components: {
    Pokemon,
  },
  methods: {
    buscar: function () {
      this.filterPokemons = this.pokemons;
      if (this.busca == '' || this.busca == ' ') {
        this.filterPokemons = this.pokemons;
      } else {
        this.filterPokemons = this.pokemons.filter((pokemon) => pokemon.name == this.busca);
      }
    },
  },
  computed: {
    /*     resultadoBusca: function () {
      if (this.busca == '' || this.busca == ' ') {
        return this.pokemons;
      } else {
        //Nesta parte esta correto porem no curso nao é explicado que necessariamente o nome deve ser identico ao do pokemon
        //para que o filtro funcione
        return this.pokemons.filter((pokemon) => pokemon.name == this.busca);
      }
    }, */
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#buscaBtn {
  margin-top: 2%;
}
</style>
