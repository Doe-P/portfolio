<template>
  <section :id="data.id" class="scroll-m-14">
    <div class="flex items-center mx-1">
      <span class="bg-white h-[1px] inline-block duration-500 transition-all ease-out" :class="currentSectionId === data.id? 'pr-10 mr-4':'pr-0'"></span>
      <span :id="data.id" class="font-medium font-sans text-md" :class="currentSectionId === data.id? 'text-primaryHeader':'text-primaryContent'">{{data.title}}</span>
    </div>
    <div class="grid gap-y-4 mt-3">
      <div class="grid grid-cols-[25%_75%] px-2 py-5 rounded-2xl group transition-all hover:bg-primarySubContent2/[0.2]"
           v-for="(item, index) in data.data"
           :key="index"
      >
        <div class="space-y-4">
          <DateFormat :date="item.date"/>
          <the-picture :image="item.picture"
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
  </section>
</template>

<script setup>
import TitleLink from "../TitleLink/TitleLink.vue";
import Material from "../Material/Material.vue";
import Description from "../Description/Description.vue";
import TechStack from "../TechStack/TechStack.vue";
import DateFormat from "../date/DateFormat.vue";
import {useSectionStore} from "../../store/useStore.js";
import {computed, onMounted} from "vue";
import ThePicture from "../Picture/ThePicture.vue";
const props = defineProps({data: {type: Object, required: true,}});
const sectionStore = useSectionStore();
const currentSectionId = computed(() => sectionStore.getCurrentSection);
onMounted(() => {
  sectionStore.addSectionIds(props.data.id);
})
</script>
