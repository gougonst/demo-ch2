<template>
    <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab">
        {{ tab }}
    </button>
</template>

<script setup>
const tabs = defineModel('tabs', { required: true });
const currentTab = defineModel('currentTab', { required: true })
</script>
