<template>
  <div class="w-full grid gap-20 lg:gap-30 px-5">
    <About/>
    <CardContainer :data="experience"/>
  </div>
</template>

<script setup>
import About from "./about/About.vue";
import CardContainer from "../CardContainer/CardContainer.vue";
import {experience} from "../../contents/experience.js";
</script>

<style scoped>

</style>
