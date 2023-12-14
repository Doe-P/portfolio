<template>
  <section>
    <div class="text-2xl text-primaryTitle md:text-3xl font-bold pb-3">{{ data.name }}</div>
    <div class="space-x-2 pb-3 text-primaryHeader">
      <span>{{ data.title }}</span>
    </div>
    <div class="text-sm w-5/6 pb-3">
      {{ data.description }}
    </div>
    <div class="mt-5">
      <a :href="data.link" target="_blank"
         class="text-sm px-5 py-3 rounded-md duration-300 ease-in-out flex flex-row w-fit text-center items-center gap-2 bg-primaryTitle text-primaryHeader hover:bg-primaryAccent cursor-pointer">
                  <span class="-rotate-90 inline-block">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 animate-bounce">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"/>
</svg>
                  </span>{{ data.buttonText }}</a>
    </div>
  </section>
</template>

<script setup>
import {data} from "../../../contents/header.js";</script>

