<template>
    <div class="flex place-content-center">
        <div class="left w-1/2 place-content-center flex flex-col">
            <div class="main-text mb-4 p-20 gap-4 flex flex-col">
                <div class="text-7xl font-semibold mt-4">Cryptocurrency Prices Live</div>
                <div class="sub-title text-3xl px-2">Top Coins by Market Cap</div>
                <div class="text-2xl w-2/3 px-2">Explore crypto like Bitcoin, Ethereum, and Dogecoin
                    Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</div>
                <button class="btn btn-accent btn-outline w-44 btn-lg mx-2 mt-4">view coins</button>
            </div>
        </div>
        <div class="phone">
            <div class="mockup-phone border-primary">
                <div class="camera"></div>
                <div class="display">
                    <div class="artboard artboard-demo phone-1 place-content-start">
                        <div class="phone-logo mt-8">
                            <div class="h-12 flex items-center text-primary">
                                <div class="w-12">
                                    <Icon />
                                </div>
                                <div class="w-40 mr-5">
                                    <Logo />
                                </div>
                            </div>
                        </div>
                        <div class="bg-black w-full h-56 mt-2  ">chart</div>
                        <div class="flex flex-col gap-2 mt-8 phone-buttons">
                            <button class="btn btn-primary btn-outline btn-sm">view porftolio</button>
                            <button class="btn btn-warning btn-outline btn-sm">view porftolio</button>
                            <button class="btn btn-accent btn-outline btn-sm">view porftolio</button>
                            <button class="btn btn-success btn-outline btn-sm">view porftolio</button>
                            <button class="btn btn-error btn-outline btn-sm">view porftolio</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap'
import Icon from "../app/Icon.vue"
import Logo from "../app/Logo.vue"
const tL = gsap.timeline()
console.log(tL)

onMounted(() => {
    gsap.set(".phone", {
        y: 300
    })
    gsap.to(".phone", {
        y: 80
    })

})
</script>

