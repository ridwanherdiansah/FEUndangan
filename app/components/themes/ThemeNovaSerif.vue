<template>
  <div
    class="absolute inset-0 w-full h-full font-sans selection:bg-[#64748B]/20 selection:text-[#1E293B] bg-[#F8FAFC] text-[#334155] overflow-hidden"
  >
    <div
      class="pointer-events-none absolute inset-0 z-[100] opacity-[0.02] mix-blend-multiply"
      style="
        background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');
      "
    ></div>

    <div
      class="pointer-events-none absolute inset-0 z-[90] shadow-[inset_0_0_120px_rgba(30,41,59,0.15)]"
    ></div>

    <iframe
      v-if="isOpened && youtubeId"
      :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&controls=0`"
      class="opacity-0 pointer-events-none absolute w-0 h-0"
      allow="autoplay"
    >
    </iframe>

    <div
      class="absolute inset-0 z-[80] flex flex-col items-center justify-center p-6 text-center transition-all duration-[1800ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-[#1E293B]"
      :class="
        isOpened
          ? '-translate-y-full opacity-0 scale-[1.02]'
          : 'translate-y-0 opacity-100 scale-100'
      "
    >
      <img
        :src="
          data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'
        "
        class="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-luminosity animate-pan-extremely-slow"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/60 to-transparent z-0"
      ></div>

      <div class="relative z-10 flex flex-col items-center w-full max-w-sm">
        <Icon name="ph:flower-lotus-light" class="text-5xl text-[#D4C5B0] mb-8 opacity-80" />

        <p class="text-[10px] tracking-[0.4em] uppercase mb-4 text-[#E2E8F0] font-light">
          Pawiwahan
        </p>
        <h1 class="text-5xl md:text-6xl font-serif italic mb-12 text-[#F8FAFC] tracking-wide">
          {{ data.title }}
        </h1>

        <div
          class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-12 w-full max-w-[280px]"
        >
          <p class="text-[9px] tracking-[0.2em] uppercase text-[#E2E8F0]/70 mb-2">
            Pangulem kagem:
          </p>
          <h2 class="text-lg font-serif text-[#F8FAFC]">
            {{ data.gate?.guestName || 'Tamu Undangan' }}
          </h2>
        </div>

        <button
          @click="openInvitation"
          class="bg-[#334155] text-[#F8FAFC] px-10 py-4 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-700 rounded-full hover:bg-[#475569] flex items-center gap-3 hover:scale-[1.02]"
        >
          <span class="flex items-center gap-2 opacity-90">
            <Icon name="mdi:email-open-outline" class="text-lg" /> Buka Undangan
          </span>
        </button>
      </div>
    </div>

    <div
      ref="scrollContainer"
      @scroll="handleScroll"
      class="absolute inset-0 w-full h-full overflow-y-auto snap-y snap-mandatory no-scrollbar z-10 scroll-smooth elegant-mega-mendung"
    >
      <section class="section-card flex flex-col justify-center relative bg-[#F8FAFC]">
        <div
          class="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#1E293B]/5 to-transparent z-0"
        ></div>
        <div class="w-[85%] max-w-sm flex flex-col items-center animate-fade-up-slow relative z-10">
          <Icon name="ph:leaf-light" class="text-3xl text-[#64748B] mb-5 opacity-60" />
          <p class="text-[9px] tracking-[0.4em] uppercase mb-8 text-[#64748B]">The Wedding Of</p>

          <div class="relative w-full aspect-[2/3] mb-10 group">
            <div
              class="w-full h-full rounded-t-full rounded-b-lg overflow-hidden p-[1px] bg-gradient-to-b from-[#E2E8F0] to-transparent relative z-10 shadow-[0_20px_50px_-15px_rgba(30,41,59,0.1)]"
            >
              <div class="w-full h-full rounded-t-full rounded-b-md overflow-hidden bg-[#F8FAFC]">
                <img
                  :src="
                    data.image ||
                    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'
                  "
                  class="w-full h-full object-cover filter grayscale-[20%] contrast-[1.05] scale-[1.03] group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                />
              </div>
            </div>
          </div>

          <h1 class="text-4xl font-serif italic text-[#1E293B] mb-3">{{ data.title }}</h1>
          <p class="text-[10px] tracking-[0.3em] uppercase text-[#64748B]">{{ data.date }}</p>
        </div>
      </section>

      <section class="section-card bg-[#1E293B] relative flex flex-col justify-center items-center">
        <img
          :src="
            data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'
          "
          class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-[0.07] grayscale animate-pan-extremely-slow"
        />

        <div
          class="relative z-10 flex flex-col items-center max-w-[80%] animate-fade-up-slow text-center"
        >
          <Icon name="ph:quotes-light" class="text-4xl text-[#64748B] mb-8 opacity-60" />

          <p class="text-sm leading-[2.2] font-light mb-8 text-[#E2E8F0] font-serif italic">
            "{{
              data.quote?.text ||
              'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya...'
            }}"
          </p>
          <div class="w-10 h-[1px] bg-[#64748B]/50 mb-6"></div>
          <p class="text-[9px] tracking-[0.3em] text-[#94A3B8] uppercase">
            {{ data.quote?.source || '(QS. Ar-Rum: 21)' }}
          </p>
        </div>
      </section>

      <section
        class="section-card flex flex-col justify-center overflow-y-auto pt-24 pb-24 relative bg-[#F8FAFC]"
      >
        <div class="w-[85%] max-w-sm flex flex-col items-center relative z-10">
          <div class="inline-flex items-center gap-4 mb-14 animate-fade-up-slow">
            <div class="w-10 h-[1px] bg-[#CBD5E1]"></div>
            <h2 class="text-[9px] tracking-[0.4em] uppercase text-[#64748B]">Sang Mempelai</h2>
            <div class="w-10 h-[1px] bg-[#CBD5E1]"></div>
          </div>

          <div class="relative w-full mb-16 animate-fade-up-stagger">
            <div
              class="absolute right-0 top-8 w-4/5 h-full bg-white rounded-2xl p-6 shadow-[0_15px_40px_-15px_rgba(30,41,59,0.05)] z-0 flex flex-col justify-center pl-16 border border-[#F1F5F9]"
            >
              <h3 class="text-2xl font-serif italic text-[#1E293B] mb-1">
                {{ data.mempelai.pria }}
              </h3>
              <p class="text-[9px] text-[#64748B] tracking-widest uppercase mb-1 mt-2">
                Putra Dari
              </p>
              <p class="text-[11px] text-[#94A3B8] italic">Bapak ... & Ibu ...</p>
              <a
                href="#"
                class="mt-4 text-[10px] text-[#64748B] flex items-center gap-2 hover:text-[#1E293B] transition-colors"
              >
                <Icon name="mdi:instagram" /> @instagram_pria
              </a>
            </div>
            <div
              class="w-32 h-44 rounded-t-full rounded-bl-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(30,41,59,0.15)] relative z-10 border-4 border-[#F8FAFC] bg-[#E2E8F0]"
            >
              <img
                :src="
                  data.mempelai.priaImage ||
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400'
                "
                class="w-full h-full object-cover grayscale-[15%]"
              />
            </div>
          </div>

          <div class="text-4xl font-serif italic text-[#CBD5E1] mb-16 animate-fade-up-stagger">
            &
          </div>

          <div class="relative w-full animate-fade-up-stagger">
            <div
              class="absolute left-0 top-8 w-4/5 h-full bg-white rounded-2xl p-6 shadow-[0_15px_40px_-15px_rgba(30,41,59,0.05)] z-0 flex flex-col justify-center pr-16 text-right items-end border border-[#F1F5F9]"
            >
              <h3 class="text-2xl font-serif italic text-[#1E293B] mb-1">
                {{ data.mempelai.wanita }}
              </h3>
              <p class="text-[9px] text-[#64748B] tracking-widest uppercase mb-1 mt-2">
                Putri Dari
              </p>
              <p class="text-[11px] text-[#94A3B8] italic">Bapak ... & Ibu ...</p>
              <a
                href="#"
                class="mt-4 text-[10px] text-[#64748B] flex items-center gap-2 hover:text-[#1E293B] transition-colors"
              >
                <Icon name="mdi:instagram" /> @instagram_wanita
              </a>
            </div>
            <div
              class="w-32 h-44 rounded-t-full rounded-br-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(30,41,59,0.15)] relative z-10 border-4 border-[#F8FAFC] bg-[#E2E8F0] ml-auto"
            >
              <img
                :src="
                  data.mempelai.wanitaImage ||
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'
                "
                class="w-full h-full object-cover grayscale-[15%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="section-card relative flex flex-col justify-center py-24 bg-white">
        <div class="w-[85%] max-w-sm relative z-10">
          <div class="text-center mb-14 animate-fade-up-slow">
            <h2 class="text-[9px] tracking-[0.4em] uppercase text-[#64748B] mb-4">
              Rangkaian Acara
            </h2>
            <div class="w-6 h-[1px] bg-[#CBD5E1] mx-auto"></div>
          </div>

          <div class="flex flex-col gap-6">
            <div
              class="group bg-[#F8FAFC] rounded-2xl border border-[#F1F5F9] p-8 shadow-[0_10px_30px_-15px_rgba(30,41,59,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(30,41,59,0.08)] transition-all duration-700 animate-fade-up-stagger text-center hover:-translate-y-[2px]"
            >
              <Icon name="ph:rings-light" class="text-4xl text-[#64748B] mb-5 opacity-80" />
              <h3 class="text-2xl font-serif italic text-[#1E293B] mb-4">Akad Nikah</h3>
              <div class="space-y-3 mb-6">
                <p class="text-xs tracking-widest text-[#475569] uppercase">{{ data.date }}</p>
                <p
                  class="text-[10px] text-[#64748B] bg-white inline-block px-4 py-1.5 rounded-full border border-[#E2E8F0]"
                >
                  08.00 WIB - Selesai
                </p>
              </div>
              <p
                class="text-[11px] text-[#64748B] font-light leading-relaxed max-w-[200px] mx-auto"
              >
                {{ data.location }}
              </p>
            </div>

            <div
              class="group bg-[#F8FAFC] rounded-2xl border border-[#F1F5F9] p-8 shadow-[0_10px_30px_-15px_rgba(30,41,59,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(30,41,59,0.08)] transition-all duration-700 animate-fade-up-stagger text-center hover:-translate-y-[2px]"
              style="animation-delay: 200ms"
            >
              <Icon name="ph:glass-cheers-light" class="text-4xl text-[#64748B] mb-5 opacity-80" />
              <h3 class="text-2xl font-serif italic text-[#1E293B] mb-4">Resepsi</h3>
              <div class="space-y-3 mb-6">
                <p class="text-xs tracking-widest text-[#475569] uppercase">{{ data.date }}</p>
                <p
                  class="text-[10px] text-[#64748B] bg-white inline-block px-4 py-1.5 rounded-full border border-[#E2E8F0]"
                >
                  {{ data.time }} - Selesai
                </p>
              </div>
              <p
                class="text-[11px] text-[#64748B] font-light leading-relaxed max-w-[200px] mx-auto"
              >
                {{ data.location }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="section-card flex-col items-center justify-start py-24 overflow-y-auto bg-[#F8FAFC]"
      >
        <h2 class="text-[9px] tracking-[0.4em] uppercase text-[#64748B] mb-14 animate-fade-up-slow">
          Love Story
        </h2>

        <div class="w-[85%] max-w-sm relative">
          <div
            class="absolute left-[9px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#CBD5E1] via-[#E2E8F0] to-transparent"
          ></div>

          <div class="mb-12 pl-10 relative animate-fade-up-stagger">
            <div
              class="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center"
            >
              <div class="w-1 h-1 bg-[#64748B] rounded-full"></div>
            </div>
            <p class="text-[9px] tracking-widest text-[#64748B] uppercase mb-2">Desember 2022</p>
            <h3 class="text-lg font-serif italic text-[#1E293B] mb-2">Awal Bertemu</h3>
            <p class="text-[11px] text-[#64748B] font-light leading-relaxed">
              Kita bertemu di tahun 2022. Awalnya hanya sebatas teman biasa, namun seiring
              berjalannya waktu, rasa nyaman itu mulai tumbuh.
            </p>
          </div>

          <div class="mb-12 pl-10 relative animate-fade-up-stagger" style="animation-delay: 200ms">
            <div
              class="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center"
            >
              <div class="w-1 h-1 bg-[#64748B] rounded-full"></div>
            </div>
            <p class="text-[9px] tracking-widest text-[#64748B] uppercase mb-2">Januari 2023</p>
            <h3 class="text-lg font-serif italic text-[#1E293B] mb-2">Berkomitmen</h3>
            <p class="text-[11px] text-[#64748B] font-light leading-relaxed">
              Kami memutuskan untuk menjalin hubungan yang lebih serius dan saling mengenal keluarga
              satu sama lain.
            </p>
          </div>

          <div class="pl-10 relative animate-fade-up-stagger" style="animation-delay: 400ms">
            <div
              class="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center"
            >
              <div class="w-1 h-1 bg-[#64748B] rounded-full"></div>
            </div>
            <p class="text-[9px] tracking-widest text-[#64748B] uppercase mb-2">Desember 2025</p>
            <h3 class="text-lg font-serif italic text-[#1E293B] mb-2">Menikah</h3>
            <p class="text-[11px] text-[#64748B] font-light leading-relaxed">
              Dan kami bersyukur, dipertemukan Allah di waktu terbaik. Kini kami menanti hari
              istimewa kami.
            </p>
          </div>
        </div>
      </section>

      <section class="section-card flex-col py-24 bg-white">
        <h2 class="text-[9px] tracking-[0.4em] uppercase text-[#64748B] mb-12 animate-fade-up-slow">
          Momen Kami
        </h2>

        <div class="w-[85%] max-w-sm columns-2 gap-3 space-y-3 animate-fade-up-slow">
          <div
            v-for="(img, idx) in data.gallery?.slice(0, 4)"
            :key="idx"
            class="break-inside-avoid overflow-hidden rounded-xl shadow-sm group relative bg-[#F8FAFC]"
          >
            <div
              class="absolute inset-0 bg-[#1E293B]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-700"
            ></div>
            <img
              :src="img"
              class="w-full object-cover transform group-hover:scale-[1.03] transition-transform duration-[1500ms] ease-out filter grayscale-[10%] contrast-[1.02]"
            />
          </div>
        </div>
      </section>

      <section class="section-card flex-col py-24 overflow-y-auto relative bg-[#F8FAFC]">
        <h2 class="text-[9px] tracking-[0.4em] uppercase text-[#64748B] mb-12 animate-fade-up-slow">
          Informasi Tambahan
        </h2>

        <div class="w-[85%] max-w-sm flex flex-col gap-6 relative z-10">
          <div
            class="bg-white rounded-2xl p-8 border border-[#F1F5F9] shadow-[0_10px_30px_-15px_rgba(30,41,59,0.05)] animate-fade-up-slow text-center transition-transform duration-700 hover:-translate-y-[2px]"
          >
            <Icon name="ph:map-pin-light" class="text-3xl text-[#64748B] mb-4 mx-auto" />
            <h3 class="text-xl font-serif italic text-[#1E293B] mb-5">Peta Lokasi</h3>
            <a
              :href="data.mapUrl"
              target="_blank"
              class="inline-block bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155] px-8 py-3 text-[9px] tracking-[0.2em] uppercase hover:bg-[#1E293B] hover:text-white transition-all duration-500 rounded-full"
            >
              Buka Google Maps
            </a>
          </div>

          <div
            class="bg-[#1E293B] rounded-2xl p-8 shadow-[0_15px_40px_-15px_rgba(30,41,59,0.15)] relative overflow-hidden animate-fade-up-stagger"
            style="animation-delay: 200ms"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full"></div>
            <Icon name="ph:gift-light" class="text-3xl text-[#94A3B8] mb-5" />
            <h3 class="text-xl font-serif italic text-[#F8FAFC] mb-3">Tanda Kasih</h3>
            <p class="text-[10px] text-[#94A3B8] font-light mb-6 leading-relaxed">
              Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih dapat melalui:
            </p>

            <div
              class="bg-[#334155]/30 rounded-xl p-4 border border-white/5 mb-3 relative transition-colors duration-500 hover:bg-[#334155]/50"
            >
              <p class="text-sm tracking-[0.15em] font-mono text-[#F8FAFC] mb-1">5101 5001 7177</p>
              <p class="text-[8px] text-[#94A3B8] uppercase tracking-widest">Bank BTN - Widi</p>
              <button
                class="absolute top-1/2 -translate-y-1/2 right-4 text-[#64748B] hover:text-[#E2E8F0] transition-colors"
              >
                <Icon name="mdi:content-copy" class="text-lg" />
              </button>
            </div>

            <div
              class="bg-[#334155]/30 rounded-xl p-4 border border-white/5 relative transition-colors duration-500 hover:bg-[#334155]/50"
            >
              <p class="text-sm tracking-[0.15em] font-mono text-[#F8FAFC] mb-1">5140 8360 11</p>
              <p class="text-[8px] text-[#94A3B8] uppercase tracking-widest">BCA - Syidik</p>
              <button
                class="absolute top-1/2 -translate-y-1/2 right-4 text-[#64748B] hover:text-[#E2E8F0] transition-colors"
              >
                <Icon name="mdi:content-copy" class="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="section-card flex-col py-24 overflow-y-auto bg-white">
        <div class="w-[85%] max-w-sm flex flex-col items-center">
          <Icon
            name="ph:envelope-simple-light"
            class="text-4xl text-[#64748B] mb-5 animate-fade-up-slow opacity-80"
          />
          <h2
            class="text-[9px] tracking-[0.4em] uppercase text-[#64748B] mb-10 animate-fade-up-slow"
          >
            RSVP & Ucapan
          </h2>

          <div
            class="w-full bg-[#F8FAFC] p-8 rounded-2xl border border-[#F1F5F9] shadow-[0_10px_30px_-15px_rgba(30,41,59,0.05)] animate-fade-up-slow"
          >
            <div class="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                class="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-xs text-[#334155] placeholder-[#94A3B8] focus:border-[#94A3B8] transition-colors outline-none rounded-lg"
              />

              <div class="relative">
                <select
                  class="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-xs text-[#334155] focus:border-[#94A3B8] transition-colors outline-none appearance-none rounded-lg"
                >
                  <option value="" disabled selected>Konfirmasi Kehadiran</option>
                  <option>Hadir</option>
                  <option>Tidak Hadir</option>
                </select>
                <Icon
                  name="mdi:chevron-down"
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none"
                />
              </div>

              <textarea
                placeholder="Berikan ucapan dan do'a..."
                rows="3"
                class="w-full bg-white border border-[#E2E8F0] px-4 py-3 text-xs text-[#334155] placeholder-[#94A3B8] focus:border-[#94A3B8] transition-colors outline-none resize-none rounded-lg"
              ></textarea>

              <button
                class="w-full mt-2 bg-[#1E293B] text-[#F8FAFC] py-3.5 text-[9px] font-medium tracking-[0.2em] uppercase hover:bg-[#334155] transition-all duration-500 rounded-lg"
              >
                Kirim Ucapan
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        class="section-card bg-[#1E293B] relative flex flex-col items-center justify-center p-6 text-center"
      >
        <img
          :src="
            data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'
          "
          class="absolute inset-0 w-full h-full object-cover opacity-[0.05] mix-blend-screen animate-pan-extremely-slow grayscale"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/90 to-transparent"
        ></div>

        <div class="relative z-10 max-w-[80%] flex flex-col items-center animate-fade-up-slow">
          <Icon name="ph:flower-lotus-light" class="text-4xl text-[#94A3B8] mb-8 opacity-60" />

          <p class="text-[11px] font-light text-[#E2E8F0]/80 mb-10 leading-[2]">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir untuk memberikan doa restu.
          </p>
          <div class="w-8 h-[1px] bg-[#64748B]/40 mb-8"></div>
          <p class="text-[9px] tracking-[0.4em] uppercase text-[#94A3B8] mb-4">Hatur Nuhun</p>
          <h1 class="text-3xl font-serif italic text-[#F8FAFC]">{{ data.title }}</h1>
        </div>
      </section>
    </div>

    <div v-if="!isEditor && isOpened" class="absolute bottom-8 right-6 z-[90] flex flex-col gap-3">
      <button
        v-if="!isAtBottom"
        @click="scrollDown"
        class="w-10 h-10 bg-white/50 border border-[#CBD5E1]/50 text-[#64748B] rounded-full flex items-center justify-center hover:bg-[#1E293B] hover:text-white backdrop-blur-md transition-all duration-500 cursor-pointer shadow-sm"
      >
        <Icon name="ph:arrow-down-light" class="text-lg" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, watch, nextTick } from 'vue'

  // 1. Tambahkan currentSlide ke dalam Props
  const props = defineProps<{
    data: any
    isEditor?: boolean
    currentSlide?: number // Prop yang dikirim dari Parent (Editor)
  }>()

  const isOpened = ref(false)
  const scrollContainer = ref<HTMLElement | null>(null)
  const isAtTop = ref(true)
  const isAtBottom = ref(false)

  // 2. Watcher untuk mengontrol Buka/Tutup Undangan & Auto-Scroll
  watch(
    () => props.currentSlide,
    async (newSlide) => {
      if (newSlide !== undefined) {
        if (newSlide > 0) {
          // Jika di slide 1 atau lebih, buka undangan!
          isOpened.value = true

          await nextTick()

          // Beri sedikit delay agar animasi Buka Undangan berjalan sebelum mulai scrolling
          setTimeout(() => {
            // Cari elemen section. Menggunakan scrollContainer jika ada, atau document jika tidak ada.
            const sections = scrollContainer.value
              ? scrollContainer.value.querySelectorAll('section')
              : document.querySelectorAll('section')

            // newSlide - 1 karena:
            // Slide 0 = Gate (di luar section)
            // Slide 1 = Section 0 (Cover)
            // Slide 2 = Section 1 (Quote), dst.
            const targetSection = sections[newSlide - 1]

            if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 400) // Delay 400ms (Bisa disesuaikan dengan durasi CSS transition gate)
        } else {
          // Jika kembali ke Slide 0, tutup kembali gate undangannya
          isOpened.value = false
        }
      }
    },
    { immediate: true }
  )

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
    } else {
      // Fallback untuk template cinematic yang menggunakan window scroll
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  const youtubeId = computed(() => {
    if (!props.data?.youtubeUrl) return null
    const url = props.data.youtubeUrl
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  })
</script>

<style scoped>
  /* Core Snap Scrolling Framework */
  .section-card {
    height: 100vh;
    height: 100dvh;
    width: 100%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  /* Hide Scrollbar */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Elegant & Extremely Subtle Mega Mendung Pattern */
  .elegant-mega-mendung {
    background-image:
      radial-gradient(circle at 100% 0%, rgba(100, 116, 139, 0.02) 0%, transparent 25%),
      radial-gradient(circle at 0% 100%, rgba(30, 41, 59, 0.02) 0%, transparent 25%);
  }

  /* --- CINEMATIC SLOW ANIMATIONS --- */

  /* Extremely Slow Staggered Fade Up for breathable entrance */
  @keyframes fadeUpSlow {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-up-slow {
    animation: fadeUpSlow 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .animate-fade-up-stagger {
    opacity: 0;
    animation: fadeUpSlow 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  /* Almost Imperceptible Cinematic Image Panning */
  @keyframes panExtremelySlow {
    0% {
      transform: scale(1.02) translate(0, 0);
    }
    50% {
      transform: scale(1.04) translate(-0.5%, -0.5%);
    }
    100% {
      transform: scale(1.02) translate(0, 0);
    }
  }

  .animate-pan-extremely-slow {
    animation: panExtremelySlow 40s ease-in-out infinite alternate;
  }
</style>
