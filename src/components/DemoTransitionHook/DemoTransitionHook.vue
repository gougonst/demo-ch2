<template>
    <button @click="getUserInfo">Get user information</button>

    <div :style="{height: height + 'px'}">
        <div v-if="userInfo.name" ref="content">
            <h2>{{ userInfo.name }} / @{{ userInfo.username }}</h2>

            <img src="https://dummyimage.com/200x200/666/fff" alt="dummyimage">
            <div>
                <p>{{ userInfo.company.name }}</p>
                <p>{{ userInfo.phone }}</p>
                <p>{{ userInfo.email }}</p>
            </div>
        </div>
    </div>

    <Transition @before-enter="beforeEnter" @before-leave="beforeLeave">
        <div v-if="isLoading" class="loading">
            <img src="https://raw.githubusercontent.com/kurotanshi/vue-functional-demo/master/loading.gif">
        </div>
    </Transition>
</template>

<script setup>
import { nextTick, ref } from 'vue';


const height = ref(0);
const isLoading = ref(false);
const userInfo = ref({});
const content = ref(null);

const getUserInfo = async () => {
    isLoading.value = true;
    userInfo.value = {};

    let userId = Math.floor(Math.random() * 10) + 1;
    let res = await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json());

    window.setTimeout(() => {
        isLoading.value = false;
        userInfo.value = res;
    }, 2000);
}

const beforeEnter = () => {
    height.value = 0;
}

const beforeLeave = async () => {
    await nextTick();
    height.value = content.value.getBoundingClientRect().height;
}
</script>

<style>
.loading {
    display: block;
    margin: 0 auto;
    text-align: center;

    img {
        border: none;
    }
}
</style>
