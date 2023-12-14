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
import {onMounted} from "vue";
import {useSectionStore} from "./store/useStore.js";

const sectionStore = useSectionStore();

const handleScroll = () => {
  for (let i = 0; i < sectionStore.sectionIds.length; i++) {
    const element = sectionStore.sectionIds[i];
    const elOffsetTop = document.getElementById(element).getClientRects()[0].y;
    const elHeight = document.getElementById(element).getClientRects()[0].height * 0.5;
    const viewHeight = window.innerHeight * 0.3;

    if (elOffsetTop <= 0) {
      if ((elOffsetTop + elHeight) > viewHeight) {
        sectionStore.currentSection = element;
      }
    } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
      sectionStore.currentSection = element;
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
})
</script>
