
    
<template>
    <button
        class="py-2 px-4 
        bg-purple-500 
        text-white 
        font-semibold 
        rounded-lg 
        shadow-md 
        hover:bg-purple-700 
        focus:outline-none 
        focus:ring-2 
        focus:ring-purple-400"
        @click="add();increaseCounter();">Vue clicks: {{count}} {{commonCounter.value}}</button>
</template>




<script>
import { useStore } from '@nanostores/vue';

import { counter, increaseCounter } from '../store/counter.js';

export default {
    setup() {
        const commonCounter = useStore(counter);

        return { count: 0, commonCounter, increaseCounter };
    },
    methods: {
        add() {
            this.count++;
        }
    }
};


</script>