require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router'
import PinsIndex from './components/pins/PinsIndex'

createApp({
    components: {
        PinsIndex
    }
}).use(router).mount('#app')