<template>
  <div>
    <form v-if="step === 1" class="flex flex-col gap-5" @submit.prevent="step = 2">
      <div>
        <label class="block text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-2 ml-2">Full Name</label>
        <input type="text" placeholder="Nama Lengkap" class="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-600 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors">
      </div>

      <div>
        <label class="block text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-2 ml-2">Email Address</label>
        <input type="email" placeholder="nama@email.com" class="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-600 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors">
      </div>
      
      <div>
        <label class="block text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-2 ml-2">Password</label>
        <input type="password" placeholder="••••••••" class="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-600 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors">
      </div>

      <button type="submit" class="w-full bg-white text-black py-4 rounded-xl font-semibold uppercase text-xs tracking-[0.15em] hover:bg-rose-400 hover:text-white transition-all mt-4">
        Lanjutkan
      </button>
    </form>

    <form v-else class="flex flex-col gap-5 text-center" @submit.prevent="handleVerify">
      <div class="flex justify-between gap-2 mb-4">
        <input type="text" maxlength="1" class="w-14 h-14 text-center bg-black/30 border border-white/10 rounded-xl text-2xl text-white focus:outline-none focus:border-rose-400 transition-colors">
        <input type="text" maxlength="1" class="w-14 h-14 text-center bg-black/30 border border-white/10 rounded-xl text-2xl text-white focus:outline-none focus:border-rose-400 transition-colors">
        <input type="text" maxlength="1" class="w-14 h-14 text-center bg-black/30 border border-white/10 rounded-xl text-2xl text-white focus:outline-none focus:border-rose-400 transition-colors">
        <input type="text" maxlength="1" class="w-14 h-14 text-center bg-black/30 border border-white/10 rounded-xl text-2xl text-white focus:outline-none focus:border-rose-400 transition-colors">
      </div>

      <button type="submit" class="w-full bg-rose-400 text-white py-4 rounded-xl font-semibold uppercase text-xs tracking-[0.15em] hover:bg-white hover:text-black transition-all">
        Verifikasi Akun
      </button>

      <button @click="step = 1" type="button" class="text-xs font-light text-gray-400 hover:text-white mt-2">
        &larr; Kembali edit data
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const router = useRouter()

const step = ref(1) // state dikelola di dalam komponen form

const handleVerify = () => {
  // Nanti panggil fungsi register dari useAuth.ts
  router.push('/dashboard')
}
</script>