<template>
  <div class="paiProduto">
    <h1>Produtos</h1>
    <div class="produtos" v-if="product && product.length > 0">
      <div v-for="produto in product" :key="produto.id">
        <img :src="produto.image" alt="produto.name" />
        <h3>{{ produto.name }}</h3>
        <p>Preço: {{ produto.price }}</p>
        <button @click="verDetalhes(produto.id)">Detalhes</button>
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
      product: [  {
                name: 'Televisão',
                price: 3000,
                tipo: 'Eletronico',
                image: 'https://s2-techtudo.glbimg.com/ppNkzAMfS2rLyYwWa8ORyNm2ovU=/0x0:695x463/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/p/b/AunsLbRASXhHCFPTMeaQ/2015-08-04-led.jpg',
                description: '50 polegadas marca sansung'
            },
            {
                name: 'Microondas',
                price: 450,
                tipo: 'Eletrodomestico',
                image: 'https://cdn.dooca.store/611/products/mcs10tsb-1-1_640x640+fill_ffffff.jpg?v=1601491433&webp=0',
                description: 'marca esmaltec, 220v'
            },
            {
                name: 'Geladeira',
                price: 5000,
                tipo: 'Eletronico',
                image: 'https://compracerta.vtexassets.com/arquivos/ids/193612/Brastemp_Geladeira_BRM44HB_Imagem_3_4.jpg?v=636549178870830000',
                description: '110v, branco'
            }]
    }
  },
  methods: {
    async produtosAll() {
      try {
        const response = await fetch("http://localhost:3000/produto", {
          method: 'GET'
        });
        const data = await response.json();
        this.product = data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    verDetalhes(id) {
      this.$router.push(`/produto/${id}`)
    },
  },
  mounted() {
    this.produtosAll(); // Chamada do método produtosAll() durante o ciclo de vida do componente
  }
}
</script>
