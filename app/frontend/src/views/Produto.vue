<template>
  <div class="paiProduto">
    <h1>Produtos</h1>
    <div class="produtos" v-if="product && product.length > 0">
      <div v-for="produto in product" :key="produto.id">
        <img :src="produto.image" alt="produto.name" />
        <h3>{{ produto.name }}</h3>
        <p>Tipo: {{ produto.type }}</p>
        <p>Preço: {{ produto.price }}</p>
        <p>{{ produto.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>Nenhum produto encontrado.</p>
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
    async produtosAll() {
      try {
        const response = await fetch("http://localhost:3000/produtos", {
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
    this.produtosAll(); // Chamada do método produtosAll() durante o ciclo de vida do componente
  }
}
</script>
