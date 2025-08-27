<script setup lang="ts">

</script>

<template>
  <nav
    class=" top-0 p-4 py-5 bg-stone-800 text-orange-50 shadow-2xs shadow-orange-500 drop-shadow-orange-400 drop-shadow-sm ">
    <ul class="flex justify-center gap-6 animate-pulse hover:border-x-3 transition-all duration-100">
      <li class=" mr-3 hover:opacity-70 hover:text-orange-400">
        <router-link to="/skills">Skills</router-link>
      </li>
      <li class=" mr-3 hover:opacity-75 hover:text-orange-400">
        <router-link to="/badges">Badges</router-link>
      </li>
      <li class=" mr-3 hover:opacity-75 hover:text-orange-400">
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped></style>
