<script lang="ts" setup>
  definePageMeta({ layout: 'auth' })
</script>

<template>
  <div>
    <div class="text-center mb-10">
      <h1 class="font-['Playfair_Display'] text-4xl mb-2">
        Welcome <span class="italic text-rose-300">Back.</span>
      </h1>
      <p class="text-gray-400 font-light text-sm">Masuk untuk mengelola undangan Anda.</p>
    </div>

    <AuthLoginForm />

    <div class="mt-8 text-center">
      <p class="text-xs font-light text-gray-400">
        Belum punya akun?
        <NuxtLink
          to="/auth/register"
          class="text-white font-medium hover:text-rose-300 transition-colors ml-1"
          >Buat Sekarang</NuxtLink
        >
      </p>
    </div>
  </div>
</template>
