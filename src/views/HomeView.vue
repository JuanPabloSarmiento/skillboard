<template>



    <div class="p-10" v-if="isRootRoute">

        <section class="  bg-stone-700  p-10 rounded-2xl h-3/5 grid grid-cols-2 gap-2">

            <div class=" text-2xl font-bold text-orange-300 text-shadow-2xs text-shadow-orange-600">
                <h2 class=" text-center mb-4">Skills</h2>
                <ul
                    class=" text-[0.9rem] text-orange-50 p-5 text-shadow-none first-letter:text-2xl first-letter:text-orange-400">
                    <li class="">Demuestra tus capacidades </li>
                    <li class="first-letter:text-orange-400 first-letter:text-2xl">Encuentra tus fortalezas</li>
                    <li class="first-letter:text-orange-400 first-letter:text-2xl"> Visualiza tus metas</li>

                </ul>
            </div>
            <div
                class="text-2xl font-bold text-orange-300 text-shadow-2xs border-l-3 border-orange-50 text-shadow-orange-600">
                <h2 class=" text-center mb-5">Insignias</h2>
                <ul
                    class=" text-[0.9rem] text-orange-50 text-shadow-none first-letter:text-2xl first-letter:text-orange-400 p-5">
                    <li>Mide tus habilidades en distintas </li>
                    <li class="first-letter:text-orange-400 first-letter:text-2xl"></li>
                    <li class="first-letter:text-orange-400 first-letter:text-2xl"></li>
                    <li></li>
                </ul>

            </div>


        </section>



    </div>



    <main>
        <router-view></router-view>
    </main>

</template>
<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'


const route = useRoute()
</script>