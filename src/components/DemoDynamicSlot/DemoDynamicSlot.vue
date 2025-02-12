<template>
    <div>
        <button @click="toggleDynamicPopup">Dynamic Slot Demo</button>
        <label :style="popupDynamicStyle" v-for="opt in options">
            <input type="radio" :value="opt" v-model="dynamicSlotName"> {{ opt }}
        </label>
        <PopupSlot :style="popupDynamicStyle">
            <template v-slot:[dynamicSlotName]>
                <p>Copyright © 2025 Haha</p>
            </template>
        </PopupSlot>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import PopupSlot from '../PopupSlot/PopupSlot.vue';

export default {
    name: 'DemoDynamicSlot',
    components: {
        PopupSlot
    },
    setup() {
        const isDynamicShow = ref(false);
        const msg = ref("I'm from parent");
        const options = ref(["header", "footer", "default"]);
        const dynamicSlotName = ref("header");

        const popupDynamicStyle = computed(() => {
            return {
                'display': isDynamicShow.value ? "block" : "none"
            };
        });

        const toggleDynamicPopup = () => {
            isDynamicShow.value = !isDynamicShow.value;
        };

        return {
            msg,
            options,
            dynamicSlotName,
            popupDynamicStyle,
            toggleDynamicPopup
        };
    }
};
</script>
