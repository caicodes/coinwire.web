<template>
  <div class="flex w-full max-w-screen-2xl mx-auto my-40">

    <footer class="footer text-base-content">
      <div class="p-4">
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
        <p class="ml-8 text-lg">Realtime and Reliable Cryptocurrency Data</p>
      </div>
      <div>
        <span class="footer-title">Popular Coins</span>
        <a class="link link-hover">Bitcoin (BTC)</a>
        <a class="link link-hover">Ethereum (ETH)</a>
        <a class="link link-hover">Ripple (XRP)</a>
        <a class="link link-hover">Bitcoin Cash (BCH)</a>
        <a class="link link-hover">Litecoin (LTC)</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>

    </footer>
  </div>
</template>

<script setup>
import Icon from './Icon.vue'
import Logo from './Logo.vue';
</script>