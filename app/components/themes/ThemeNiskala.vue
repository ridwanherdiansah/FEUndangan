<template>
  <div
    class="relative w-full min-h-screen bg-[#0F172A] text-[#FDFBF7] font-sans overflow-x-hidden selection:bg-[#C5A880]/30 selection:text-[#FDFBF7]"
  >
    <div
      class="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-screen"
      style="
        background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');
      "
    ></div>

    <div
      v-if="isOpened"
      class="fixed top-0 left-0 h-1 bg-[#C5A880] z-[90] transition-all duration-300 ease-out shadow-[0_0_10px_rgba(197,168,128,0.3)]"
      :style="{ width: `${scrollProgress}%` }"
    ></div>

    <button
      v-if="isOpened"
      @click="toggleAudio"
      class="fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-full bg-[#1E293B]/80 backdrop-blur-md border border-[#334155] flex items-center justify-center text-[#C5A880] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-105 hover:bg-[#334155]"
    >
      <Icon
        :name="isPlaying ? 'ph:speaker-high-light' : 'ph:speaker-slash-light'"
        class="text-xl"
      />
    </button>

    <audio ref="bgMusic" loop src="/audio/cinematic-romantic.mp3"></audio>

    <div
      class="fixed inset-0 z-[80] flex flex-col items-center justify-center p-6 text-center transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#0F172A]"
      :class="isOpened ? '-translate-y-full' : 'translate-y-0'"
    >
      <img
        :src="
          data?.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800'
        "
        class="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity animate-pan-slow"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#1E293B]/20"
      ></div>

      <div class="relative z-10 flex flex-col items-center w-full max-w-md animate-fade-in">
        <div
          class="w-16 h-16 mb-8 border border-[#C5A880]/30 rounded-full flex items-center justify-center bg-[#1E293B]/30 backdrop-blur-sm"
        >
          <Icon name="ph:flower-lotus-light" class="text-3xl text-[#C5A880]" />
        </div>

        <p class="text-[10px] tracking-[0.4em] uppercase mb-4 text-[#94A3B8] font-light">
          {{ data?.gate?.title || 'Pawiwahan' }}
        </p>
        <h1
          class="text-4xl md:text-5xl font-serif italic mb-10 text-[#FDFBF7] tracking-wide drop-shadow-lg leading-tight"
        >
          {{ data?.title }}
        </h1>

        <div
          class="bg-[#1E293B]/40 backdrop-blur-md border border-[#334155] rounded-2xl p-6 mb-12 w-full max-w-[280px] shadow-2xl"
        >
          <p class="text-[9px] tracking-[0.2em] uppercase text-[#94A3B8] mb-2">Pangulem Kagem:</p>
          <h2 class="text-lg font-serif text-[#FDFBF7]">
            {{ data?.gate?.guestName || 'Tamu Kehormatan' }}
          </h2>
        </div>

        <button
          @click="openInvitation"
          class="group relative overflow-hidden bg-[#C5A880] text-[#0F172A] px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-700 rounded-full hover:bg-[#D4C5B0] shadow-[0_0_20px_rgba(197,168,128,0.15)] flex items-center gap-3 hover:scale-[1.02]"
        >
          <span class="relative z-10 flex items-center gap-2">
            <Icon name="mdi:email-open-outline" class="text-lg" />
            {{ data?.gate?.openText || 'Buka Undangan' }}
          </span>
        </button>
      </div>
    </div>

    <main
      v-if="isOpened"
      class="relative w-full max-w-md mx-auto bg-[#FDFBF7] text-[#1E293B] shadow-2xl min-h-screen overflow-hidden elegant-mega-mendung"
    >
      <section
        class="relative min-h-[90vh] flex flex-col items-center justify-center p-6 text-center"
      >
        <div
          class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0F172A]/5 to-transparent z-0"
        ></div>

        <div class="observe-me w-full flex flex-col items-center relative z-10">
          <Icon name="ph:leaf-light" class="text-3xl text-[#94A3B8] mb-6 opacity-60" />
          <p class="text-[9px] tracking-[0.4em] uppercase mb-8 text-[#94A3B8]">
            {{ data?.cover?.headline || 'The Wedding Of' }}
          </p>

          <div
            class="relative w-full max-w-[280px] aspect-[2/3] mb-10 group overflow-hidden rounded-t-full rounded-b-2xl p-[1px] bg-gradient-to-b from-[#C5A880]/50 to-transparent shadow-[0_20px_40px_-15px_rgba(15,23,42,0.2)]"
          >
            <div class="w-full h-full rounded-t-full rounded-b-xl overflow-hidden bg-[#FDFBF7]">
              <img
                :src="
                  data?.image ||
                  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800'
                "
                class="w-full h-full object-cover filter grayscale-[10%] group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
              />
            </div>
          </div>

          <h1 class="text-3xl font-serif italic text-[#0F172A] mb-4">{{ data?.title }}</h1>
          <p class="text-[10px] tracking-[0.3em] uppercase text-[#64748B] font-medium">
            {{ data?.date }}
          </p>
        </div>
      </section>

      <section
        class="relative py-24 px-8 bg-[#0F172A] text-[#FDFBF7] flex flex-col items-center justify-center text-center"
      >
        <img
          :src="
            data?.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800'
          "
          class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-[0.05] grayscale"
        />

        <div class="observe-me relative z-10 flex flex-col items-center">
          <Icon name="ph:quotes-light" class="text-4xl text-[#C5A880] mb-8 opacity-80" />
          <p class="text-sm leading-loose font-light mb-8 font-serif italic text-[#E2E8F0]">
            "{{
              data?.quote?.text ||
              'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri...'
            }}"
          </p>
          <div class="w-12 h-[1px] bg-[#C5A880]/50 mb-6"></div>
          <p class="text-[9px] tracking-[0.3em] text-[#94A3B8] uppercase">
            {{ data?.quote?.source || '(QS. Ar-Rum: 21)' }}
          </p>
        </div>
      </section>

      <section class="relative py-24 px-6 overflow-hidden">
        <div class="observe-me inline-flex items-center gap-4 mb-16 w-full justify-center">
          <div class="w-10 h-[1px] bg-[#CBD5E1]"></div>
          <h2 class="text-[9px] tracking-[0.4em] uppercase text-[#64748B]">Sang Mempelai</h2>
          <div class="w-10 h-[1px] bg-[#CBD5E1]"></div>
        </div>

        <div class="flex flex-col gap-20">
          <div class="observe-me relative w-full flex justify-end">
            <div
              class="absolute left-0 top-1/2 -translate-y-1/2 w-[85%] bg-white rounded-3xl p-6 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.05)] border border-[#F1F5F9] z-0"
            >
              <h3 class="text-2xl font-serif italic text-[#0F172A] mb-1 leading-tight">
                {{ data?.mempelai?.pria }}
              </h3>
              <p class="text-[9px] text-[#C5A880] tracking-widest uppercase mt-2 mb-1">
                Putra Dari
              </p>
              <p class="text-[11px] text-[#64748B] italic">Bapak & Ibu Tercinta</p>
            </div>
            <div
              class="w-36 h-48 rounded-t-full rounded-bl-3xl overflow-hidden shadow-xl relative z-10 border-[6px] border-[#FDFBF7] bg-[#E2E8F0]"
            >
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400"
                class="w-full h-full object-cover filter grayscale-[15%]"
              />
            </div>
          </div>

          <div class="observe-me relative w-full flex justify-start delay-200">
            <div
              class="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] bg-white rounded-3xl p-6 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.05)] border border-[#F1F5F9] z-0 text-right flex flex-col items-end"
            >
              <h3 class="text-2xl font-serif italic text-[#0F172A] mb-1 leading-tight">
                {{ data?.mempelai?.wanita }}
              </h3>
              <p class="text-[9px] text-[#C5A880] tracking-widest uppercase mt-2 mb-1">
                Putri Dari
              </p>
              <p class="text-[11px] text-[#64748B] italic">Bapak & Ibu Tercinta</p>
            </div>
            <div
              class="w-36 h-48 rounded-t-full rounded-br-3xl overflow-hidden shadow-xl relative z-10 border-[6px] border-[#FDFBF7] bg-[#E2E8F0]"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"
                class="w-full h-full object-cover filter grayscale-[15%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-24 px-6 bg-[#F8FAFC]">
        <div class="observe-me text-center mb-16">
          <h2 class="text-[9px] tracking-[0.4em] uppercase text-[#64748B] mb-4">Waktu & Tempat</h2>
          <div class="w-6 h-[1px] bg-[#C5A880] mx-auto"></div>
        </div>

        <div
          class="observe-me group bg-white rounded-3xl border border-[#F1F5F9] p-8 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] transition-all duration-700 text-center hover:-translate-y-1"
        >
          <div
            class="w-14 h-14 mx-auto bg-[#F8FAFC] rounded-full flex items-center justify-center mb-6"
          >
            <Icon name="ph:rings-light" class="text-3xl text-[#C5A880]" />
          </div>
          <h3 class="text-2xl font-serif italic text-[#0F172A] mb-4">Resepsi Pernikahan</h3>
          <div class="space-y-3 mb-6">
            <p class="text-xs tracking-widest text-[#334155] uppercase font-medium">
              {{ data?.date }}
            </p>
            <p
              class="text-[10px] text-[#64748B] bg-[#F8FAFC] inline-block px-4 py-1.5 rounded-full border border-[#E2E8F0]"
            >
              {{ data?.time }}
            </p>
          </div>
          <p
            class="text-[11px] text-[#64748B] font-light leading-relaxed max-w-[220px] mx-auto mb-6"
          >
            {{ data?.location }}
          </p>
          <a
            :href="data?.mapUrl"
            target="_blank"
            class="inline-block bg-[#0F172A] text-[#FDFBF7] px-6 py-2.5 rounded-full text-[9px] tracking-[0.15em] uppercase hover:bg-[#1E293B] transition-colors"
            >Lihat Peta</a
          >
        </div>
      </section>

      <section class="relative py-24 px-8">
        <h2
          class="observe-me text-[9px] tracking-[0.4em] uppercase text-[#64748B] mb-16 text-center"
        >
          Love Story
        </h2>

        <div class="relative w-full">
          <div
            class="absolute left-[11px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#C5A880] via-[#E2E8F0] to-transparent"
          ></div>

          <div class="observe-me mb-12 pl-12 relative">
            <div
              class="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#FDFBF7] border border-[#C5A880] flex items-center justify-center shadow-sm"
            >
              <div class="w-1.5 h-1.5 bg-[#0F172A] rounded-full"></div>
            </div>
            <p class="text-[9px] tracking-widest text-[#C5A880] uppercase mb-2 font-medium">
              Awal Bertemu
            </p>
            <h3 class="text-lg font-serif italic text-[#0F172A] mb-2">Awal Perjumpaan</h3>
            <p
              class="text-[11px] text-[#64748B] font-light leading-relaxed bg-white p-4 rounded-2xl border border-[#F1F5F9] shadow-[0_5px_15px_-10px_rgba(0,0,0,0.05)]"
            >
              Sebuah pertemuan sederhana yang membawa kami pada rasa nyaman tak terduga, memulai
              cerita yang akan kami ukir bersama.
            </p>
          </div>

          <div class="observe-me mb-12 pl-12 relative">
            <div
              class="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#FDFBF7] border border-[#C5A880] flex items-center justify-center shadow-sm"
            >
              <div class="w-1.5 h-1.5 bg-[#0F172A] rounded-full"></div>
            </div>
            <p class="text-[9px] tracking-widest text-[#C5A880] uppercase mb-2 font-medium">
              {{ data?.date }}
            </p>
            <h3 class="text-lg font-serif italic text-[#0F172A] mb-2">Menikah</h3>
            <p
              class="text-[11px] text-[#64748B] font-light leading-relaxed bg-white p-4 rounded-2xl border border-[#F1F5F9] shadow-[0_5px_15px_-10px_rgba(0,0,0,0.05)]"
            >
              Hari di mana kami mengikat janji suci. Memulai lembaran baru berdua dengan iringan doa
              dari orang-orang tersayang.
            </p>
          </div>
        </div>
      </section>

      <section class="relative py-24 px-6 bg-[#0F172A] text-[#FDFBF7]">
        <h2
          class="observe-me text-[9px] tracking-[0.4em] uppercase text-[#94A3B8] mb-12 text-center"
        >
          Momen Kami
        </h2>

        <div class="columns-2 gap-3 space-y-3">
          <div
            v-for="(img, idx) in data?.gallery?.slice(0, 6) || []"
            :key="idx"
            class="observe-me break-inside-avoid overflow-hidden rounded-xl group relative cursor-pointer"
          >
            <div
              class="absolute inset-0 bg-[#0F172A]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-700"
            ></div>
            <img
              :src="img"
              class="w-full object-cover transform group-hover:scale-[1.05] transition-transform duration-[1500ms] ease-out filter grayscale-[10%]"
            />
          </div>
        </div>
      </section>

      <section class="relative py-24 px-6 bg-[#F8FAFC]">
        <div
          class="observe-me bg-white rounded-3xl p-8 border border-[#F1F5F9] shadow-[0_20px_40px_-15px_rgba(15,23,42,0.05)] mb-12"
        >
          <Icon
            name="ph:gift-light"
            class="text-3xl text-[#C5A880] mb-5 mx-auto block text-center"
          />
          <h3 class="text-xl font-serif italic text-[#0F172A] mb-3 text-center">Tanda Kasih</h3>
          <p class="text-[10px] text-[#64748B] font-light mb-6 leading-relaxed text-center">
            Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih dapat melalui:
          </p>

          <div
            class="bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0] mb-3 relative flex flex-col justify-center"
          >
            <p class="text-sm tracking-[0.15em] font-mono text-[#1E293B] mb-1">5140 8360 11</p>
            <p class="text-[8px] text-[#64748B] uppercase tracking-widest">
              BCA - {{ data?.mempelai?.pria }}
            </p>
            <button
              class="absolute top-1/2 -translate-y-1/2 right-4 text-[#94A3B8] hover:text-[#C5A880] transition-colors p-2"
            >
              <Icon name="mdi:content-copy" class="text-lg" />
            </button>
          </div>
        </div>

        <div
          class="observe-me bg-[#0F172A] rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] text-[#FDFBF7]"
        >
          <Icon
            name="ph:envelope-simple-light"
            class="text-3xl text-[#C5A880] mb-5 mx-auto block text-center"
          />
          <h3 class="text-xl font-serif italic text-[#FDFBF7] mb-6 text-center">RSVP & Ucapan</h3>

          <form @submit.prevent class="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              class="w-full bg-[#1E293B]/50 border border-[#334155] px-4 py-3.5 text-xs text-[#FDFBF7] placeholder-[#64748B] focus:border-[#C5A880] transition-colors outline-none rounded-xl"
            />

            <div class="relative">
              <select
                class="w-full bg-[#1E293B]/50 border border-[#334155] px-4 py-3.5 text-xs text-[#64748B] focus:text-[#FDFBF7] focus:border-[#C5A880] transition-colors outline-none appearance-none rounded-xl"
              >
                <option value="" disabled selected>Konfirmasi Kehadiran</option>
                <option value="hadir">Hadir</option>
                <option value="tidak">Tidak Hadir</option>
              </select>
              <Icon
                name="mdi:chevron-down"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none"
              />
            </div>

            <textarea
              :placeholder="data?.ucapan?.mockMessage || 'Berikan ucapan dan doa...'"
              rows="3"
              class="w-full bg-[#1E293B]/50 border border-[#334155] px-4 py-3.5 text-xs text-[#FDFBF7] placeholder-[#64748B] focus:border-[#C5A880] transition-colors outline-none resize-none rounded-xl"
            ></textarea>

            <button
              class="w-full mt-2 bg-[#C5A880] text-[#0F172A] py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#D4C5B0] transition-all duration-500 rounded-xl shadow-[0_5px_15px_rgba(197,168,128,0.2)]"
            >
              Kirim Ucapan
            </button>
          </form>
        </div>
      </section>

      <section class="relative py-32 px-6 bg-[#0F172A] text-center overflow-hidden">
        <img
          :src="
            data?.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800'
          "
          class="absolute inset-0 w-full h-full object-cover opacity-[0.05] mix-blend-screen animate-pan-slow grayscale"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-transparent"
        ></div>

        <div class="observe-me relative z-10 flex flex-col items-center">
          <Icon name="ph:flower-lotus-light" class="text-4xl text-[#C5A880] mb-8 opacity-80" />
          <p class="text-[11px] font-light text-[#94A3B8] mb-10 leading-loose max-w-[280px]">
            {{
              data?.closing?.text ||
              'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.'
            }}
          </p>
          <div class="w-8 h-[1px] bg-[#334155] mb-8"></div>
          <p class="text-[9px] tracking-[0.4em] uppercase text-[#C5A880] mb-4">Hatur Nuhun</p>
          <h1 class="text-3xl font-serif italic text-[#FDFBF7]">{{ data?.title }}</h1>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'

  const props = defineProps<{
    data?: any
    isEditor?: boolean
    currentSlide?: number // Prop untuk sinkronisasi Editor
  }>()

  // --- State Bawaan Template ---
  const isOpened = ref(false)
  const isPlaying = ref(false)
  const bgMusic = ref<HTMLAudioElement | null>(null)
  const scrollProgress = ref(0)
  const scrollContainer = ref<HTMLElement | null>(null)

  // --- Methods Audio & Undangan ---
  const openInvitation = async () => {
    isOpened.value = true
    if (bgMusic.value && !props.isEditor) {
      bgMusic.value
        .play()
        .then(() => {
          isPlaying.value = true
        })
        .catch((e) => console.log('Autoplay prevented:', e))
    }

    await nextTick()
    initObserver()
  }

  const toggleAudio = () => {
    if (!bgMusic.value) return
    if (isPlaying.value) {
      bgMusic.value.pause()
    } else {
      bgMusic.value.play()
    }
    isPlaying.value = !isPlaying.value
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight
    scrollProgress.value = (scrollTop / scrollHeight) * 100
  }

  // --- Cinematic Scroll Observer (Animasi) ---
  let observer: IntersectionObserver | null = null

  const initObserver = () => {
    const options = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    }, options)

    // Mencari elemen dengan class 'observe-me' untuk dianimasikan
    document.querySelectorAll('.observe-me').forEach((el) => {
      observer?.observe(el)
    })
  }

  // --- Watcher untuk Editor Sync ---
  watch(
    () => props.currentSlide,
    async (newSlide) => {
      if (newSlide !== undefined) {
        if (newSlide > 0) {
          if (!isOpened.value) {
            isOpened.value = true
            await nextTick()
            initObserver() // Inisialisasi animasi saat dibuka via editor
          }

          setTimeout(() => {
            // Karena template ini pakai elemen <main>, kita cari section di dalamnya
            const sections = document.querySelectorAll('main section')
            const targetSection = sections[newSlide - 1]

            if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 400)
        } else {
          isOpened.value = false
        }
      }
    },
    { immediate: true }
  )

  // --- Lifecycle ---
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (observer) observer.disconnect()
  })
