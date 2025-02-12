<template>
    <div>
        <div style="display: flex; align-items: center;">
            <p>Price:</p>
            <input v-model="price" placeholder="Please type price" />
        </div>

        <DiscountSlot>
            <template v-slot:price="discountSlot">
                <p>{{ price * discountSlot.discount }}</p>
            </template>
        </DiscountSlot>
    </div>
</template>

<script>
import { ref } from 'vue';
import DiscountSlot from '../DiscountSlot/DiscountSlot.vue';

export default {
    name: 'DemoScopedSlot',
    components: {
        DiscountSlot
    },
    setup() {
        const price = ref('');

        return {
            price
        };
    }
};
</script>
