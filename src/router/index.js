import { createRouter, createWebHistory } from 'vue-router';
import DemoAsyncComponent from '@/components/DemoAsyncComponent/DemoAsyncComponent.vue';
import DemoIf from '@/components/DemoIf/DemoIf.vue';
import DemoIs from '@/components/DemoIs/DemoIs.vue';
import DemoShow from '@/components/DemoShow/DemoShow.vue';
import DemoKeepAliveIs from '@/components/DemoKeepAliveIs/DemoKeepAliveIs.vue';
import DemoNamedSlot from '@/components/DemoNamedSlot/DemoNamedSlot.vue';
import DemoDynamicSlot from '@/components/DemoDynamicSlot/DemoDynamicSlot.vue';
import DemoScopedSlot from '@/components/DemoScopedSlot/DemoScopedSlot.vue';
import DemoTeleport from '@/components/DemoTeleport/DemoTeleport.vue';
import DemoTransition from '../components/DemoTransition/DemoTransition.vue';
import DemoTransitionHook from '@/components/DemoTransitionHook/DemoTransitionHook.vue';

const routes = [
    { path: '/demo-async-comp', component: DemoAsyncComponent },
    { path: '/demo-if', component: DemoIf },
    { path: '/demo-is', component: DemoIs  },
    { path: '/demo-show', component: DemoShow },
    { path: '/demo-keepalive-is', component: DemoKeepAliveIs },
    { path: '/demo-named-slot', component: DemoNamedSlot },
    { path: '/demo-dynamic-slot', component: DemoDynamicSlot },
    { path: '/demo-scoped-slot', component: DemoScopedSlot },
    { path: '/demo-teleport', component: DemoTeleport },
    { path: '/demo-transition', component: DemoTransition },
    { path: '/demo-transition-hook', component: DemoTransitionHook }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
