<template>
    <div class="popup-overlay">
        <div class="popup-content" @click.stop>
            <p>Popup Component 1</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log("Popup component 1 mounted");
});

</script>
