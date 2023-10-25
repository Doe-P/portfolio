<template>
  <div class="flex flex-row gap-3 text-sm flex-wrap">
    <div class="bg-primarySubContent px-2 py-1 rounded-md group-hover:text-primaryTitle" v-for="(item, index) in props.techStacks">{{item}}</div>
  </div>
</template>

<script setup>
const props = defineProps({techStacks: {type: Array, required: true}});
</script>

