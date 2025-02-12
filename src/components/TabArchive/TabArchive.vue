<template>
    <div><input v-model="title"></div>
</template>

<script>
import { getCurrentInstance, onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue';

export default {
    name: 'TabArchive',
    setup() {
        const title = ref('Archive component');

        onMounted(() => {
            console.log(`${getCurrentInstance().type.name} mounted`);
        });

        onActivated(() => {
            console.log(`${getCurrentInstance().type.name} activated`);
        });

        onDeactivated(() => {
            console.log(`${getCurrentInstance().type.name} deactivated`);
        });

        onUnmounted(() => {
            console.log(`${getCurrentInstance().type.name} unmounted`);
        });

        return {
            title
        }
    }
};
</script>
