<template>
    <div>
        <button @click="loadPopup">Open Async Popup</button>

        <PopupComponent1 v-if="isPopupLoaded" />

        <component
            v-if="isPopupLoaded"
            :is="popupComponent"
        />
    </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
import PopupComponent1 from '../PopupComponent1/PopupComponent1.vue';

export default {
    name: 'DemoAsyncComponent',
    components: {
        PopupComponent1
    },
    setup() {
        const isPopupLoaded = ref(false);
        const popupComponent = ref(null);

        const loadPopup = () => {
            if (!popupComponent.value) {
                popupComponent.value = defineAsyncComponent({
                    loader: () => new Promise((resolve, reject) => {
                        console.log("Starting to load PopupComponent2...")
                        setTimeout(() => {
                            import('../PopupComponent2/PopupComponent2.vue')
                            .then(component => {
                                resolve(component);
                            })
                        }, 2000);
                    })
                });
            }
            isPopupLoaded.value = true;
        };

        return {
            isPopupLoaded,
            popupComponent,
            loadPopup
        };
    }
};
</script>
