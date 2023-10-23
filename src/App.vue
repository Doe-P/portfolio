<template>
  <main class="max-w-6xl mx-auto">
    <div class="grid lg:grid-cols-[2fr_3fr] px-5 pb-7 pt-14 tracking-wide font-popins">
      <div class="">
        <div class="sticky top-14 h-[90vh] grid grid-rows-[70%_30%] gap-6 lg:grid-rows-[3fr_40%_20%] lg:gap-14">
          <Header/>
          <Navbar/>
          <Contact/>
        </div>
      </div>
      <div class="">
        <div class="h-screen">About</div>
        <div class="h-screen">Experiences</div>
        <div class="h-screen">Contact</div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Header from "./sections/header/Header.vue";
import Navbar from "./sections/navbar/Navbar.vue";
import Contact from "./sections/contact/Contact.vue";
</script>
