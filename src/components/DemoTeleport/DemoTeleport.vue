<template>
    <div id="haha"></div>
    <div>
        <button @click="toggleNamedPopup">Teleport Demo</button>
        <TeleportSlot v-if="isShow">
            <template v-slot:footer>
                <p>Copyright © 2025 Haha</p>
            </template>

            <template #header>
                <p>Enter the message</p>
            </template>

            <input :placeholder="msg" />
        </TeleportSlot>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import TeleportSlot from '../TeleportSlot/TeleportSlot.vue';

export default {
    name: 'DemoTeleport',
    components: {
        TeleportSlot
    },
    setup() {
        const isShow = ref(false);
        const msg = ref("I'm from parent");

        const popupStyle = computed(() => {
            return {
                'display': isShow.value ? "" : "none"
            };
        });

        const toggleNamedPopup = () => {
            isShow.value = !isShow.value;
        };

        return {
            msg,
            isShow,
            popupStyle,
            toggleNamedPopup
        };
    }
};
</script>
