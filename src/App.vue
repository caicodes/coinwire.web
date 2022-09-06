<script setup>
import Code from "./components/mockups/Code.vue"
import NavBar from "./components/app/NavBar.vue"
import Screen from "./components/Screen.vue"
import Footer from "./components/app/Footer.vue"
import Hero from "./components/screens/Hero.vue"
</script>

<template>
  <NavBar />
  <div class="relative">
    <Hero />
    <Screen id="overview" class="bg-base-300">
      overview...
    </Screen>
    <Screen id="coins" class="bg-base-100">
      coins...
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
      </div>
    </Screen>

    <Screen id="faq" class="bg-primary/5">
      faq...
    </Screen>
    <Footer />
  </div>
</template>
