<template>
  <div class="w-full grid gap-20 lg:gap-30 px-5 mb-14">
    <About/>
    <CardContainer :data="experience"/>
    <CardContainer :data="projects"/>
  </div>
</template>

<script setup>
import About from "./about/About.vue";
import CardContainer from "../CardContainer/CardContainer.vue";
import {experience} from "../../contents/experience.js";
import {projects} from "../../contents/projects.js";

</script>

<style scoped>

</style>
