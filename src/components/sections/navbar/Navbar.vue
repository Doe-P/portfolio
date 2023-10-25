<template>
  <div class="flex flex-col font-medium gap-4">
    <div class="flex flex-row items-center cursor-pointer" v-for="(item, index) in navbarMenus" :key="index"
         @mouseenter="onMouseEnter(index)" @mouseleave="onMouseLeave()">
      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-5 h-5 text-primaryTitle arrow-slide" :class="menuActive === item.key? '':'hidden'">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
        </svg>
      </div>
     <div :class="menuActive === item.key? 'translate-x-2':''" class="transition-all duration-150 ease-out">
       {{ item.title }}
     </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const navbarMenus = reactive([
  {
    title: "About",
    key: "section-about",
  }, {
    title: "Skills",
    key: "section-skills",
  }, {
    title: "Experience",
    key: "section-experience",
  }, {
    title: "Projects",
    key: "section-projects",
  },
]);
const menuActive = ref('');

const onMouseEnter = (index) => {
  menuActive.value = navbarMenus[index].key;
}
const onMouseLeave = () => {
  menuActive.value = '';
}
</script>

