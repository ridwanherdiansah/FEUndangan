<script lang="ts" setup>
definePageMeta({ layout: 'auth' })
</script>

<template>
  <div>
    <div class="text-center mb-10">
      <h1 class="font-['Playfair_Display'] text-4xl mb-2">Reset <span class="italic text-rose-300">Password.</span></h1>
      <p class="text-gray-400 font-light text-sm">Masukkan email Anda untuk menerima tautan reset kata sandi.</p>
    </div>

    <form class="flex flex-col gap-5">
      <div>
        <label class="block text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-2 ml-2">Email Address</label>
        <input type="email" placeholder="nama@email.com" class="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-600 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors">
      </div>

      <button type="button" class="w-full bg-white text-black py-4 rounded-xl font-semibold uppercase text-xs tracking-[0.15em] hover:bg-rose-400 hover:text-white transition-all mt-4">
        Kirim Tautan Reset
      </button>
    </form>

    <div class="mt-8 text-center">
      <NuxtLink to="/auth/login" class="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
        &larr; Kembali ke Login
      </NuxtLink>
    </div>
  </div>
</template>