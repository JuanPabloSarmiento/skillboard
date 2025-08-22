<template>


    <nav class=" top-0 p-4 bg-emerald-900 text-emerald-50 shadow-2xl  drop-shadow-xs drop-shadow-emerald-200">
        <ul class="flex gap-6">
            <li class=" mr-3 hover:opacity-75">
                <router-link to="/skills">Skills</router-link>
            </li>
            <li class=" mr-3 hover:opacity-75">
                <router-link to="/badges">Badges</router-link>
            </li>
        </ul>
    </nav>

    <router-view></router-view>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>