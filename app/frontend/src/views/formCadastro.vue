<template>
  <div>
    <h1>Formulário de Cadastro</h1>
    <form @submit="submitForm">
      <div>
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="price">Preço:</label>
        <input type="number" id="price" v-model="form.price" required>
      </div>
      <div>
        <label for="tipo">Tipo:</label>
        <input type="text" id="tipo" v-model="form.tipo" required>
      </div>
      <div>
        <label for="description">Descrição:</label>
        <textarea id="description" v-model="form.description" required></textarea>
      </div>
      <div>
        <label for="image">Imagem:</label>
        <input type="file" id="image" accept="image/*" @change="handleImageUpload" required>
        <img :src="imageUrl" alt="Imagem selecionada" v-if="imageUrl">
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        price: '',
        tipo: '',
        description: '',
        image: '' // adicione a propriedade image ao objeto form
      },
      imageUrl: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        // Converte a imagem para uma string base64 antes de enviar
        this.form.image = this.imageUrl;

        const response = await fetch('http://localhost:3001/produto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        if (response.ok) {
          // Cadastro bem-sucedido
          console.log('Produto cadastrado com sucesso');
          // Limpar o formulário
          this.form = {
            name: '',
            price: '',
            tipo: '',
            description: '',
            image: ''
          };
          this.imageUrl = '';
        } else {
          // Tratar erros caso necessário
          console.log('Erro ao cadastrar o produto');
        }
      } catch (error) {
        // Tratar erros caso necessário
        console.error('Erro ao fazer a requisição de cadastro', error);
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imageUrl = '';
      }
    }
  }
};
</script>
