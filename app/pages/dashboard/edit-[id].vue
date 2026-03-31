<template>
  <div class="flex flex-col gap-8 pb-20">
    <header class="flex flex-col md:flex-row md:items-center justify-between border-b-4 border-black pb-8 gap-4">
      <div>
        <NuxtLink to="/dashboard" class="text-[10px] font-black uppercase tracking-[0.2em] hover:underline mb-4 inline-block">
          ← BACK TO PROJECTS
        </NuxtLink>
        <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
          EDIT <br/> PROJECT_{{ $route.params.id }}
        </h1>
      </div>
      <div class="flex gap-4">
        <button class="flex-1 md:flex-none border-2 border-black px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors">SAVE DRAFT</button>
        <NuxtLink :to="`/${generateSlug(eventData.title)}`" target="_blank" class="flex-1 md:flex-none bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-rose-600 transition-colors text-center inline-flex items-center justify-center">
          PUBLISH
        </NuxtLink>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      <div class="lg:col-span-5 flex flex-col gap-6">
        <div class="bg-black text-white p-4 text-[10px] font-black uppercase tracking-[0.3em] flex justify-between items-center">
          <span>Editing: {{ slides[currentSlide]?.name }}</span>
          <span>{{ currentSlide + 1 }} / 10</span>
        </div>

        <section v-if="currentSlide === 0" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">Opening Gate</h2>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Subtitle</label>
            <input v-model="eventData.gate.title" type="text" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Button Text</label>
            <input v-model="eventData.gate.openText" type="text" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
          
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400 text-rose-500">Background Music (YouTube Link)</label>
            <input v-model="eventData.youtubeUrl" type="url" placeholder="Paste link YouTube di sini..." class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
        </section>

        <section v-if="currentSlide === 1" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">Cover Settings</h2>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Headline</label>
            <input v-model="eventData.cover.headline" type="text" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Couple Names</label>
            <input v-model="eventData.title" type="text" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
        </section>

        <section v-if="currentSlide === 2" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">Quote / Ayat</h2>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Quote Text</label>
            <textarea v-model="eventData.quote.text" rows="3" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none resize-none"></textarea>
          </div>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Source / Author</label>
            <input v-model="eventData.quote.source" type="text" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
        </section>

        <section v-if="currentSlide === 3" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">The Couple</h2>
          <div class="grid grid-cols-1 gap-4">
            <input v-model="eventData.mempelai.pria" placeholder="Groom Name" type="text" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
            <input v-model="eventData.mempelai.wanita" placeholder="Bride Name" type="text" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
        </section>

        <section v-if="currentSlide === 4" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">Event Details</h2>
          <input v-model="eventData.date" type="text" placeholder="Date (e.g., 12 DEC 2026)" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          <input v-model="eventData.time" type="text" placeholder="Time (e.g., 19:00 WIB)" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          <textarea v-model="eventData.location" rows="3" placeholder="Venue Address" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none resize-none"></textarea>
        </section>

        <section v-if="currentSlide === 5" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">Location Map</h2>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Google Maps URL</label>
            <input v-model="eventData.mapUrl" type="url" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
        </section>

        <section v-if="currentSlide === 6" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">Gallery</h2>
          <p class="text-[10px] font-black tracking-widest uppercase text-gray-500">Upload Pre-Wedding Photos</p>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(img, idx) in eventData.gallery" :key="idx" class="border-2 border-black aspect-square bg-gray-100 flex items-center justify-center relative group cursor-pointer overflow-hidden">
              <img v-if="img" :src="img" class="w-full h-full object-cover grayscale" />
              <div v-else class="text-2xl font-black">+</div>
              <div v-if="img" class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-black tracking-widest transition-opacity">CHANGE</div>
            </div>
          </div>
        </section>

        <section v-if="currentSlide === 7" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">RSVP Settings</h2>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">RSVP Deadline</label>
            <input v-model="eventData.rsvp.deadline" type="date" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none" />
          </div>
        </section>

        <section v-if="currentSlide === 8" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">Wishes Board</h2>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Mockup Message</label>
            <textarea v-model="eventData.ucapan.mockMessage" rows="2" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none resize-none"></textarea>
          </div>
          <p class="text-[10px] text-gray-500">*In real app, this will show a list of comments from database.</p>
        </section>

        <section v-if="currentSlide === 9" class="border-2 border-black p-8 bg-white space-y-6">
          <h2 class="text-xl font-black uppercase tracking-tighter border-b-2 border-black pb-2">Closing</h2>
          <div>
            <label class="block text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Closing Message</label>
            <textarea v-model="eventData.closing.text" rows="3" class="w-full border-2 border-black p-4 text-sm font-bold focus:bg-black focus:text-white outline-none resize-none"></textarea>
          </div>
        </section>
      </div>

      <div class="lg:col-span-7">
        <div class="sticky top-10">
          <div class="flex items-center justify-center w-full h-[80vh] min-h-[500px] py-4">
            <div class="relative h-full aspect-[9/16] border-[10px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden bg-white">
              <div ref="previewContainer" class="absolute inset-0 w-full h-full">
                <component :is="resolveTheme(eventData.templateId)" :data="eventData" :isEditor="true" />
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center gap-4 mt-8">
            <button @click="prevSlide" :disabled="currentSlide === 0" class="border-2 border-black px-4 py-2 font-black disabled:opacity-30">
              PREV
            </button>
            <div class="flex gap-1">
              <div v-for="(_, i) in slides" :key="i" 
                class="h-2 transition-all duration-300"
                :class="currentSlide === i ? 'w-6 bg-black' : 'w-2 bg-gray-300'">
              </div>
            </div>
            <button @click="nextSlide" :disabled="currentSlide === slides.length - 1" class="border-2 border-black px-4 py-2 font-black disabled:opacity-30">
              NEXT
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import ThemeBrutalist from '~/components/themes/ThemeBrutalist.vue'
import ThemeFloral from '~/components/themes/ThemeFloral.vue'

