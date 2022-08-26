<script setup>
import NavBar from "./components/app/NavBar.vue"
import Screen from "./components/Screen.vue"
import { box, container, yo1, yo2, yo3, yo4 } from "./App.css.ts"
import Phone from "./components/mockups/Phone.vue"
import Code from "./components/mockups/Code.vue"
import { btnListFull } from "./constants/Styleguide"
import SafeListTailwind from "./components/app/SafeListTailwind.vue"
import ThemeChanger from "./components/app/ThemeChanger.vue"
import Icon from "./components/app/Icon.vue"
import Logo from "./components/app/Logo.vue"

const containerStyles = container
const boxStyles = box
const yo1Styles = yo1
const yo2Styles = yo2
const yo3Styles = yo3
const yo4Styles = yo4

const btnList = btnListFull

const btnVariants = ["glass", "loading", "no-animation"]
console.log("currently unused... btnVariants ", btnVariants)

const btnSizes = ["xs", "sm", "md", "lg", "wide", "block", "circle", "square"]
</script>

<template>
  <SafeListTailwind />
  <NavBar />
  <div :class="containerStyles">
    <Screen id="yo1" :class="yo1Styles" class="bg-base-100"
      ><div class="box box-1 flex p-8 mt-8 ml-48" :class="boxStyles">
        <Phone>
          <!-- <div class="text-primary-focus"><ThemeChanger /></div> -->

          <div class="flex items-center text-primary">
            <div class="w-16"><Icon /></div>
            <div class="w-48 mr-4"><Logo /></div>
          </div>
        </Phone></div
    ></Screen>
    <Screen id="yo2" :class="yo2Styles" class="bg-base-200"
      ><div class="box box-2" :class="boxStyles">
        <Code /></div
    ></Screen>
    <Screen id="yo3" :class="yo3Styles" class="bg-base-300"
      ><div class="box box-3" :class="boxStyles">
        <div
          v-for="item in btnList"
          class="p-8 m-1 cursor-pointer"
          :class="`bg-${item}/10 hover:bg-${item} text-${item}`"
          :key="item"
        >
          {{ item }}
        </div>
      </div></Screen
    >
    <Screen id="yo4" :class="yo4Styles" class="bg-secondary-focus/10"
      ><div class="box box-4" :class="boxStyles">
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
      </div></Screen
    ><Screen id="yo5" class="bg-primary/10">
      <div v-for="size in btnSizes" :key="size" class="space-x-2 space-y-2">
        <button
          v-for="item in btnList"
          :key="item"
          class="btn"
          :class="`btn-${item} btn-${size}`"
        >
          {{ item }} {{ size }}
        </button>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Responsive
        </button>
      </div>
    </Screen>

    <Screen
      v-for="item in btnList"
      :class="`bg-${item}/10`"
      :key="item"
      :id="item"
      >screen-'' {{ item }}</Screen
    >
  </div>
</template>
