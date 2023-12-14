<template>
  <div class="hidden lg:flex flex-col font-medium gap-4">
    <div class="flex flex-row items-center cursor-pointer" v-for="(item, index) in navbarMenus" :key="index"
         @mouseenter="onMouseEnter(index)" @mouseleave="onMouseLeave()" @click="handleClick(item.key)">
      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-5 h-5 arrow-slide" :class="currentSectionId === item.key? 'text-primaryTitle':menuActive === item.key?'':'hidden'">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
        </svg>
      </div>
      <div :class="menuActive === item.key || currentSectionId === item.key? 'translate-x-2 text-primaryHeader':''" class="transition-all duration-150 ease-out">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {navbarMenus} from "../../../contents/navbar.js";
import {useSectionStore} from "../../../store/useStore.js";

const menuActive = ref('');
const sectionStore = useSectionStore();

const currentSectionId = computed(() => sectionStore.getCurrentSection);
const onMouseEnter = (index) => {
  menuActive.value = navbarMenus[index].key;
}
const onMouseLeave = () => {
  menuActive.value = '';
}

const handleClick = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
  sectionStore.setCurrentSectionId(sectionId);
}
</script>

