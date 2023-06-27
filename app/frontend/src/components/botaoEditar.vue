<template>
    <div>
      <button @click="editProduct" v-if="!isSubmitted && !showEditForm">Editar</button>
      <form v-if="showEditForm" @submit.prevent="submitForm">
        <h2>Editar Produto</h2>
        <div>
          <label for="editName">Nome:</label>
          <input type="text" id="editName" v-model="editForm.name" required>
        </div>
        <div>
          <label for="editPrice">Preço:</label>
          <input type="number" id="editPrice" v-model="editForm.price" required>
        </div>
        <div>
          <label for="editTipo">Tipo:</label>
          <input type="text" id="editTipo" v-model="editForm.tipo" required>
        </div>
        <div>
          <label for="editDescription">Descrição:</label>
          <textarea id="editDescription" v-model="editForm.description" required></textarea>
        </div>
        <div>
          <label for="editImage">Imagem (URL):</label>
          <input type="text" id="editImage" v-model="editForm.image" required>
        </div>
        <button type="submit">Atualizar</button>
      </form>
      <p v-if="isSubmitted">Produto atualizado com sucesso!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: null,
        showEditForm: false,
        isSubmitted: false,
        editForm: {
          name: '',
          price: '',
          tipo: '',
          description: '',
          image: ''
        }
      };
    },
    async created() {
      try {
        // Obter o ID do produto da URL
        const id = this.$route.params.id;
        // Fazer uma requisição GET para a API para obter os detalhes do produto
        const response = await fetch(`http://localhost:3000/produto/${id}`);
        if (response.ok) {
          const data = await response.json();
          this.product = data;
          // Preencher o formulário de edição com os dados atuais do produto
          this.editForm.name = data.name;
          this.editForm.price = data.price;
          this.editForm.tipo = data.tipo;
          this.editForm.description = data.description;
          this.editForm.image = data.image;
        } else {
          console.error('Erro ao obter os detalhes do produto');
        }
      } catch (error) {
        console.error('Erro ao obter os detalhes do produto', error);
      }
    },
    methods: {
      editProduct() {
        this.showEditForm = true;
        this.isSubmitted = false;
      },
      async submitForm() {
        this.isSubmitted = true;
        await this.updateProduct();
        this.showEditForm = false;
      },
      async updateProduct() {
        try {
          // Obter o ID do produto da URL
          const id = this.$route.params.id;
          // Fazer uma requisição PUT para a API para atualizar os dados do produto
          const response = await fetch(`http://localhost:3000/produto/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.editForm)
          });
          if (response.ok) {
            console.log('Produto atualizado com sucesso');
            // Redirecionar para a página de detalhes do produto
            this.$router.push(`/detalhes/${id}`);
          } else {
            console.error('Erro ao atualizar o produto');
          }
        } catch (error) {
          console.error('Erro ao atualizar o produto', error);
        }
      }
    }
  };
  </script>
  