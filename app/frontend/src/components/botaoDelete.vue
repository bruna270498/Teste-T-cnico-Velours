<template>
    <div>
      <!-- Botão de delete -->
      <button @click="deleteProduct">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async deleteProduct() {
        try {
          // Obtém o ID do produto da URL do front-end
          const id = this.$route.params.id;
  
          // Faz a requisição para a rota de delete na API
          const response = await fetch(`http://localhost:3000/produto/${id}`, {
            method: 'DELETE'
          });
  
          if (response.ok) {
            // Deleção bem-sucedida
            console.log('Produto deletado com sucesso');
          } else {
            // Tratar erros caso necessário
            console.error('Erro ao deletar o produto');
          }
        } catch (error) {
          // Tratar erros caso necessário
          console.error('Erro ao fazer a requisição de delete', error);
        }
      }
    }
  };
  </script>
  