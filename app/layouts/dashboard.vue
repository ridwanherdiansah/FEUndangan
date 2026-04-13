<template>
  <div
    class="flex h-screen w-full bg-white text-black font-sans selection:bg-black selection:text-white overflow-hidden relative"
  >
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
    ></div>

    <aside
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      class="w-64 flex flex-col border-r-2 border-black bg-white z-50 shrink-0 fixed inset-y-0 left-0 transition-transform duration-300 md:relative md:translate-x-0"
    >
      <div class="flex h-20 items-center justify-between px-8 border-b-2 border-black">
        <NuxtLink to="/" class="text-4xl font-black uppercase tracking-tighter italic">
          INVITE.
        </NuxtLink>
        <button @click="isSidebarOpen = false" class="md:hidden text-2xl font-black">✕</button>
      </div>

      <nav class="flex-1 overflow-y-auto flex flex-col p-6 gap-2">
        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
          Workspace
        </p>

        <NuxtLink
          to="/dashboard"
          :exact="true"
          @click="isSidebarOpen = false"
          class="py-3 px-4 text-sm font-black uppercase tracking-widest border-2 border-transparent hover:border-black transition-all"
          active-class="bg-black text-white border-black"
        >
          OVERVIEW
        </NuxtLink>

        <NuxtLink
          to="/dashboard/templates"
          @click="isSidebarOpen = false"
          class="py-3 px-4 text-sm font-black uppercase tracking-widest border-2 border-transparent hover:border-black transition-all"
          active-class="bg-black text-white border-black"
        >
          TEMPLATES
        </NuxtLink>

        <NuxtLink
          to="/dashboard/transactions"
          @click="isSidebarOpen = false"
          class="py-3 px-4 text-sm font-black uppercase tracking-widest border-2 border-transparent hover:border-black transition-all"
          active-class="bg-black text-white border-black"
        >
          PAYMENTS
        </NuxtLink>
      </nav>

      <div class="border-t-2 border-black p-6 shrink-0">
        <div class="flex items-center gap-4 mb-6">
          <div
            class="h-12 w-12 bg-black text-white flex items-center justify-center text-lg font-black shrink-0"
          >
            JD
          </div>
          <div class="overflow-hidden">
            <p class="text-sm font-black uppercase tracking-widest truncate">JOHN DOE</p>
            <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest truncate">
              ADMIN
            </p>
          </div>
        </div>
        <button
          @click="handleSignOut"
          class="w-full bg-white border-2 border-black text-black py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
        >
          SIGN OUT
        </button>
      </div>
    </aside>

    <div class="flex flex-1 flex-col overflow-hidden bg-gray-50">
      <header
        class="flex h-20 shrink-0 items-center justify-between border-b-2 border-black bg-white px-6 md:px-10 z-30"
      >
        <div class="flex items-center gap-4">
          <button
            @click="isSidebarOpen = true"
            class="md:hidden text-2xl font-black hover:opacity-70"
          >
            ☰
          </button>

          <div
            class="hidden sm:block text-[10px] font-black uppercase tracking-[0.3em] text-gray-500"
          >
            SYSTEM STATUS: <span class="text-black">ONLINE</span>
          </div>
        </div>

        <button
          class="text-[10px] font-black uppercase tracking-[0.2em] hover:underline underline-offset-4"
        >
          ALERTS (2)
        </button>
      </header>

      <main class="flex-1 overflow-y-auto p-6 md:p-16">
        <div class="mx-auto max-w-6xl">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // State reaktif untuk mengatur Sidebar di HP
  const isSidebarOpen = ref(false)

  const handleSignOut = () => {
    if (confirm('Are you sure you want to sign out?')) {
      navigateTo('/')
    }
  }
</script>

<style scoped>
  /* Memastikan gaya sudut kaku / brutalist dipertahankan */
  * {
    border-radius: 0 !important;
  }
</style>
