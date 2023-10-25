<template>
  <div class="">
    <div class="flex items-center mx-1">
      <span class="text-primaryAccent font-medium">{{ data.title }}</span>
    </div>
    <div class="grid gap-y-4 mt-3">
      <div class="grid grid-cols-[25%_75%] px-2 py-5 rounded-2xl group transition-all hover:bg-primaryBase"
           v-for="(item, index) in data.data"
           :key="index"
      >
        <div class="space-y-4">
          <DateFormat :date="item.date"/>
          <Picture :picture="item.picture"
                   :alt="item.title.name"/>
        </div>
        <div class="flex flex-col gap-4">
          <TitleLink :title="item.title.name" :link="item.title.link"/>
          <Material :material-link="item.materialLink"/>
          <Description v-if="item.description.length > 0" :description="item.description"/>
          <TechStack :tech-stacks="item.techStack"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleLink from "../TitleLink/TitleLink.vue";
import Material from "../Material/Material.vue";
import Description from "../Description/Description.vue";
import TechStack from "../TechStack/TechStack.vue";
import DateFormat from "../date/DateFormat.vue";

const props = defineProps({data: {type: Object, required: true,}});
</script>
