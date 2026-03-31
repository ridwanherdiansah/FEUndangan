<script lang="ts" setup>
definePageMeta({ layout: 'auth' })
</script>

<template>
  <div>
    <div class="text-center mb-10">
      <h1 class="font-['Playfair_Display'] text-4xl mb-2">Create <span class="italic text-rose-300">Account.</span></h1>
      <p class="text-gray-400 font-light text-sm">Mulai perjalanan menuju hari bahagia Anda.</p>
    </div>

    <AuthRegisterForm />

    <div class="mt-8 text-center">
      <p class="text-xs font-light text-gray-400">
        Sudah memiliki akun? 
        <NuxtLink to="/auth/login" class="text-white font-medium hover:text-rose-300 transition-colors ml-1">Masuk</NuxtLink>
      </p>
    </div>
  </div>
</template>