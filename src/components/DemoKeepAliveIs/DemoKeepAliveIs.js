import { computed, ref } from 'vue';
import TabBar from '../TabBar/TabBar.vue';
import TabHome from "../TabHome/TabHome.vue";
import TabPosts from "../TabPosts/TabPosts.vue";
import TabArchive from "../TabArchive/TabArchive.vue";

export default {
    name: 'DemoKeepAliveIs',
    components: {
        TabBar,
        TabHome,
        TabPosts,
        TabArchive
    },
    setup() {
        const tabs = ['Home', 'Posts', 'Archive'];
        const currentTab = ref('Home');
        const includeSet = ref(new Set());

        const includeKeepAlive =() => {
            includeSet.value.add(`Tab${currentTab.value}`);
            console.log(includeSet.value);
        };

        const excludeKeepAlive = () => {
            includeSet.value.delete(`Tab${currentTab.value}`);
        }

        const currentTabComponent = computed(() => {
            return `Tab${currentTab.value}`;
        });

        const includeTabComponents = computed(() => {
            return Array.from(includeSet.value);
        });

        return {
            tabs,
            currentTab,
            currentTabComponent,
            includeTabComponents,
            includeKeepAlive,
            excludeKeepAlive
        };
    }
};
