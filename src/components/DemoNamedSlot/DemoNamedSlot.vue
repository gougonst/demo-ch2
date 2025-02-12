<template>
    <div>
        <button @click="toggleNamedPopup">Named Slot Demo</button>

        <PopupSlot :style="popupStyle"></PopupSlot>

        <p :style="popupStyle">-----------------------------------------------</p>

        <PopupSlot :style="popupStyle">
            <template v-slot:footer>
                <p>Copyright © 2025 Haha</p>
            </template>

            <template #header>
                <p>Enter the message</p>
            </template>

            <input :placeholder="msg" />
        </PopupSlot>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import PopupSlot from '../PopupSlot/PopupSlot.vue';

export default {
    name: 'DemoNamedSlot',
    components: {
        PopupSlot
    },
    setup() {
        const isNamedShow = ref(false);
        const msg = ref("I'm from parent");

        const popupStyle = computed(() => {
            return {
                'display': isNamedShow.value ? "block" : "none"
            };
        });

        const toggleNamedPopup = () => {
            isNamedShow.value = !isNamedShow.value;
        };

        return {
            msg,
            popupStyle,
            toggleNamedPopup
        };
    }
};
</script>
