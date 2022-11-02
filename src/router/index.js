import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/indexHome.vue';
import Todos from '../pages/todos/indexTodo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/todos',
            name: 'Todos',
            component: Todos
        }
    ]
});

// 1 / home 2 /todos 3 /todos/create 4 /todos/:id

export default router;