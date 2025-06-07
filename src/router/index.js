import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import jobView from '@/views/jobView.vue';
import AddJobView from '@/components/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/jobs/:id',
            name: 'jobView',
            component: jobView,
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView,
        },
                {
            path: '/jobs/:id/edit',
            name: 'edit-job',
            component: EditJobView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        }
    ],
});

export default router;