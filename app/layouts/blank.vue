<template>
  <div class="bg-white text-black font-sans min-h-screen selection:bg-black selection:text-white">
    <slot />
  </div>
</template>

<style scoped>
/* Pastikan konsistensi gaya brutalist / tanpa lengkungan terbawa ke layout ini */
* {
  border-radius: 0 !important;
}
</style>