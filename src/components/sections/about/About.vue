<template>
<section class="space-y-4 scroll-m-24" :id="data.id">
  <div class="flex items-center mx-3 text-primaryTitle">
    <span class="bg-white h-[1px] inline-block duration-500 transition-all ease-out" :class="currentSectionId === data.id? 'pr-10 mr-4':'pr-0'"></span>
    <span :id="data.id" class="font-medium font-sans text-md" :class="currentSectionId === data.id? 'text-primaryHeader':'text-primaryContent'">{{data.title}}</span>
  </div>
  <div class="text-md text-primaryContent font-sans pl-3">
    <p class="">{{data.description}}</p>
  </div>
</section>
</template>
<script setup>
import {data} from "../../../contents/about.js";
import {useSectionStore} from "../../../store/useStore.js";
import {computed, onMounted} from "vue";
const sectionStore = useSectionStore();

const currentSectionId = computed(() => sectionStore.getCurrentSection);

onMounted(() => {
  sectionStore.addSectionIds(data.id);
})
</script>

