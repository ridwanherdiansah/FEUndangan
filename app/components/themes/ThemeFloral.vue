<template>
  <div
    class="absolute inset-0 w-full h-full font-sans selection:bg-amber-100 selection:text-amber-900 bg-slate-900 text-slate-800 overflow-hidden"
  >
    <iframe
      v-if="isOpened && youtubeId"
      :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=${youtubeId}&controls=0`"
      class="opacity-0 pointer-events-none absolute w-0 h-0"
      allow="autoplay"
    >
    </iframe>

    <div
      class="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 text-center transition-all duration-[1500ms] ease-in-out overflow-hidden bg-slate-900"
      :class="
        isOpened ? 'translate-y-[-100%] opacity-0 scale-110 blur-lg' : 'translate-y-0 opacity-100'
      "
    >
      <img
        :src="data.image"
        class="absolute inset-0 w-full h-full object-cover z-0 animate-ken-burns"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-slate-50/95 z-0"
      ></div>

      <div class="relative z-10 flex flex-col items-center w-full max-w-sm mt-10">
        <Icon
          name="ph:plant-light"
          class="text-6xl text-white/80 mb-6 animate-pulse-slow drop-shadow-md"
        />

        <p
          class="animate-fade-up [animation-delay:200ms] text-[10px] tracking-[0.4em] uppercase mb-4 text-white/90 font-bold drop-shadow-md"
        >
          The Wedding Of
        </p>
        <h1
          class="animate-fade-up [animation-delay:400ms] text-5xl font-serif italic mb-12 text-white drop-shadow-lg"
        >
          {{ data.title }}
        </h1>

        <div
          class="animate-fade-up [animation-delay:600ms] mb-12 mt-10 p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl w-full"
        >
          <p class="text-xs font-medium text-slate-700 mb-2 italic">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <h2 class="text-2xl font-serif text-slate-900">
            {{ data.gate?.guestName || 'Tamu Undangan' }}
          </h2>
        </div>

        <button
          @click="openInvitation"
          class="group animate-fade-up [animation-delay:800ms] bg-slate-900 text-white px-10 py-4 rounded-full flex items-center gap-3 hover:bg-amber-800 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)] active:scale-95"
        >
          <Icon
            name="mdi:email-open-outline"
            class="text-xl group-hover:rotate-12 transition-transform"
          />
          <span class="tracking-widest uppercase text-xs font-bold">Buka Undangan</span>
        </button>
      </div>
    </div>

    <div
      ref="scrollContainer"
      @scroll="handleScroll"
      class="absolute inset-0 w-full h-full overflow-y-auto snap-y snap-mandatory no-scrollbar z-10 scroll-smooth"
    >
      <section id="slide-cover" class="section-card">
        <img
          :src="data.image"
          class="absolute inset-0 w-full h-full object-cover scale-110 opacity-80 z-0"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-slate-30/60 via-slate-50/90 to-slate-50 z-0"
        ></div>

        <div class="relative z-10 w-[85%] max-w-sm flex flex-col items-center">
          <p
            class="animate-fade-up text-[12px] tracking-[0.3em] uppercase mb-8 text-amber-800 font-bold"
          >
            The Wedding Of
          </p>
          <div
            class="animate-fade-up [animation-delay:300ms] w-full aspect-[3/4] rounded-t-full shadow-2xl border-[8px] border-white/80 overflow-hidden relative"
          >
            <img
              :src="data.image"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <h1
            class="animate-fade-up [animation-delay:600ms] text-4xl font-serif italic text-slate-800 mt-10 mb-4"
          >
            {{ data.title }}
          </h1>
          <div class="animate-fade-up [animation-delay:800ms] h-[1px] w-20 bg-amber-300 mb-4"></div>
          <p
            class="animate-fade-up [animation-delay:900ms] text-xs tracking-widest uppercase text-amber-800 font-bold"
          >
            {{ data.date }}
          </p>
        </div>
      </section>

      <section id="slide-quote" class="section-card relative">
        <img
          :src="data.image"
          class="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 animate-ken-burns z-0"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-slate-10/60 via-slate-50/90 to-slate-50 z-0"
        ></div>
        <div class="relative z-10 p-8 text-center text-slate-800 max-w-xs animate-fade-up">
          <Icon name="ph:quotes-thin" class="text-6xl text-amber-800 font-bold mb-8 mx-auto" />
          <p class="text-sm leading-loose font-light italic mb-8 drop-shadow-md">
            "{{
              data.quote?.text ||
              'Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu agar kamu merasa tenteram...'
            }}"
          </p>
          <p class="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-800 font-bold">
            {{ data.quote?.source || '(QS. Ar-Rum: 21)' }}
          </p>
        </div>
      </section>

      <section id="slide-couple" class="section-card">
        <img
          :src="data.image"
          class="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 animate-ken-burns z-0"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-slate-10/60 via-slate-50/90 to-slate-50 z-0"
        ></div>

        <div
          class="relative z-10 w-full max-w-sm flex flex-col items-center py-8 px-6 overflow-y-auto no-scrollbar"
        >
          <h2
            class="text-2xl tracking-[0.5em] uppercase text-amber-800 font-bold mb-8 animate-fade-up"
          >
            Mempelai
          </h2>

          <div
            class="flex flex-col items-center text-center w-full group mb-2 animate-fade-up [animation-delay:200ms]"
          >
            <div
              class="relative p-2 bg-white rounded-t-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] mb-3 transition-all duration-700 ease-out group-hover:-translate-y-2"
            >
              <div
                class="relative w-32 h-44 rounded-t-full overflow-hidden border border-stone-100 z-10"
              >
                <div
                  class="absolute inset-0 bg-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none mix-blend-multiply"
                ></div>
                <img
                  :src="
                    data.mempelai.priaImage ||
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400'
                  "
                  class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[1500ms] ease-out"
                  alt="Mempelai Pria"
                />
              </div>
              <div
                class="absolute inset-0 bg-amber-200/40 blur-xl opacity-0 group-hover:opacity-100 rounded-t-full transition-opacity duration-700 -z-10"
              ></div>
            </div>

            <h3 class="text-2xl md:text-3xl font-serif italic text-slate-800 mb-1 drop-shadow-sm">
              {{ data.mempelai.pria }}
            </h3>
            <p class="text-[10px] text-slate-500 leading-snug">
              Putra dari <br />
              <b class="text-slate-700">Bapak Nama Ayah & Ibu Nama Ibu</b>
            </p>
          </div>

          <div
            class="relative flex items-center justify-center py-2 animate-fade-up [animation-delay:400ms]"
          >
            <div class="text-3xl font-serif italic text-amber-800 drop-shadow-sm">&</div>
          </div>

          <div
            class="flex flex-col items-center text-center w-full group mt-2 animate-fade-up [animation-delay:600ms]"
          >
            <div
              class="relative p-2 bg-white rounded-t-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] mb-3 transition-all duration-700 ease-out group-hover:-translate-y-2"
            >
              <div
                class="relative w-32 h-44 rounded-t-full overflow-hidden border border-stone-100 z-10"
              >
                <div
                  class="absolute inset-0 bg-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none mix-blend-multiply"
                ></div>
                <img
                  :src="
                    data.mempelai.wanitaImage ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'
                  "
                  class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[1500ms] ease-out"
                  alt="Mempelai Wanita"
                />
              </div>
              <div
                class="absolute inset-0 bg-amber-200/40 blur-xl opacity-0 group-hover:opacity-100 rounded-t-full transition-opacity duration-700 -z-10"
              ></div>
            </div>

            <h3 class="text-2xl md:text-3xl font-serif italic text-slate-800 mb-1 drop-shadow-sm">
              {{ data.mempelai.wanita }}
            </h3>
            <p class="text-[10px] text-slate-500 leading-snug">
              Putri dari <br />
              <b class="text-slate-700">Bapak Nama Ayah & Ibu Nama Ibu</b>
            </p>
          </div>
        </div>
      </section>

      <section id="slide-events" class="section-card">
        <img
          :src="data.image"
          class="absolute inset-0 w-full h-full object-cover opacity-30 grayscale z-0"
        />
        <div class="absolute inset-0 bg-slate-50 z-0"></div>

        <div class="relative z-10 w-full max-w-sm p-6 space-y-6">
          <h2
            class="text-2xs tracking-[0.4em] uppercase text-amber-800 font-bold mb-10 text-center"
          >
            Agenda Acara
          </h2>

          <div
            class="bg-amber-800 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl text-center transform hover:scale-[1.02] transition-transform animate-fade-up"
          >
            <Icon name="ph:rings-light" class="text-4xl text-amber-400 mb-3 mx-auto" />
            <h3 class="text-2xl font-serif italic mb-2 text-white">Akad Nikah</h3>
            <div class="text-xs space-y-1 text-slate-300">
              <p class="font-bold text-amber-200">{{ data.date }}</p>
              <p>08.00 - 10.00 WIB</p>
              <p class="mt-3 font-light">{{ data.location }}</p>
              <a
                v-if="data.mapUrl"
                :href="data.mapUrl"
                target="_blank"
                class="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent border border-amber-300/20 text-amber-200 text-xs tracking-widest uppercase font-lightbackdrop-blur-mdshadow-[0_0_30px_rgba(251,191,36,0.15)]hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]hover:scale-105transition-all duration-500 ease-outrelative overflow-hidden group"
              >
                <span
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-700"
                ></span>
                <Icon name="ph:map-pin-light" class="text-lg relative z-10" />
                <span class="relative z-10">Lihat Lokasi</span>
              </a>
            </div>
          </div>

          <div
            class="bg-amber-800 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl text-center transform hover:scale-[1.02] transition-transform animate-fade-up [animation-delay:200ms]"
          >
            <Icon name="ph:glass-cheers-light" class="text-4xl text-amber-400 mb-3 mx-auto" />
            <h3 class="text-2xl font-serif italic mb-2 text-white">Resepsi</h3>
            <div class="text-xs space-y-1 text-slate-300">
              <p class="font-bold text-amber-200">{{ data.date }}</p>
              <p>{{ data.time }} - Selesai</p>
              <p class="mt-3 font-light">{{ data.location }}</p>
              <a
                v-if="data.mapUrl"
                :href="data.mapUrl"
                target="_blank"
                class="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent border border-amber-300/20 text-amber-200 text-xs tracking-widest uppercase font-lightbackdrop-blur-mdshadow-[0_0_30px_rgba(251,191,36,0.15)]hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]hover:scale-105transition-all duration-500 ease-outrelative overflow-hidden group"
              >
                <span
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-700"
                ></span>
                <Icon name="ph:map-pin-light" class="text-lg relative z-10" />
                <span class="relative z-10">Lihat Lokasi</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="slide-gallery" class="section-card bg-white">
        <div class="relative z-10 p-6 flex flex-col items-center w-full">
          <h2
            class="text-2xs tracking-[0.4em] uppercase text-amber-800 font-bold mb-10 text-center"
          >
            Galeri Foto
          </h2>
          <div class="grid grid-cols-2 gap-4 w-full max-w-sm auto-rows-[110px]">
            <div
              v-for="(img, idx) in data.gallery?.slice(0, 6)"
              :key="idx"
              :class="[
                'relative overflow-hidden rounded-2xl bg-slate-50 shadow-sm',
                idx === 0 ? 'row-span-2' : '', // hero
                idx === 3 ? 'col-span-2' : '' // wide
              ]"
            >
              <img
                :src="img"
                @click="activeImage = img"
                class="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-1000 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="slide-rsvp" class="section-card">
        <img
          :src="data.image"
          class="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 animate-ken-burns z-0"
        />
        <div class="absolute inset-0 from-slate-10/60 via-slate-50/90 to-slate-50 z-0"></div>

        <div class="relative z-10 w-full max-w-sm p-6 flex flex-col items-center">
          <h2 class="text-2xs tracking-[0.4em] uppercase text-amber-800 font-bold mb-8 text-center">
            RSVP & Ucapan
          </h2>

          <!-- FORM -->
          <div
            class="w-full bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 shadow-2xl animate-fade-up"
          >
            <input
              v-model="form.name"
              type="text"
              placeholder="Nama Anda"
              class="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-xs text-white placeholder-slate-400 outline-none focus:border-amber-500 mb-4 transition-colors"
            />

            <select
              v-model="form.status"
              class="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-xs text-white outline-none focus:border-amber-500 mb-4 transition-colors"
            >
              <option value="Hadir" class="text-slate-900">Akan Hadir</option>
              <option value="Ragu" class="text-slate-900">Masih Ragu</option>
              <option value="Tidak Hadir" class="text-slate-900">Berhalangan</option>
            </select>

            <textarea
              v-model="form.message"
              placeholder="Berikan ucapan & doa untuk mempelai..."
              rows="3"
              class="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-xs text-white placeholder-slate-400 outline-none focus:border-amber-500 mb-6 transition-colors resize-none"
            ></textarea>

            <button
              @click="submitMessage"
              class="w-full bg-amber-700/90 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-all shadow-[0_0_15px_rgba(180,83,9,0.4)] active:scale-95 border border-amber-500/50"
            >
              Kirim Pesan
            </button>
          </div>

          <!-- LIST UCAPAN -->
          <div class="mt-8 w-full space-y-4 max-h-[250px] overflow-y-auto no-scrollbar">
            <div
              v-for="(msg, idx) in messages"
              :key="idx"
              class="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 animate-fade-up"
            >
              <div class="flex justify-between items-center mb-2">
                <h4 class="text-sm font-bold text-white">{{ msg.name }}</h4>

                <span
                  class="text-[10px] px-2 py-1 rounded-full"
                  :class="
                    msg.status === 'Hadir'
                      ? 'bg-green-500/20 text-green-300'
                      : msg.status === 'Ragu'
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : 'bg-red-500/20 text-red-300'
                  "
                >
                  {{ msg.status }}
                </span>
              </div>

              <p class="text-xs text-slate-300 mb-2">
                {{ msg.message }}
              </p>

              <p class="text-[10px] text-slate-400">
                {{ msg.date }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="slide-closing" class="section-card">
        <img
          :src="data.image"
          class="absolute inset-0 w-full h-full object-cover z-0 animate-ken-burns"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0"
        ></div>
        <div class="absolute inset-0 bg-black/40 z-0"></div>
        <div
          class="relative z-10 text-center p-8 flex flex-col items-center justify-end h-full pb-24"
        >
          <Icon name="ph:flower-light" class="text-5xl text-amber-400/80 mb-8 animate-pulse-slow" />
          <p
            class="text-xs text-slate-300 font-light leading-relaxed max-w-xs mx-auto mb-10 drop-shadow-md"
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir untuk memberikan doa restu.
          </p>
          <div class="w-12 h-[1px] bg-amber-500/50 mb-6"></div>
          <p class="text-[10px] tracking-[0.5em] uppercase text-amber-500 mb-4 drop-shadow-md">
            Kami yang berbahagia
          </p>
          <h1 class="text-5xl font-serif italic text-white drop-shadow-xl">{{ data.title }}</h1>
        </div>
      </section>
    </div>

    <div v-if="isOpened" class="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      <button
        @click="toggleMusic"
        class="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-xl transition-all active:scale-90 border border-white/20 backdrop-blur-md"
        :class="isPlaying ? 'bg-amber-800/90 text-white' : 'bg-black/50 text-white/50'"
      >
        <Icon :name="isPlaying ? 'mdi:music' : 'mdi:music-off'" />
      </button>

      <div class="flex flex-col gap-2">
        <button
          @click="scrollUp"
          :disabled="isAtTop"
          class="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-xl transition-all active:scale-90 border border-white/20 bg-black/40 backdrop-blur-md text-white disabled:opacity-0 hover:bg-black/60"
        >
          <Icon name="mdi:chevron-up" />
        </button>
        <button
          @click="scrollDown"
          :disabled="isAtBottom"
          class="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-xl transition-all active:scale-90 border border-white/20 bg-black/40 backdrop-blur-md text-white disabled:opacity-0 hover:bg-black/60"
        >
          <Icon name="mdi:chevron-down" />
        </button>
      </div>
    </div>
  </div>

  <transition name="fade">
    <div
      v-if="activeImage"
      class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
      @click="activeImage = null"
    >
      <img
        :src="activeImage"
        class="max-w-[90%] max-h-[85%] object-contain rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8)]animate-zoom-in"
      />
      <button
        class="absolute top-6 right-6 text-white text-2xl opacity-70 hover:opacity-100 transition"
      >
        <Icon name="akar-icons:cross" class="" />
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'

  const { data, messages } = defineProps<{
    data: any
    messages: any[]
    isEditor?: boolean
  }>()

  const scrollContainer = ref<HTMLElement | null>(null)
  const isOpened = ref(false)
  const isAtTop = ref(true)
  const isAtBottom = ref(false)
  const isPlaying = ref(true)
  const activeImage = ref<string | null>(null)

  const toggleMusic = () => {
    isPlaying.value = !isPlaying.value
  }
  const openInvitation = () => {
    isOpened.value = true
  }

  const handleScroll = () => {
    if (!scrollContainer.value) return
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value
    isAtTop.value = scrollTop <= 20
    isAtBottom.value = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 20
  }

  const scrollUp = () => {
    scrollContainer.value?.scrollBy({
      top: -scrollContainer.value.clientHeight,
      behavior: 'smooth'
    })
  }

  const scrollDown = () => {
    scrollContainer.value?.scrollBy({ top: scrollContainer.value.clientHeight, behavior: 'smooth' })
  }

  const youtubeId = computed(() => {
    const url = data.youtubeUrl || ''
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  })

  const form = ref({
    name: '',
    status: 'Hadir',
    message: ''
  })

  const submitMessage = () => {
    if (!form.value.name || !form.value.message) return

    messages.unshift({
      name: form.value.name,
      status: form.value.status,
      message: form.value.message,
      date: new Date().toLocaleString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    })

    // reset form
    form.value.name = ''
    form.value.status = 'Hadir'
    form.value.message = ''
  }
</script>

<style scoped>
  /* --- BASE SECTION STYLE --- */
  .section-card {
    height: 100vh;
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

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* --- ANIMATIONS --- */
  @keyframes kenburns {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.15);
    }
  }
  .animate-ken-burns {
    animation: kenburns 20s ease-out infinite alternate;
  }

  @keyframes fadeUpCinematic {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.98);
      filter: blur(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  }
  .animate-fade-up {
    opacity: 0;
    animation: fadeUpCinematic 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes pulse-soft {
    0%,
    100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
  .animate-pulse-slow {
    animation: pulse-soft 4s ease-in-out infinite;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .animate-zoom-in {
    animation: zoomIn 0.4s ease;
  }
</style>
