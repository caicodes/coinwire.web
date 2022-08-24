<template>
  <div class="navbarbelow pt-16 -mt-1.5 fixed z-30 bg-base-200/50 w-full">
    <ul class="menu menu-horizontal bg-base-300/20">
      <li
        v-for="item in btnList"
        :key="item"
        :class="`text-${item} bg-${item}/10`"
      >
        <a @click="handleClick2(item)" class="btn-link hover:bg-inherit">{{
          item
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { btnListFull } from "../../constants/Styleguide"
const btnList = btnListFull

const handleClick2 = (item) => {
  console.log("NOTE::::>> This needs to be wired up", item)
}
</script>
