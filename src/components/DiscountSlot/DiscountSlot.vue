<template>
    <div>
        <div style="display: flex; align-items: center;">
            <p>Discount Price:</p>
            <slot name="price" :discount="discount">
                0
            </slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const discount = ref(0.75);

</script>
