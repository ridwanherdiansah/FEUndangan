<template>
  <form class="flex flex-col gap-5" @submit.prevent="handleLogin">
    <div>
      <label class="block text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-2 ml-2"
        >Email Address</label
      >
      <input
        type="email"
        placeholder="nama@email.com"
        class="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-600 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors"
      />
    </div>

    <div>
      <label class="block text-[10px] font-medium tracking-widest uppercase text-gray-400 mb-2 ml-2"
        >Password</label
      >
      <input
        type="password"
        placeholder="••••••••"
        class="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-600 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors"
      />
    </div>

    <div class="flex justify-between items-center px-1 mt-1">
      <label class="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          class="accent-rose-400 w-4 h-4 bg-black/30 border-white/10 rounded"
        />
        <span class="text-xs font-light text-gray-400">Ingat saya</span>
      </label>
      <NuxtLink
        to="/auth/forgot-password"
        class="text-xs font-light text-rose-300 hover:text-white transition-colors"
        >Lupa Password?</NuxtLink
      >
    </div>

    <button
      type="submit"
      class="w-full bg-white text-black py-4 rounded-xl font-semibold uppercase text-xs tracking-[0.15em] hover:bg-rose-400 hover:text-white transition-all mt-4"
    >
      Sign In
    </button>
  </form>
</template>

<script lang="ts" setup>
  const router = useRouter()
  const handleLogin = () => {
    // Nanti logika memanggil API via useAuth.ts dipasang di sini
    // Untuk sementara kita langsung redirect ke dashboard
    router.push('/dashboard')
  }
</script>
