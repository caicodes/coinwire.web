<template>
  <div class="mt-96">
    <div class="mockup-phone border-primary">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-1 bg-base-300">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.phone-1 {
  @apply bg-primary;
}
</style>
