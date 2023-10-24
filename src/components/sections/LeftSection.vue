<template>
  <div class="px-5">
    <div class="sticky top-14 grid lg:grid-rows-[3fr_40%_20%] gap-y-5 lg:h-[87vh]">
      <Header/>
      <Navbar/>
      <Contact/>
    </div>
  </div>
</template>

<script setup>
import Header from "./header/Header.vue";
import Navbar from "./navbar/Navbar.vue";
import Contact from "./contact/Contact.vue";
</script>

<style scoped>

</style>
