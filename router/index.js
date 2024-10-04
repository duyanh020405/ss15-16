// Define the routes
import HomeVue from '../views/HomeVue.vue';
import ContactVue from '../views/ContactVue.vue';
import B1 from '@/components/B1.vue';
import B2 from '@/components/B2.vue';
import B3 from '@/components/B3.vue';
import B4 from '@/components/B4.vue';
import B5 from '@/components/B5.vue';
import B9b from '@/components/B9b.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Profile from '@/views/Profile.vue';
import ProductView from '@/views/ProductView.vue';
const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeVue,
    },
    {
        path: '/contact', // Corrected from '/contac' to '/contact'
        name: 'contact',
        component: ContactVue,
    },
    {
        path: '/',
        name: 'bt1',
        component: B1,
    },
    {
        path: '/page2', // Assuming B2 is a second page
        name: 'bt2',
        component: B2,
    },
    {
        path: '/register',
        name: 'register',
        component: B3,
    },
    {
        path: '/login',
        name: 'login',
        component: B4,
    },
    {
        path: '/:pathMatch(.*)*', // Catch-all route for 404 pages
        name: 'NotFound',
        component: B5,
    },
    {
        path: '/product', 
        name: 'product',
        component: ProductView,
        children:[            {
                path:"detail",
                name:"",
                component:"",

            }
        ]

    },
    { path: '/B9b/:id', name: 'Detail', component:B9b},
];

// Create a router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Export the router to be used in the application
export default router;
