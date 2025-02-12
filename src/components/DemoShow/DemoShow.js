import { ref } from 'vue';
import TabBar from '../TabBar/TabBar.vue';
import TabHome from "../TabHome/TabHome.vue";
import TabPosts from "../TabPosts/TabPosts.vue";
import TabArchive from "../TabArchive/TabArchive.vue";

export default {
    name: 'DemoShow',
    components: {
        TabBar,
        TabHome,
        TabPosts,
        TabArchive
    },
    setup() {
        const tabs = ['Home', 'Posts', 'Archive'];
        const currentTab = ref('Home');

        return {
            tabs,
            currentTab
        };
    }
};
