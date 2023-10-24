<template>
  <main class="max-w-6xl mx-auto">
    <div class="grid lg:grid-cols-[2fr_3fr] gap-y-5 tracking-wide font-popins mt-14">
      <LeftSection/>
      <RightSection/>
    </div>
  </main>
</template>

<script setup>
import LeftSection from "./components/sections/LeftSection.vue";
import RightSection from "./components/sections/RightSection.vue";
</script>
