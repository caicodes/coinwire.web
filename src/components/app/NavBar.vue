<script setup>
import { onMounted } from "vue"
import gsap from "gsap"
import ScrollTo from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"
import Icon from "./Icon.vue"
import Logo from "./Logo.vue"

gsap.registerPlugin(ScrollTo)
gsap.registerPlugin(ScrollTrigger)

const navBarAnimation = gsap.timeline()
const items = ["welcome", "overview", "coins", "portfolio", "faq"]
const handleClick = (item) => {
  console.log("yo, clicked ", item)
  gsap.to(window, {
    duration: 1,
    ease: "expo.inOut",
    scrollTo: { y: "#" + item },
  })
}

onMounted(() => {
  let coinWireWidget = document.createElement('script')
  coinWireWidget.setAttribute('src', 'https://www.livecoinwatch.com/static/lcw-widget.js')
  document.head.appendChild(coinWireWidget)
  navBarAnimation
    .fromTo(".navbar, .navbarbelow", { y: -50 }, { y: 0, ease: "power4.inOu" })
    .fromTo(".menu li, .logo", { y: -50 }, { y: 0, stagger: 0.1 })
    .to(".navbar", { y: 0 })
})
</script>
<template>
  <div class="h-40">
    <div class="navbar bg-base-200 fixed z-50 p-4">
      <div class="nav flex w-full max-w-screen-2xl mx-auto">
        <div class="flex-1 logo">
          <a href="/" class="btn text-accent btn-link hover:no-underline hover:text-accent-focus normal-case text-xl">
            <div class="h-12 flex items-center text-primary">
              <div class="w-12">
                <Icon />
              </div>
              <div class="w-40">
                <Logo />
              </div>
            </div>
          </a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 uppercase mr-8">
            <li v-for="item in items" :key="item">
              <a @click="handleClick(item)" class="btn-link text-primary">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="navbarbelow pt-16 mt-3 fixed z-30 w-full">
      <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="var(--primary-light)" lcw-marquee-1="coins"
        lcw-marquee-2="movers" lcw-marquee-items="10"></div>
    </div>
  </div>
</template>

<style scoped>
.navbarbelow {
  background: #000b15;
}

.livecoinwatch-widget-5 {
  z-index: 9999;
  position: relative;
}

a.btn-link:hover {
  text-decoration: none;
  @apply bg-primary/10 rounded-none;
}
</style>