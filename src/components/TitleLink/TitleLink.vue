<template>
    <a :href="link" target="_blank" class="text-primaryAccent group-hover:text-primaryTitle flex cursor-pointer">
      <span>{{title}}</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 -rotate-45 translate-y-1 text-sm ease-out duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    </a>
</template>
<script setup>
const props = defineProps({ title: String, link: String,});

</script>

