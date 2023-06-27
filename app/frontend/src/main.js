import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue'
import './registerServiceWorker';
import routerInstance from './router';

// Importe o componente que deseja exibir quando o botão for clicado
import ProdutoId from './views/ProdutoId.vue';
import Produtos from './views/Produto.vue';

// Crie as rotas
const routes = [
  { path: '/produtos/:id', component: ProdutoId },
  { path: '/produtos', component: Produtos },
  // Adicione outras rotas se necessário
];

// Crie o roteador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Crie a instância do Vue e conecte o roteador
const app = createApp(App);
app.use(routerInstance);
app.mount('#app');
