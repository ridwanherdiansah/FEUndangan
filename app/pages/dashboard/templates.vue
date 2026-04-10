<template>
  <div class="pb-20">
    <header class="mb-12 border-b-4 border-black pb-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-4">
            SELECT <br/> STYLE.
          </h1>
          <p class="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
            CHOOSE A BLUEPRINT FOR YOUR UNFORGETTABLE MOMENT.
          </p>
        </div>
        
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="activeCategory === cat ? 'bg-black text-white' : 'bg-white text-black border-2 border-black'"
            class="px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all hover:bg-black hover:text-white"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="template in filteredTemplates" 
        :key="template.id"
        class="group relative border-2 border-black bg-white flex flex-col transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div v-if="template.isPopular" class="absolute -top-3 -right-3 bg-rose-600 text-white px-4 py-1 z-10 text-[10px] font-black uppercase tracking-widest italic">
          HOT
        </div>

        <div class="relative aspect-[3/4] overflow-hidden border-b-2 border-black bg-gray-100">
          <img 
            :src="template.image" 
            :alt="template.name"
            class="h-full w-full object-cover group-hover:scale-110 transition-all duration-700"
          />
            <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <NuxtLink 
                    :to="`/dashboard/edit-${template.id}`" 
                    class="w-full bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-colors text-center"
                >
                    USE THIS TEMPLATE
                </NuxtLink>
            </div>
        </div>

        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-2xl font-black uppercase tracking-tighter italic leading-tight">
              {{ template.name }}
            </h3>
            <span class="text-[10px] font-black border-2 border-black px-2 py-1">
              FREE
            </span>
          </div>
          <p class="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
            CATEGORY: {{ template.category }}
          </p>
          <div class="flex items-center justify-between pt-4 border-t border-gray-200">
            <span class="text-[10px] font-black uppercase tracking-widest">Premium Fonts</span>
            <span class="text-[10px] font-black uppercase tracking-widest">HD Quality</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: 'dashboard' })

const categories = ['ALL', 'MINIMALIST', 'FLORAL', 'MODERN', 'BRUTALIST']
const activeCategory = ref('ALL')

const templates = ref([
  { 
    id: 1, 
    name: 'BRUTALIST', 
    category: 'BRUTALIST', 
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800' 
  },
  { 
    id: 2, 
    name: 'FLORAL', 
    category: 'FLORAL', 
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=800' 
  },
  { 
    id: 3, 
    name: 'NISKALA', 
    category: 'MODERN', 
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800' 
  },
  { 
    id: 4, 
    name: 'NOVA SERIF', 
    category: 'MODERN', 
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1507504047992-06eccf49c5c9?q=80&w=800' 
  },
  { 
    id: 5, 
    name: 'URBAN VIBE', 
    category: 'MINIMALIST', 
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800' 
  }
])

const filteredTemplates = computed(() => {
  if (activeCategory.value === 'ALL') return templates.value
  return templates.value.filter(t => t.category === activeCategory.value)
})
</script>

<style scoped>
* {
  border-radius: 0 !important;
}
</style>