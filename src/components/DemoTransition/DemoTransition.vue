<template>
    <div style="display: flex">
        <div>
            <button @click="isShowSimple = !isShowSimple">Simple Demo</button>
            <Transition>
                <div class="block" v-show="isShowSimple">
                    Hello
                </div>
            </Transition>
        </div>

        <div>
            <button @click="isShowName = !isShowName">Name Demo</button>
            <div class="wrap">
                <Transition name="slide">
                    <div class="block" v-show="isShowName">
                        Hello
                    </div>
                </Transition>
            </div>
            <div class="wrap">
                <Transition name="fade">
                    <div class="block" v-show="isShowName">
                        Hello
                    </div>
                </Transition>
            </div>
        </div>

        <div>
            <button @click="isShowInOut = !isShowInOut">In/Out Demo</button>
            <div class="mode">
                <label><input v-model="mode" type="radio" value="in-out"> in-out</label>
                <label><input v-model="mode" type="radio" value="out-in"> out-in</label>
            </div>
            <div>
                <Transition name="fade" :mode="mode">
                    <div class="block" v-if="isShowInOut">Block 1</div>
                    <div class="block" v-else>Block 2</div>
                </Transition>
            </div>
        </div>

        <div>
            <button @click="add">Add</button>
            <button @click="flush">Flush</button>
            <div>
                <TransitionGroup tag="ul" name="list" class="number-list">
                    <li v-for="(item, index) in randomList" :key="index">{{ item }}</li>
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const isShowSimple = ref(false);
const isShowName = ref(false);
const isShowInOut = ref(false);
const mode = ref("in-out")
const randomList = ref([]);

const add = () => {
    let rnd = Math.ceil(Math.random() * 100) + 1;
    randomList.value.push(rnd);
}

const flush = () => {
    randomList.value.length = 0;
}

</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 1s ease;
}

.slide-enter-from {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.list-enter-active,
.list-leave-active,
.list-move {
    transition: opacity 1s, transform 1s;
}

.list-leave-action {
    position: absolute;
}

.list-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.list-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.block {
    display: block;
    width: 150px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-color: #0f0;
}

.wrap {
    display: block;
    width: 150px;
    height: 100px;
    overflow: hidden;
    margin-right: 1.5rem;
}

.number-list {
    overflow: hidden;
    padding: 0;
    margin-bottom: 1.5rem;

    > li {
        display: inline-block;
        flex: left;
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        background-color: #f00;
        color: #fff;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
}
</style>
