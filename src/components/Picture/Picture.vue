<template>
  <div v-if="!!picture" class="w-5/6 rounded-md p-0.5 bg-primarySubContent">
    <img :src="picture" :alt="alt" class="rounded-md object-scale-down">
  </div>
</template>

<script setup>
const props = defineProps({
  picture: String,
  alt: String
});
</script>

