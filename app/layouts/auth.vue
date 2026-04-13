<template>
  <div
    class="relative min-h-screen bg-neutral-950 text-white font-sans flex items-center justify-center p-4 selection:bg-rose-400 selection:text-white"
  >
    <div class="fixed inset-0 z-0 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
        alt="Background"
        class="w-full h-full object-cover opacity-30 mix-blend-luminosity"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/90 to-neutral-950"
      ></div>
    </div>

    <NuxtLink
      to="/"
      class="absolute top-6 left-6 md:top-10 md:left-10 z-20 text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase"
    >
      &larr; Kembali
    </NuxtLink>

    <div
      class="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
</style>
