<template>
  <div v-if="!!image" class="w-5/6 rounded-md p-0.5 bg-primarySubContent">
    <img :src="image" :alt="alt" class="rounded-md object-scale-down">
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  alt: String
});
</script>

