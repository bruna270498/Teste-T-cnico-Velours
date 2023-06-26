<template>
    <div class="paiProdutoId">
      <h1>Produto</h1>
      <div class="produto">
        <div v-if="product && product.length > 0">
          <div v-for="produto in product" :key="produto.id">
            <img :src="produto.image" :alt="produto.name" />
            <h3>{{ produto.name }}</h3>
            <p>Tipo: {{ produto.tipo }}</p>
            <p>Preço: {{ produto.price }}</p>
            <p>{{ produto.description }}</p>
          </div>
        </div>
        <div v-else>
          <p>Nenhum produto encontrado.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Produtos',
    data() {
      return {
        product: []
      }
    },
    methods: {
      async produto(id) {
        const url = `http://localhost:3000/produto/${id}`;
  
        try {
          const response = await fetch(url, {
            method: 'GET'
          });
          const data = await response.json();
          this.product = data;
  
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
    },
    mounted() {
      // Extrair o ID do URL usando expressões regulares
      const regex = /\/produto\/(\d+)/;
      const match = window.location.pathname.match(regex);
      const id = match ? match[1] : null;
  
      if (id) {
        this.produto(id); // Chamada do método produto() passando o ID
      } else {
        console.error('ID not found in URL');
      }
    }
  }
  </script>
  