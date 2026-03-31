<template>
  <div class="absolute inset-0 w-full h-full font-sans selection:bg-amber-100 selection:text-amber-900 bg-slate-50 text-slate-800 overflow-hidden">

    <iframe 
      v-if="isOpened && youtubeId" 
      :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&controls=0`" 
      class="opacity-0 pointer-events-none absolute w-0 h-0" 
      allow="autoplay">
    </iframe>

    <div 
      class="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 text-center transition-all duration-[1500ms] ease-in-out overflow-hidden bg-slate-50"
      :class="isOpened ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'"
    >
      <img :src="data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'" class="absolute inset-0 w-full h-full object-cover z-0" />
      
      <div class="absolute inset-0 bg-white/60 backdrop-blur-sm z-0"></div>

      <div class="relative z-10 flex flex-col items-center w-full max-w-sm">
        <Icon name="ph:plant-light" class="text-6xl text-stone-500 mb-6 animate-pulse-slow drop-shadow-sm" />
        
        <p class="text-[10px] tracking-[0.3em] uppercase mb-4 text-stone-600 font-bold drop-shadow-sm">The Wedding Of</p>
        <h1 class="text-4xl md:text-5xl font-serif italic mb-10 text-slate-800 drop-shadow-md">{{ data.title }}</h1>
        
        <p class="text-xs font-medium text-slate-600 mb-6 drop-shadow-sm">Kepada Yth.<br/>Bapak/Ibu/Saudara/i</p>
        <h2 class="text-xl font-serif mb-10 text-amber-800 drop-shadow-sm">{{ data.gate?.guestName || 'Tamu Undangan' }}</h2>

        <button 
          @click="openInvitation" 
          class="bg-slate-800 text-white px-8 py-3 text-xs font-light tracking-widest uppercase hover:bg-amber-700 transition-all duration-500 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex items-center gap-2"
        >
          <Icon name="mdi:email-open-outline" class="text-base" /> Buka Undangan
        </button>
      </div>
    </div>

    <div ref="scrollContainer" @scroll="handleScroll" class="absolute inset-0 w-full h-full overflow-y-auto snap-y snap-mandatory no-scrollbar z-10 scroll-smooth">

      <section id="slide-cover" class="section-card bg-slate-50 relative">
        <div class="w-[85%] max-w-sm flex flex-col items-center animate-fade-up">
          <p class="text-[10px] tracking-[0.3em] uppercase mb-6 text-stone-500">The Wedding Of</p>
          
          <div class="w-full aspect-[3/4] rounded-t-full rounded-b-md overflow-hidden p-1.5 border border-stone-200 bg-white shadow-sm mb-8">
            <img :src="data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'" class="w-full h-full object-cover rounded-t-full rounded-b-sm" />
          </div>

          <h1 class="text-4xl font-serif italic text-slate-800 mb-4">{{ data.title }}</h1>
          <p class="text-xs tracking-widest uppercase text-amber-700 font-medium">{{ data.date }}</p>
        </div>
      </section>

      <section id="slide-quote" class="section-card flex-col items-center justify-center p-8 relative text-center bg-white overflow-hidden">
        
        <img :src="data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'" class="absolute inset-0 w-full h-full object-cover grayscale opacity-10 z-0" />

        <div class="relative z-10 flex flex-col items-center max-w-xs animate-fade-up">
          <Icon name="ph:quotes-thin" class="text-5xl text-amber-700/50 mb-6" /> 
          
          <p class="text-sm leading-loose text-slate-700 font-light mb-8 drop-shadow-sm">
            "{{ data.quote?.text || 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya...' }}"
          </p>
          <div class="w-12 h-[1px] bg-amber-700/30 mx-auto mb-4"></div>
          <p class="text-[10px] font-bold tracking-widest text-slate-800 uppercase drop-shadow-sm">
            {{ data.quote?.source || '(QS. Ar-Rum: 21)' }}
          </p>
        </div>
      </section>

      <section class="section-card bg-slate-50 py-12 px-6 overflow-y-auto">
        <div class="w-full max-w-sm flex flex-col items-center animate-fade-up pb-10">
          <Icon name="ph:flower-tulip-light" class="text-3xl text-stone-400 mb-4" />
          <h2 class="text-sm tracking-[0.3em] uppercase text-slate-500 mb-10 text-center">Pasangan Mempelai</h2>

          <div class="flex flex-col items-center text-center mb-10">
            <div class="w-32 h-40 rounded-t-full overflow-hidden mb-4 shadow-md bg-white p-1 border border-stone-200">
              <img :src="data.mempelai.priaImage || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400'" class="w-full h-full object-cover rounded-t-full" />
            </div>
            <h3 class="text-3xl font-serif italic text-slate-800 mb-2">{{ data.mempelai.pria }}</h3>
            <p class="text-xs text-slate-500 font-light">Putra dari Bapak ... & Ibu ...</p>
            <a href="#" class="mt-3 text-xs text-amber-700 flex items-center gap-1 hover:text-amber-600"><Icon name="mdi:instagram" /> @instagram_pria</a>
          </div>

          <div class="text-3xl font-serif italic text-stone-300 mb-10">&</div>

          <div class="flex flex-col items-center text-center mb-8">
            <div class="w-32 h-40 rounded-t-full overflow-hidden mb-4 shadow-md bg-white p-1 border border-stone-200">
              <img :src="data.mempelai.wanitaImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'" class="w-full h-full object-cover rounded-t-full" />
            </div>
            <h3 class="text-3xl font-serif italic text-slate-800 mb-2">{{ data.mempelai.wanita }}</h3>
            <p class="text-xs text-slate-500 font-light">Putri dari Bapak ... & Ibu ...</p>
            <a href="#" class="mt-3 text-xs text-amber-700 flex items-center gap-1 hover:text-amber-600"><Icon name="mdi:instagram" /> @instagram_wanita</a>
          </div>
        </div>
      </section>

      <section class="section-card bg-white flex flex-col items-center justify-center p-6">
        <h2 class="text-sm tracking-[0.3em] uppercase text-slate-500 mb-8 border-b border-stone-200 pb-4">Rangkaian Acara</h2>
        
        <div class="w-full max-w-sm flex flex-col gap-6 animate-fade-up">
          
          <div class="bg-slate-50 rounded-2xl p-6 border border-stone-100 shadow-sm text-center relative overflow-hidden">
            <Icon name="ph:rings-light" class="text-4xl text-amber-600 mb-3 mx-auto" />
            <h3 class="text-2xl font-serif italic text-slate-800 mb-2">Akad Nikah</h3>
            <p class="text-sm font-medium text-slate-600 mb-1">{{ data.date }}</p>
            <p class="text-xs text-slate-500 mb-4">Pukul: 08.00 WIB - Selesai</p>
            <p class="text-xs text-slate-600 font-light">{{ data.location }}</p>
          </div>

          <div class="bg-slate-50 rounded-2xl p-6 border border-stone-100 shadow-sm text-center relative overflow-hidden">
            <Icon name="ph:glass-cheers-light" class="text-4xl text-amber-600 mb-3 mx-auto" />
            <h3 class="text-2xl font-serif italic text-slate-800 mb-2">Resepsi</h3>
            <p class="text-sm font-medium text-slate-600 mb-1">{{ data.date }}</p>
            <p class="text-xs text-slate-500 mb-4">Pukul: {{ data.time }} - Selesai</p>
            <p class="text-xs text-slate-600 font-light">{{ data.location }}</p>
          </div>

        </div>
      </section>

      <section class="section-card bg-slate-50 flex flex-col items-center p-6 justify-center">
        <h2 class="text-sm tracking-[0.3em] uppercase text-slate-500 mb-8">Peta Lokasi</h2>
        
        <div class="w-full max-w-sm bg-white p-2 rounded-2xl shadow-sm border border-stone-200 mb-8 animate-fade-up">
          <div class="w-full aspect-square bg-stone-100 rounded-xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400" class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
        
        <a :href="data.mapUrl" target="_blank" class="bg-amber-700 text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-slate-800 transition-all duration-500 rounded-full shadow-md flex items-center gap-2">
          <Icon name="mdi:map-marker-outline" class="text-base" /> Lihat Lokasi
        </a>
      </section>

      <section class="section-card bg-white p-6 flex flex-col items-center justify-start overflow-y-auto">
        <h2 class="text-sm tracking-[0.3em] uppercase text-slate-500 mb-10 mt-10">Love Story</h2>
        
        <div class="w-full max-w-sm relative border-l border-stone-200 ml-4 pb-10 animate-fade-up">
          
          <div class="mb-8 pl-6 relative">
            <div class="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-amber-600 rounded-full"></div>
            <p class="text-xs font-bold text-amber-700 mb-1">Desember 2022</p>
            <h3 class="text-lg font-serif italic text-slate-800 mb-2">Awal Bertemu</h3>
            <p class="text-xs text-slate-500 font-light leading-relaxed">Kita bertemu di tahun 2022. Awalnya hanya sebatas teman biasa, namun seiring berjalannya waktu, rasa nyaman itu mulai tumbuh.</p>
          </div>

          <div class="mb-8 pl-6 relative">
            <div class="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-amber-600 rounded-full"></div>
            <p class="text-xs font-bold text-amber-700 mb-1">Januari 2023</p>
            <h3 class="text-lg font-serif italic text-slate-800 mb-2">Berkomitmen</h3>
            <p class="text-xs text-slate-500 font-light leading-relaxed">Kami memutuskan untuk menjalin hubungan yang lebih serius dan saling mengenal keluarga satu sama lain.</p>
          </div>

          <div class="pl-6 relative">
            <div class="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-amber-600 rounded-full"></div>
            <p class="text-xs font-bold text-amber-700 mb-1">Desember 2025</p>
            <h3 class="text-lg font-serif italic text-slate-800 mb-2">Menikah</h3>
            <p class="text-xs text-slate-500 font-light leading-relaxed">Dan kami bersyukur, dipertemukan Allah di waktu terbaik. Kini kami menanti hari istimewa kami.</p>
          </div>

        </div>
      </section>

      <section id="slide-gallery" class="section-card bg-slate-50 p-6 flex flex-col items-center">
        <h2 class="text-sm tracking-[0.3em] uppercase text-slate-500 mb-8">Momen Kami</h2>

        <div class="w-full max-w-sm grid grid-cols-2 gap-3 animate-fade-up">
          <div v-for="(img, idx) in data.gallery?.slice(0, 4)" :key="idx" class="overflow-hidden rounded-xl bg-white p-1 border border-stone-200 shadow-sm aspect-[4/5]">
            <img :src="img" class="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      <section class="section-card bg-white p-6 flex flex-col items-center justify-center">
        <Icon name="ph:gift-light" class="text-4xl text-amber-600 mb-4" />
        <h2 class="text-sm tracking-[0.3em] uppercase text-slate-500 mb-4">Wedding Gift</h2>
        <p class="text-xs text-slate-500 font-light text-center mb-8 max-w-xs leading-relaxed">Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan di bawah ini:</p>

        <div class="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-white shadow-md border border-stone-200 relative overflow-hidden animate-fade-up mb-4">
          <Icon name="mdi: integrated-circuit" class="text-4xl text-amber-400 mb-4 opacity-80" />
          <p class="text-lg tracking-[0.2em] font-mono text-slate-700 mb-1">5101 5001 7177</p>
          <p class="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Bank BTN - Widi Sukmawati</p>
          <button class="absolute top-6 right-6 text-slate-400 hover:text-amber-600 transition-colors flex flex-col items-center">
            <Icon name="mdi:content-copy" class="text-xl" />
            <span class="text-[8px] uppercase mt-1">Copy</span>
          </button>
        </div>

        <div class="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-white shadow-md border border-stone-200 relative overflow-hidden animate-fade-up">
          <Icon name="mdi: integrated-circuit" class="text-4xl text-amber-400 mb-4 opacity-80" />
          <p class="text-lg tracking-[0.2em] font-mono text-slate-700 mb-1">5140 8360 11</p>
          <p class="text-[10px] text-slate-500 uppercase font-bold tracking-widest">BCA - Syidik Permadi</p>
          <button class="absolute top-6 right-6 text-slate-400 hover:text-amber-600 transition-colors flex flex-col items-center">
            <Icon name="mdi:content-copy" class="text-xl" />
            <span class="text-[8px] uppercase mt-1">Copy</span>
          </button>
        </div>
      </section>

      <section class="section-card bg-slate-50 flex flex-col items-center p-6 overflow-y-auto">
        <h2 class="text-sm tracking-[0.3em] uppercase text-slate-500 mt-10 mb-8 border-b border-stone-200 pb-4">RSVP & Ucapan</h2>
        
        <div class="w-full max-w-sm flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-stone-100 animate-fade-up mb-10">
          <input type="text" placeholder="Nama Lengkap" class="bg-slate-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-700 placeholder-slate-400 focus:border-amber-500 outline-none mb-4 w-full">
          
          <select class="bg-slate-50 border border-stone-200 rounded-lg p-3 text-sm text-slate-700 focus:border-amber-500 outline-none appearance-none cursor-pointer mb-4 w-full">
            <option>Hadir</option>
            <option>Tidak Hadir</option>
          </select>

          <textarea placeholder="Berikan ucapan dan do'a..." rows="3" class="w-full text-sm border border-stone-200 rounded-lg p-3 bg-slate-50 text-slate-700 placeholder-slate-400 focus:border-amber-500 outline-none resize-none mb-6"></textarea>
          
          <button class="w-full bg-slate-800 text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-amber-700 transition-colors rounded-full shadow-md">Kirim Ucapan</button>
        </div>
      </section>

      <section class="section-card bg-white border-none relative flex flex-col items-center justify-center p-6 text-center">
        <Icon name="ph:flower-light" class="text-5xl text-stone-300 mb-6 animate-pulse-slow" />
        <p class="text-xs font-light text-slate-500 mb-4 leading-relaxed max-w-xs">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.</p>
        <p class="text-[10px] tracking-[0.3em] uppercase text-amber-700 mb-8">Terima Kasih</p>
        
        <h1 class="text-4xl font-serif italic text-slate-800">{{ data.title }}</h1>
      </section>

    </div>

    <div v-if="!isEditor && isOpened" class="absolute bottom-6 right-6 z-40 flex flex-col gap-3">
      <button v-if="!isAtBottom" @click="scrollDown" class="w-10 h-10 bg-white/80 border border-stone-200 text-slate-500 rounded-full flex items-center justify-center hover:bg-slate-800 hover:text-white backdrop-blur-sm transition-all cursor-pointer shadow-sm">
        <Icon name="mdi:chevron-down" class="text-2xl" />
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ 
  data: any,
  isEditor?: boolean
}>()

const isOpened = ref(false)
const scrollContainer = ref<HTMLElement | null>(null)
const isAtTop = ref(true)
const isAtBottom = ref(false)

const handleScroll = () => {
  if (!scrollContainer.value) return
  const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value
  isAtTop.value = scrollTop <= 10
  isAtBottom.value = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 10
}

const openInvitation = () => {
  isOpened.value = true
}

const scrollUp = () => {
  if (scrollContainer.value) {
    const containerHeight = scrollContainer.value.clientHeight
    scrollContainer.value.scrollBy({ top: -containerHeight, behavior: 'smooth' })
  }
}

const scrollDown = () => {
  if (scrollContainer.value) {
    const containerHeight = scrollContainer.value.clientHeight
    scrollContainer.value.scrollBy({ top: containerHeight, behavior: 'smooth' })
  }
}

const youtubeId = computed(() => {
  const url = props.data.youtubeUrl || 'https://www.youtube.com/watch?v=h2MXXx2Z1E4'
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
})
</script>

<style scoped>
/* Kontainer Utama per Slide */
.section-card {
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0; 
}

/* Sembunyikan Scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

/* Animasi Fade & Slide Up Halus Ala Elegan */
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-up {
  animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Animasi Denyut Sangat Pelan untuk Ornamen */
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>