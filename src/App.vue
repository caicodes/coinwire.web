<script setup>
import Code from "./components/mockups/Code.vue"
import NavBar from "./components/app/NavBar.vue"
import Screen from "./components/Screen.vue"
import { btnListFull } from "./constants/Styleguide"
import { container } from "./App.css.ts"
import Footer from "./components/app/Footer.vue"
import Hero from "./components/screens/Hero.vue"
const containerStyles = container
const btnList = btnListFull
const btnSizes = ["xs", "sm", "md", "lg", "wide", "block", "circle", "square"]
</script>

<template>
  <NavBar />
  <div :class="containerStyles" class="relative">
    <Hero />

    <Screen id="coins" class="bg-base-200">
      <div class="box box-2">
        <Code />
      </div>
    </Screen>
    <Screen id="overview" class="bg-base-300">
      <div class="box box-3 flex">
        <div v-for="item in btnList" class="p-8 m-1 cursor-pointer"
          :class="`bg-${item}/10 hover:bg-${item} text-${item}`" :key="item">
          {{ item }}
        </div>
      </div>
    </Screen>
    <Screen id="portfolio" class="bg-secondary-focus/10">
      <div class="box box-4 flex space-x-2">
        <button class="btn bg-secondary/10">Info</button>
        <button class="btn bg-primary/10">Info</button>
        <button class="btn btn-ghost loading">Info</button>
        <button class="btn btn-outline btn-primary loading">Info</button>
        <button class="btn btn-outline btn-info">Info</button>
        <button class="btn btn-outline btn-success">Success</button>
        <button class="btn btn-outline btn-warning">Warning</button>
        <button class="btn btn-outline btn-error">Error</button>
        <button class="btn btn-outline btn-primary">Primary</button>
        <button class="btn btn-outline btn-secondary">Secondary</button>
        <button class="btn btn-outline btn-accent">Accent</button>
        <div class="p-4 bg-black"><button class="btn glass">glass</button></div>
        <div class="p-4 bg-black/80">
          <button class="btn glass">glass</button>
        </div>
        <div class="p-4 bg-white"><button class="btn glass">glass</button></div>
        <div class="p-4 bg-base-300">
          <button class="btn glass">glass</button>
        </div>
        <div class="p-4 bg-primary">
          <button class="btn glass">glass</button>
        </div>
      </div>
    </Screen>
    <Screen id="about" class="bg-primary/10">
      <div v-for="size in btnSizes" :key="size" class="space-x-2 space-y-2">
        <button v-for="item in btnList" :key="item" class="btn" :class="`btn-${item} btn-${size}`">
          {{ item }} {{ size }}
        </button>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Responsive
        </button>
      </div>
    </Screen>
    <Screen id="faq" class="bg-primary/5">
      <div v-for="size in btnSizes" :key="size" class="space-x-2 space-y-2">
        <button v-for="item in btnList" :key="item" class="btn" :class="`btn-${item} btn-${size}`">
          {{ item }} {{ size }}
        </button>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Responsive
        </button>
      </div>
    </Screen>
    <Footer />
  </div>
</template>