definePageMeta({ layout: 'dashboard' })

const previewContainer = ref<HTMLElement | null>(null)
const currentSlide = ref(0)

// 10 Array sesuai urutan yang direquest
const slides = [
  { name: 'Opening Gate' },
  { name: 'Cover Page' },
  { name: 'Quote / Ayat' },
  { name: 'Mempelai' },
  { name: 'Detail Acara' },
  { name: 'Lokasi / Map' },
  { name: 'Gallery' },
  { name: 'RSVP' },
  { name: 'Ucapan' },
  { name: 'Closing' }
]

// Data di-expand untuk mendukung 10 section
const eventData = ref({
  templateId: Number(useRoute().params.id) || 1,
  title: 'ROMEO & JULIET',
  date: '12 DEC 2026',
  time: '19:00 WIB',
  location: 'THE GRAND BALLROOM, JAKARTA INDONESIA',
  mapUrl: 'https://maps.google.com',
  youtubeUrl: 'https://www.youtube.com/watch?v=ApXoWvfEYVU&list=RDApXoWvfEYVU&start_radio=1',
  image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000',
  gate: { title: 'THE WEDDING OF', openText: 'OPEN INVITATION' },
  cover: { headline: 'THE WEDDING OF' },
  quote: { text: 'AND I KNEW EXACTLY HOW CINDERELLA FELT WHEN SHE FOUND HER PRINCE.', source: 'ELIZABETH YOUNG' },
  mempelai: { pria: 'ROMEO MONTAGUE', wanita: 'JULIET CAPULET' },
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400',
    'https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=400',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400'
  ],
  rsvp: { deadline: '2026-11-01' },
  ucapan: { mockMessage: 'HAPPY WEDDING! WISHING YOU A LIFETIME OF LOVE.' },
  closing: { text: 'CANNOT WAIT TO CELEBRATE WITH YOU.' }
})

const resolveTheme = (id: number) => {
  if (id === 1 || id === 5) return ThemeBrutalist
  if (id === 2 || id === 6) return ThemeFloral
  return ThemeBrutalist 
}

const nextSlide = () => { if (currentSlide.value < slides.length - 1) currentSlide.value++ }
const prevSlide = () => { if (currentSlide.value > 0) currentSlide.value-- }

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

watch(currentSlide, async (newIndex) => {
  await nextTick()
  if (previewContainer.value) {
    const sections = previewContainer.value.querySelectorAll('section')
    if (sections[newIndex]) {
      sections[newIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
})
</script>

<style scoped>
* { border-radius: 0 !important; }
.animate-in { animation: fadeIn 0.5s ease-out; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>