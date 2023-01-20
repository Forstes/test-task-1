<script setup lang="ts">
import router from "@/plugins/router";
</script>

<template>
  <div class="h-screen min-w-[320px] overflow-hidden bg-gray-50">
    <nav class="sticky z-20 top-0 border-gray-200 px-4 py-2.5 bg-gray-100">
      <div class="flex flex-wrap items-center justify-between">
        <a class="flex items-center cursor-pointer">
          <span class="self-center text-xl font-semibold cursor-pointer" @click="router.push('/')">Logo</span>
        </a>

        <div class="w-auto cursor-pointer" @click="router.push('/cart')">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>

    <main class="flex h-[90%]">
      <router-view />
    </main>
  </div>
</template>
