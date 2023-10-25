<template>
  <div class="text-sm text-primaryContent line-clamp-5" v-for="(item, index) in props.description" :key="index">{{item}}</div>
</template>

<script setup>
const props = defineProps({description: {type: Array, required: true}});
</script>
