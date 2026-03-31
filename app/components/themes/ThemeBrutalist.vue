<template>
  <div class="absolute inset-0 w-full h-full font-sans selection:bg-black selection:text-white bg-black overflow-hidden">

    <iframe 
      v-if="isOpened && youtubeId" 
      :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&controls=0`" 
      class="opacity-0 pointer-events-none absolute w-0 h-0" 
      allow="autoplay">
    </iframe>

    <div 
      class="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 text-center border-b-8 border-black bg-blue-600 text-white transition-transform duration-[1500ms] ease-in-out"
      :class="isOpened ? '-translate-y-full' : 'translate-y-0'"
    >
      <div class="animate-[spin_6s_linear_infinite] text-6xl mb-8">❋</div>
      <p class="text-xs font-black tracking-[0.5em] uppercase mb-4 border-2 border-white px-4 py-1">{{ data.gate.title }}</p>
      <h1 class="text-5xl font-black uppercase italic tracking-tighter mb-12 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">{{ data.title }}</h1>
      
      <button 
        @click="openInvitation" 
        class="bg-yellow-400 text-black border-4 border-black px-10 py-4 text-sm font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all cursor-pointer"
      >
        {{ data.gate.openText }}
      </button>
    </div>

    <div ref="scrollContainer" @scroll="handleScroll" class="absolute inset-0 w-full h-full overflow-y-auto snap-y snap-mandatory no-scrollbar z-10">

      <section id="slide-cover" class="section-card bg-pink-400 overflow-hidden group">
        
        <div class="absolute top-12 left-0 w-[120%] bg-black text-white font-black py-2 whitespace-nowrap border-y-4 border-black -rotate-3 z-0">
          <div class="animate-marquee inline-block text-xl uppercase tracking-widest">
            {{ data.cover?.headline || 'WE ARE GETTING MARRIED' }} ❋ {{ data.cover?.headline || 'WE ARE GETTING MARRIED' }} ❋ {{ data.cover?.headline || 'WE ARE GETTING MARRIED' }} ❋ 
          </div>
        </div>

        <div class="absolute bottom-16 right-8 text-5xl animate-[spin_5s_linear_infinite] z-0">❋</div>
        <div class="absolute top-1/4 left-6 text-4xl animate-[spin_7s_linear_infinite] z-0 text-yellow-400 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">❋</div>

        <div class="relative z-10 w-[65%] aspect-[3/4] mb-[-40px] border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 group-hover:-rotate-2 transition-transform duration-500">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-400 border-2 border-black rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20"></div>
          <img :src="data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>

        <div class="relative z-20 flex flex-col items-center border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] -rotate-2 group-hover:rotate-1 hover:-translate-y-2 hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 w-[85%]">
          <p class="text-[10px] font-black tracking-[0.5em] uppercase mb-4 text-pink-500">{{ data.cover?.headline || 'WE ARE GETTING MARRIED' }}</p>
          <h1 class="text-5xl font-black uppercase italic tracking-tighter text-center leading-none">{{ data.title }}</h1>
        </div>

      </section>

      <section id="slide-quote" class="section-card bg-yellow-400 flex-col overflow-hidden group relative p-0 border-b-8 border-black">
        
        <div class="absolute inset-0 z-0 opacity-20" style="background-image: repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%); background-size: 20px 20px; animation: pattern-move 10s linear infinite;"></div>

        <div class="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div class="absolute top-20 left-10 text-4xl text-black animate-float-slow [animation-delay:1s] shadow-solid-xs border-2 border-black p-1 bg-white">❋</div>
          <div class="absolute top-40 right-10 text-5xl text-rose-500 animate-float shadow-solid-xs">💖</div>
          <div class="absolute bottom-20 left-16 text-5xl animate-float-fast [animation-delay:2s]">😎</div>
          <div class="absolute bottom-10 right-16 text-4xl text-pink-500 animate-spin-slow">❋</div>
        </div>

        <div class="w-full bg-black text-white font-black py-2 whitespace-nowrap overflow-hidden border-b-4 border-black border-t-4 rotate-1 scale-105 mb-10 relative z-20 group-hover:-rotate-1 group-hover:bg-white group-hover:text-black transition-all duration-500">
          <div class="animate-marquee inline-block text-2xl uppercase tracking-widest">
            {{ data.title }} ❋ {{ data.mempelai?.wanita || 'JULIET' }} & {{ data.mempelai?.pria || 'ROMEO' }} ❋ {{ data.title }} ❋ 
          </div>
        </div>
        
        <div class="px-8 text-center relative z-20 animate-float-slow transition-transform duration-500 group-hover:scale-105">
          <p class="text-3xl font-black uppercase italic tracking-tighter leading-tight drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] text-black">
            "{{ data.quote?.text || 'Two souls with but a single thought, two hearts that beat as one.' }}"
          </p>
          <p class="mt-8 text-xs font-black tracking-widest bg-black text-white inline-block px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-pink-500 group-hover:text-black group-hover:shadow-none transition-all">
            — {{ data.quote?.source || 'John Keats' }}
          </p>
        </div>

        <div class="w-full bg-white text-black font-black py-1 whitespace-nowrap overflow-hidden border-t-4 border-b-4 border-black -rotate-1 scale-105 mt-10 relative z-20 group-hover:rotate-1 group-hover:bg-black group-hover:text-white transition-all duration-500">
          <div class="animate-marquee-reverse inline-block text-sm uppercase tracking-widest">
            LOVE ALWAYS WINS ❋ JUST MARRIED ❋ LOVE ALWAYS WINS ❋ JUST MARRIED ❋ 
          </div>
        </div>

      </section>

      <section class="section-card bg-white grid grid-rows-2 p-0 border-none relative overflow-hidden">
        
        <div class="relative border-b-8 border-black bg-cyan-400 flex flex-col items-center justify-center p-6 group hover:bg-cyan-300 transition-colors w-full h-full text-center">
          <div class="w-42 h-42 md:w-28 md:h-28 mb-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white rotate-2 group-hover:-rotate-2 transition-transform duration-300 z-10">
            <img :src="data.mempelai.priaImage || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div class="bg-white border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-1 group-hover:rotate-1 transition-transform duration-300 z-10">
            <p class="text-[10px] font-black tracking-[0.3em] uppercase mb-1">THE GROOM</p>
            <h2 class="text-3xl font-black uppercase italic tracking-tighter">{{ data.mempelai.pria }}</h2>
          </div>
          <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_black_2px,_transparent_2px)] [background-size:16px_16px]"></div>
        </div>

        <div class="relative border-b-8 border-black bg-rose-400 flex flex-col items-center justify-center p-6 group hover:bg-rose-300 transition-colors w-full h-full text-center">
          <div class="w-42 h-42 md:w-28 md:h-28 mb-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white -rotate-2 group-hover:rotate-2 transition-transform duration-300 z-10">
            <img :src="data.mempelai.wanitaImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div class="bg-white border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-1 group-hover:-rotate-1 transition-transform duration-300 z-10">
            <p class="text-[10px] font-black tracking-[0.3em] uppercase mb-1">THE BRIDE</p>
            <h2 class="text-3xl font-black uppercase italic tracking-tighter">{{ data.mempelai.wanita }}</h2>
          </div>
          <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_black_2px,_transparent_2px)] [background-size:16px_16px]"></div>
        </div>

        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 border-4 border-black text-3xl font-black w-14 h-14 flex items-center justify-center rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-bounce-slow z-20">
          &
        </div>

      </section>

      <section class="section-card bg-orange-500 text-black">
        <div class="border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-[85%] text-center">
          <h2 class="text-3xl font-black uppercase tracking-tighter italic mb-8 bg-black text-white py-2 inline-block px-4 -rotate-2">SAVE THE DATE</h2>
          <p class="text-4xl font-black mb-2">{{ data.date }}</p>
          <p class="text-lg font-bold tracking-widest mb-6 text-orange-600">{{ data.time }}</p>
          <p class="text-[10px] font-black tracking-widest leading-relaxed uppercase border-t-4 border-black pt-6">{{ data.location }}</p>
        </div>
      </section>

      <section class="section-card bg-green-400">
        <h2 class="text-4xl font-black uppercase tracking-tighter italic mb-8 drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">THE MAP.</h2>
        <div class="w-[85%] aspect-square bg-gray-200 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          <div class="absolute inset-0 border-4 border-dashed border-black m-3 pointer-events-none"></div>
        </div>
        <a :href="data.mapUrl" target="_blank" class="bg-black text-white border-4 border-black px-6 py-3 text-[10px] font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all text-center">
          OPEN GOOGLE MAPS
        </a>
      </section>

      <section id="slide-gallery" class="section-card bg-black relative p-0 overflow-hidden border-b-8 border-black">
        
        <div class="absolute inset-0 z-0 pointer-events-none opacity-20">
          <Icon name="material-symbols:sparkles-outline" class="text-white text-6xl absolute top-10 left-10 animate-fade-slow" />
          <Icon name="material-symbols:sparkles-outline" class="text-white text-4xl absolute bottom-16 right-16 animate-fade-slow delay-1000" />
        </div>

        <div class="relative z-10 w-full px-6 flex flex-col items-center">
          <div class="flex items-center gap-3 mb-10 mt-6 relative">
            <Icon name="material-symbols:camera-enhance-outline" class="text-yellow-400 text-5xl animate-float-complex" />
            <h2 class="text-4xl font-black uppercase tracking-tighter italic text-white text-center leading-none">GALLERY.</h2>
          </div>

          <div class="w-full grid grid-cols-2 md:grid-cols-3 md:grid-rows-[repeat(6,minmax(0,1fr))] gap-4 mb-8">
            
            <div class="border-2 border-white overflow-hidden relative group md:col-span-2 md:row-span-3 -rotate-1 group-hover:rotate-1 transition-transform">
              <img :src="data.gallery[0]" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              <div class="absolute bottom-3 left-3 bg-white text-black font-black uppercase tracking-tight p-2 text-sm shadow-[4px_4px_0px_0px_rgba(255,255,0,1)] rotate-2">WEDDING VIBES</div>
            </div>

            <div class="border-2 border-white overflow-hidden relative group aspect-square rotate-2 group-hover:-rotate-2 transition-transform">
              <img :src="data.gallery[1]" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div class="border-2 border-white overflow-hidden relative group aspect-square -rotate-1 group-hover:rotate-1 transition-transform">
              <img :src="data.gallery[2]" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div class="border-2 border-white overflow-hidden relative group md:col-start-3 md:row-start-2 md:row-span-3 aspect-[3/4] rotate-1 group-hover:-rotate-1 transition-transform">
              <img :src="data.gallery[3]" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div class="border-2 border-white overflow-hidden relative group aspect-square rotate-2 group-hover:-rotate-2 transition-transform">
              <img :src="data.gallery[4]" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div class="border-2 border-white overflow-hidden relative group aspect-square -rotate-2 group-hover:rotate-2 transition-transform">
              <img :src="data.gallery[5]" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
            </div>

            <div class="border-2 border-white overflow-hidden relative group md:col-span-2 md:row-span-3 rotate-1 group-hover:-rotate-1 transition-transform">
              <img :src="data.gallery[6]" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              <div class="absolute bottom-3 right-3 bg-white text-black font-black uppercase tracking-tight p-2 text-sm shadow-[4px_4px_0px_0px_rgba(0,255,255,1)] -rotate-1">HAPPY TOGETHER</div>
            </div>

          </div>
        </div>

      </section>

      <section class="section-card bg-purple-400">
        <div class="bg-white border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-[85%]">
          <h2 class="text-4xl font-black uppercase tracking-tighter italic mb-4">RSVP.</h2>
          <p class="text-[10px] font-black tracking-widest uppercase mb-6 bg-yellow-400 p-2 border-2 border-black inline-block">Deadline: {{ data.rsvp.deadline }}</p>
          <div class="flex flex-col gap-3">
            <input type="text" placeholder="YOUR NAME" class="border-4 border-black p-3 text-sm font-bold uppercase focus:bg-yellow-400 outline-none transition-colors w-full">
            <select class="border-4 border-black p-3 text-sm font-bold uppercase focus:bg-yellow-400 outline-none appearance-none cursor-pointer w-full">
              <option>WILL ATTEND</option>
              <option>NOT ATTENDING</option>
            </select>
            <button class="bg-black text-white p-3 text-sm font-black tracking-widest uppercase hover:bg-yellow-400 hover:text-black border-4 border-black transition-colors mt-2 w-full">CONFIRM</button>
          </div>
        </div>
      </section>

      <section class="section-card bg-gray-200">
        <div class="w-[85%] flex flex-col items-center">
          <h2 class="text-4xl font-black uppercase tracking-tighter italic mb-6 bg-black text-white px-4 py-2 rotate-2">WISHES.</h2>
          <textarea placeholder="WRITE YOUR WISHES..." rows="3" class="w-full text-sm border-4 border-black p-3 font-bold uppercase focus:bg-pink-300 outline-none resize-none mb-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></textarea>
          <button class="w-full bg-black text-white p-3 text-sm font-black tracking-widest uppercase hover:bg-pink-400 hover:text-black border-4 border-black transition-colors mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none">SEND WISH</button>
          
          <div class="w-full border-4 border-black p-3 bg-white text-left transform -rotate-1">
            <p class="text-xs font-black uppercase tracking-tight mb-2 flex items-center gap-2">
              <span class="w-2 h-2 bg-pink-500 rounded-full inline-block"></span> JOHN DOE
            </p>
            <p class="text-xs font-bold text-gray-700 uppercase">{{ data.ucapan.mockMessage }}</p>
          </div>
        </div>
      </section>

      <section class="section-card bg-black text-white border-none">
        <h2 class="text-5xl font-black uppercase tracking-tighter italic mb-10 text-center drop-shadow-[4px_4px_0px_rgba(255,0,128,1)]">{{ data.closing.text }}</h2>
        <div class="animate-[spin_8s_linear_infinite] text-6xl mb-10 text-yellow-400">❋</div>
        <p class="text-[10px] font-black tracking-[0.5em] uppercase text-gray-400 bg-white text-black px-4 py-2 border-4 border-white">{{ data.title }}</p>
      </section>

    </div>

    <div v-if="!isEditor && isOpened" class="absolute bottom-6 right-6 z-40 flex flex-col gap-3">
      <button v-if="!isAtTop" @click="scrollUp" class="w-10 h-10 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-yellow-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
        <span class="text-xl font-black">↑</span>
      </button>

      <button v-if="!isAtBottom" @click="scrollDown" class="w-10 h-10 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-yellow-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer">
        <span class="text-xl font-black">↓</span>
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
* { border-radius: 0 !important; }

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
  border-bottom: 8px solid black;
  /* flex-shrink 0 Mencegah flexbox mengecilkan section secara acak */
  flex-shrink: 0; 
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: inline-block;
  animation: marquee 10s linear infinite;
  white-space: nowrap;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.animate-bounce-slow {
  animation: bounce 3s infinite;
}

/* Animasi untuk Pola Latar Belakang Bergerak */
@keyframes pattern-move {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

/* Animasi Mengambang (Floating) */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

@keyframes float-complex {
  0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
  33% { transform: translate(5px, -10px) rotate(-3deg); }
  66% { transform: translate(-5px, -5px) rotate(3deg); }
}

/* Utilitas Animasi Baru */
.animate-float {
  animation: float 4s ease-in-out infinite;
}
.animate-float-slow {
  animation: float-complex 6s ease-in-out infinite;
}
.animate-float-fast {
  animation: float 2s ease-in-out infinite;
}
.animate-spin-slow {
  animation: spin 8s linear infinite;
}

/* Marquee Arah Kebalikan */
@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}
.animate-marquee-reverse {
  display: inline-block;
  animation: marquee-reverse 10s linear infinite;
  white-space: nowrap;
}

/* Helper Shadow Brutalist */
.shadow-solid-xs {
  box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
}
</style>