</script>

<style scoped>
  /* Abstract Mega Mendung / Cloud Pattern for Background */
  .elegant-mega-mendung {
    background-image:
      radial-gradient(circle at 100% 0%, rgba(148, 163, 184, 0.04) 0%, transparent 40%),
      radial-gradient(circle at 0% 100%, rgba(15, 23, 42, 0.04) 0%, transparent 40%);
  }

  /* Base states for Intersection Observer Animations */
  .observe-me {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(4px);
    transition:
      opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.2s cubic-bezier(0.22, 1, 0.36, 1),
      filter 1.2s ease-out;
  }

  .observe-me.is-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  /* Stagger delays for multiple elements in view */
  .delay-200 {
    transition-delay: 200ms;
  }
  .delay-400 {
    transition-delay: 400ms;
  }

  /* Cinematic Slow Panning for Background Images */
  @keyframes panSlow {
    0% {
      transform: scale(1.05) translate(0, 0);
    }
    50% {
      transform: scale(1.1) translate(-1%, -1%);
    }
    100% {
      transform: scale(1.05) translate(0, 0);
    }
  }

  .animate-pan-slow {
    animation: panSlow 30s ease-in-out infinite alternate;
  }

  /* Initial Fade In for Cover */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
      filter: blur(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  .animate-fade-in {
    animation: fadeIn 2s ease-out forwards;
  }
</style>
