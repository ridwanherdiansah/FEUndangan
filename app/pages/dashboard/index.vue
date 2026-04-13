<template>
  <div>
    <header class="mb-12 md:mb-16 border-b-4 border-black pb-8">
      <h1
        class="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-4"
      >
        WELCOME <br />
        BACK.
      </h1>
      <p class="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
        MANAGE YOUR EVENTS WITH PRECISION AND SPEED.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="bg-white border-2 border-black p-6 md:p-8 hover:bg-black hover:text-white transition-colors group cursor-pointer"
      >
        <p
          class="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-300 mb-4 md:mb-6"
        >
          {{ stat.label }}
        </p>
        <div class="flex items-end justify-between">
          <p class="text-5xl md:text-6xl font-black tracking-tighter">{{ stat.value }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
      <h2 class="text-3xl md:text-4xl font-black uppercase tracking-tighter italic">
        LATEST PROJECTS.
      </h2>
      <NuxtLink
        to="/dashboard/templates"
        class="bg-black text-white px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-rose-600 transition-colors text-center"
      >
        CREATE NEW INVITE
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div
        v-for="invite in invitations"
        :key="invite.id"
        class="group bg-white border-2 border-black flex flex-col hover:-translate-y-2 transition-transform duration-300"
      >
        <div
          class="relative h-56 md:h-72 w-full overflow-hidden border-b-2 border-black bg-gray-200 shrink-0"
        >
          <img
            :src="invite.image"
            :alt="invite.title"
            @error="handleImageError"
            class="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div
            class="absolute top-0 left-0 bg-black text-white px-4 md:px-6 py-2 md:py-3 text-[10px] font-black uppercase tracking-[0.2em]"
          >
            {{ invite.status }}
          </div>
        </div>

        <div class="p-6 md:p-8 flex flex-col flex-1">
          <div class="flex flex-col md:flex-row justify-between items-start mb-6 gap-2">
            <div>
              <p class="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                {{ invite.theme }}
              </p>
              <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                {{ invite.title }}
              </h3>
            </div>
            <p
              class="text-[10px] md:text-xs font-black tracking-widest md:text-right mt-2 md:mt-0 border-l-2 border-black pl-3 md:border-none md:pl-0"
            >
              DATE<br />{{ invite.date }}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto pt-6 border-t-2 border-black">
            <button
              class="bg-black text-white py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-rose-600 transition-colors"
            >
              EDIT DETAILS
            </button>
            <button
              class="bg-white text-black border-2 border-black py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
            >
              PREVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  definePageMeta({ layout: 'dashboard' })

  const stats = ref([
    { label: 'TOTAL INVITES', value: '02' },
    { label: 'GUEST RSVP', value: '145' },
    { label: 'REVENUE', value: '350K' }
  ])

  const invitations = ref([
    {
      id: 1,
      title: 'ROMEO & JULIET',
      date: '12.12.26',
      status: 'ACTIVE',
      theme: 'FLORAL ESSENCE',
      image:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'JOHN & JANE',
      date: 'TBA',
      status: 'DRAFT',
      theme: 'MINIMALIST',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop'
    }
  ])

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement
    img.src =
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop'
  }
</script>
