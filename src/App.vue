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
      <div class="mx-auto flex justify-center">
        <div class="livecoinwatch-widget-1" lcw-coin="BTC" lcw-base="USD" lcw-secondary="BTC" lcw-period="d"
          lcw-color-tx="#ffffff" lcw-color-pr="#58c7c5" lcw-color-bg="#000b15" lcw-border-w="1"></div>
      </div>

      <div class="h-96 flex flex-col place-items-center">

        <div class="text-2xl p-20 mx-auto">Complete cryptocurrency market coverage with live coin prices, charts
          and crypto market cap featuring 18967 coins on 506 exchanges.
        </div>
        <button class="mx-auto btn btn-primary">Register Now</button>
      </div>

    </Screen>
    <Screen id="coins" class="bg-base-100">
      <div class="text-center text-3xl">Coins Overview</div>
      <div class="mx-auto flex justify-center w-1/2">
        <div class="livecoinwatch-widget-3" lcw-base="USD" lcw-d-head="true" lcw-d-name="true" lcw-d-code="true"
          lcw-d-icon="true" lcw-color-tx="#ffffff" lcw-color-bg="#000b15" lcw-border-w="1"></div>
      </div>
    </Screen>
    <Screen id="portfolio" class="bg-base-200">

      <div class="hero-content flex-col lg:flex-row-reverse mx-auto my-20">
        <div class="text-center lg:text-left p-8">
          <h1 class="text-5xl font-bold ">Login</h1>
          <p class="py-6">Please login to access your portfolios and settings.</p>
          <p class="py-6">Don't have an account? Sign up now.</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-bordered" />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>

    </Screen>
    <!-- <Screen id="faq" class="bg-primary/5">
      Frequently Asked Questions
    </Screen> -->
    <Footer />
  </div>
</template>
