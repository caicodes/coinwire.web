<script setup>
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
      portfolio...
    </Screen>
    <Screen id="faq" class="bg-primary/5">
      faq...
    </Screen>
    <Footer />
  </div>
</template>
