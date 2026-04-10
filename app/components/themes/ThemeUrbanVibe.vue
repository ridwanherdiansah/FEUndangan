<template>
  <div class="absolute inset-0 w-full h-full font-sans selection:bg-[#D4AF37]/30 selection:text-[#1A2F24] bg-[#F4EFE6] text-[#2C4135] overflow-hidden">
    
    <div class="pointer-events-none absolute inset-0 z-[100] opacity-[0.04] mix-blend-multiply" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    
    <div class="pointer-events-none absolute inset-0 z-[90] shadow-[inset_0_0_150px_rgba(0,0,0,0.3)]"></div>

    <iframe 
      v-if="isOpened && youtubeId" 
      :src="`https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&controls=0`" 
      class="opacity-0 pointer-events-none absolute w-0 h-0" 
      allow="autoplay">
    </iframe>

    <div 
      class="absolute inset-0 z-[80] flex flex-col items-center justify-center p-6 text-center transition-all duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-[#1A2F24]"
      :class="isOpened ? '-translate-y-full opacity-0 scale-105' : 'translate-y-0 opacity-100 scale-100'"
    >
      <img :src="data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'" class="absolute inset-0 w-full h-full object-cover z-0 opacity-50 animate-pan-slow" />
      
      <div class="absolute inset-0 bg-gradient-to-t from-[#1A2F24] via-[#1A2F24]/60 to-transparent z-0"></div>

      <div class="relative z-10 flex flex-col items-center w-full max-w-sm">
        <div class="relative mb-6">
          <div class="absolute inset-0 bg-[#D4AF37] blur-2xl opacity-20 rounded-full animate-pulse-slow"></div>
          <Icon name="ph:flower-lotus-thin" class="text-6xl text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
        </div>
        
        <p class="text-[10px] tracking-[0.4em] uppercase mb-4 text-[#F4EFE6]/80 font-light">Pawiwahan</p>
        <h1 class="text-5xl md:text-6xl font-serif italic mb-10 text-[#F4EFE6] drop-shadow-2xl">{{ data.title }}</h1>
        
        <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 w-full relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <p class="text-[10px] tracking-[0.2em] uppercase text-[#F4EFE6]/70 mb-2">Pangulem kagem:</p>
          <h2 class="text-xl font-serif text-[#D4AF37]">{{ data.gate?.guestName || 'Tamu Undangan' }}</h2>
        </div>

        <button 
          @click="openInvitation" 
          class="relative overflow-hidden group bg-[#D4AF37] text-[#1A2F24] px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-700 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] flex items-center gap-3 hover:scale-105"
        >
          <div class="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          <span class="relative z-10 flex items-center gap-2">
            <Icon name="mdi:email-open-outline" class="text-lg" /> Buka Undangan
          </span>
        </button>
      </div>
    </div>

    <div ref="scrollContainer" @scroll="handleScroll" class="absolute inset-0 w-full h-full overflow-y-auto snap-y snap-mandatory no-scrollbar z-10 scroll-smooth bg-[#F4EFE6] mega-mendung-pattern">

      <section class="section-card flex flex-col justify-center relative">
        <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#1A2F24]/10 to-transparent"></div>
        <div class="w-[85%] max-w-sm flex flex-col items-center animate-fade-up-stagger">
          <Icon name="ph:leaf-thin" class="text-3xl text-[#6B4E31] mb-4 opacity-70" />
          <p class="text-[10px] tracking-[0.4em] uppercase mb-8 text-[#6B4E31]">The Wedding Of</p>
          
          <div class="relative w-full aspect-[2/3] mb-10 group">
            <div class="absolute -inset-2 bg-gradient-to-b from-[#D4AF37] to-[#1A2F24] rounded-t-full rounded-b-xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div class="w-full h-full rounded-t-full rounded-b-xl overflow-hidden p-1 bg-gradient-to-b from-[#D4AF37]/50 to-[#6B4E31]/20 shadow-2xl relative z-10">
              <img :src="data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'" class="w-full h-full object-cover rounded-t-full rounded-b-lg scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out" />
            </div>
            <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#F4EFE6] border border-[#D4AF37]/30 rounded-full flex items-center justify-center z-20 shadow-lg">
              <Icon name="ph:sparkle-thin" class="text-[#D4AF37] text-xl animate-spin-slow" />
            </div>
          </div>

          <h1 class="text-4xl font-serif italic text-[#1A2F24] mb-4">{{ data.title }}</h1>
          <p class="text-xs tracking-[0.3em] uppercase text-[#6B4E31] font-bold">{{ data.date }}</p>
        </div>
      </section>

      <section class="section-card flex flex-col justify-center bg-[#1A2F24] text-[#F4EFE6] relative">
        <img :src="data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-10 grayscale animate-pan-slow" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#1A2F24] via-transparent to-[#1A2F24]"></div>

        <div class="relative z-10 flex flex-col items-center max-w-[85%] animate-fade-up text-center">
          <Icon name="ph:quotes-thin" class="text-6xl text-[#D4AF37] mb-8 opacity-80" /> 
          
          <p class="text-sm leading-loose font-light mb-8 text-[#F4EFE6]/90 font-serif italic">
            "{{ data.quote?.text || 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya...' }}"
          </p>
          <div class="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>
          <p class="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
            {{ data.quote?.source || '(QS. Ar-Rum: 21)' }}
          </p>
        </div>
      </section>

      <section class="section-card flex flex-col justify-center overflow-y-auto pt-20 pb-20">
        <div class="w-[85%] max-w-sm flex flex-col items-center">
          <div class="inline-flex items-center gap-3 mb-12 animate-fade-up">
            <div class="w-8 h-[1px] bg-[#6B4E31]/40"></div>
            <h2 class="text-xs tracking-[0.4em] uppercase text-[#6B4E31]">Sang Mempelai</h2>
            <div class="w-8 h-[1px] bg-[#6B4E31]/40"></div>
          </div>

          <div class="relative w-full mb-16 animate-fade-up" style="animation-delay: 200ms;">
            <div class="absolute right-0 top-10 w-4/5 h-full backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)] z-0 flex flex-col justify-center pl-16">
              <h3 class="text-3xl font-serif italic text-[#1A2F24] mb-2">{{ data.mempelai.pria }}</h3>
              <p class="text-[10px] text-[#6B4E31] tracking-widest uppercase mb-1">Putra Dari</p>
              <p class="text-xs text-[#2C4135]/80 italic">Bapak ... & Ibu ...</p>
              <a href="#" class="mt-4 text-xs text-[#D4AF37] flex items-center gap-2 hover:text-[#1A2F24] transition-colors"><Icon name="mdi:instagram" /> @instagram_pria</a>
            </div>
            <div class="w-32 h-44 rounded-t-full rounded-bl-full overflow-hidden shadow-2xl relative z-10 border-4 border-[#F4EFE6]">
              <img :src="data.mempelai.priaImage || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400'" class="w-full h-full object-cover" />
            </div>
          </div>

          <div class="text-5xl font-serif italic text-[#D4AF37]/40 mb-16 animate-fade-up" style="animation-delay: 400ms;">&</div>

          <div class="relative w-full animate-fade-up" style="animation-delay: 600ms;">
            <div class="absolute left-0 top-10 w-4/5 h-full backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)] z-0 flex flex-col justify-center pr-16 text-right items-end">
              <h3 class="text-3xl font-serif italic text-[#1A2F24] mb-2">{{ data.mempelai.wanita }}</h3>
              <p class="text-[10px] text-[#6B4E31] tracking-widest uppercase mb-1">Putri Dari</p>
              <p class="text-xs text-[#2C4135]/80 italic">Bapak ... & Ibu ...</p>
              <a href="#" class="mt-4 text-xs text-[#D4AF37] flex items-center gap-2 hover:text-[#1A2F24] transition-colors"><Icon name="mdi:instagram" /> @instagram_wanita</a>
            </div>
            <div class="w-32 h-44 rounded-t-full rounded-br-full overflow-hidden shadow-2xl relative z-10 border-4 border-[#F4EFE6] ml-auto">
              <img :src="data.mempelai.wanitaImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section class="section-card relative flex flex-col justify-center py-20">
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        <div class="absolute -left-20 bottom-0 w-80 h-80 bg-[#1A2F24] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

        <div class="w-[85%] max-w-sm relative z-10">
          <div class="text-center mb-12 animate-fade-up">
            <h2 class="text-xs tracking-[0.4em] uppercase text-[#6B4E31] mb-2">Rangkaian Acara</h2>
            <div class="w-12 h-[1px] bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div class="flex flex-col gap-6">
            <div class="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-lg border border-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-500 animate-fade-up-stagger">
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-full"></div>
              <Icon name="ph:rings-thin" class="text-5xl text-[#D4AF37] mb-6" />
              <h3 class="text-3xl font-serif italic text-[#1A2F24] mb-3">Akad Nikah</h3>
              <div class="space-y-2 mb-6">
                <p class="text-sm font-bold tracking-widest text-[#6B4E31] uppercase">{{ data.date }}</p>
                <p class="text-xs text-[#2C4135] bg-[#F4EFE6] inline-block px-3 py-1 rounded-full">08.00 WIB - Selesai</p>
              </div>
              <p class="text-xs text-[#2C4135]/80 font-light leading-relaxed">{{ data.location }}</p>
            </div>

            <div class="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-lg border border-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-500 animate-fade-up-stagger" style="animation-delay: 200ms;">
              <div class="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1A2F24]/5 to-transparent rounded-br-full"></div>
              <Icon name="ph:glass-cheers-thin" class="text-5xl text-[#D4AF37] mb-6" />
              <h3 class="text-3xl font-serif italic text-[#1A2F24] mb-3">Resepsi</h3>
              <div class="space-y-2 mb-6">
                <p class="text-sm font-bold tracking-widest text-[#6B4E31] uppercase">{{ data.date }}</p>
                <p class="text-xs text-[#2C4135] bg-[#F4EFE6] inline-block px-3 py-1 rounded-full">{{ data.time }} - Selesai</p>
              </div>
              <p class="text-xs text-[#2C4135]/80 font-light leading-relaxed">{{ data.location }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-card flex-col items-center justify-start py-20 overflow-y-auto">
        <h2 class="text-xs tracking-[0.4em] uppercase text-[#6B4E31] mb-12 animate-fade-up">Love Story</h2>
        
        <div class="w-[85%] max-w-sm relative">
          <div class="absolute left-[11px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
          
          <div class="mb-10 pl-10 relative animate-fade-up-stagger group">
            <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#F4EFE6] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:scale-125 transition-transform duration-300">
              <div class="w-1.5 h-1.5 bg-[#1A2F24] rounded-full animate-pulse"></div>
            </div>
            <p class="text-[10px] tracking-widest text-[#D4AF37] font-bold uppercase mb-2">Desember 2022</p>
            <h3 class="text-xl font-serif italic text-[#1A2F24] mb-3">Awal Bertemu</h3>
            <p class="text-xs text-[#2C4135]/80 font-light leading-relaxed bg-white/50 p-4 rounded-xl backdrop-blur-sm border border-white/50">Kita bertemu di tahun 2022. Awalnya hanya sebatas teman biasa, namun seiring berjalannya waktu, rasa nyaman itu mulai tumbuh.</p>
          </div>

          <div class="mb-10 pl-10 relative animate-fade-up-stagger group" style="animation-delay: 200ms;">
            <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#F4EFE6] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:scale-125 transition-transform duration-300">
              <div class="w-1.5 h-1.5 bg-[#1A2F24] rounded-full animate-pulse"></div>
            </div>
            <p class="text-[10px] tracking-widest text-[#D4AF37] font-bold uppercase mb-2">Januari 2023</p>
            <h3 class="text-xl font-serif italic text-[#1A2F24] mb-3">Berkomitmen</h3>
            <p class="text-xs text-[#2C4135]/80 font-light leading-relaxed bg-white/50 p-4 rounded-xl backdrop-blur-sm border border-white/50">Kami memutuskan untuk menjalin hubungan yang lebih serius dan saling mengenal keluarga satu sama lain.</p>
          </div>

          <div class="pl-10 relative animate-fade-up-stagger group" style="animation-delay: 400ms;">
            <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#F4EFE6] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:scale-125 transition-transform duration-300">
              <div class="w-1.5 h-1.5 bg-[#1A2F24] rounded-full animate-pulse"></div>
            </div>
            <p class="text-[10px] tracking-widest text-[#D4AF37] font-bold uppercase mb-2">Desember 2025</p>
            <h3 class="text-xl font-serif italic text-[#1A2F24] mb-3">Menikah</h3>
            <p class="text-xs text-[#2C4135]/80 font-light leading-relaxed bg-white/50 p-4 rounded-xl backdrop-blur-sm border border-white/50">Dan kami bersyukur, dipertemukan Allah di waktu terbaik. Kini kami menanti hari istimewa kami.</p>
          </div>
        </div>
      </section>

      <section class="section-card flex-col py-20">
        <h2 class="text-xs tracking-[0.4em] uppercase text-[#6B4E31] mb-12 animate-fade-up">Momen Kami</h2>

        <div class="w-[85%] max-w-sm columns-2 gap-4 space-y-4 animate-fade-up">
          <div v-for="(img, idx) in data.gallery?.slice(0, 4)" :key="idx" class="break-inside-avoid overflow-hidden rounded-2xl shadow-md group relative">
            <div class="absolute inset-0 bg-[#1A2F24]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
            <img :src="img" class="w-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms] ease-out" />
          </div>
        </div>
      </section>

      <section class="section-card flex-col py-20 overflow-y-auto">
        <h2 class="text-xs tracking-[0.4em] uppercase text-[#6B4E31] mb-10 animate-fade-up">Informasi Tambahan</h2>

        <div class="w-[85%] max-w-sm flex flex-col gap-8">
          <div class="bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-lg animate-fade-up text-center">
            <Icon name="ph:map-pin-line-thin" class="text-4xl text-[#D4AF37] mb-4 mx-auto" />
            <h3 class="text-xl font-serif italic text-[#1A2F24] mb-4">Peta Lokasi</h3>
            <a :href="data.mapUrl" target="_blank" class="inline-block bg-[#1A2F24] text-[#F4EFE6] px-8 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-[#6B4E31] transition-colors rounded-full shadow-md">
              Buka Google Maps
            </a>
          </div>

          <div class="bg-gradient-to-br from-[#1A2F24] to-[#2C4135] rounded-3xl p-8 shadow-2xl relative overflow-hidden animate-fade-up" style="animation-delay: 200ms;">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full filter blur-xl"></div>
            <Icon name="ph:gift-thin" class="text-4xl text-[#D4AF37] mb-6" />
            <h3 class="text-xl font-serif italic text-[#F4EFE6] mb-2">Tanda Kasih</h3>
            <p class="text-xs text-[#F4EFE6]/70 font-light mb-6">Tanpa mengurangi rasa hormat, bagi yang ingin memberikan tanda kasih dapat melalui:</p>

            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-4 relative group">
              <p class="text-sm tracking-[0.2em] font-mono text-[#F4EFE6] mb-1">5101 5001 7177</p>
              <p class="text-[9px] text-[#D4AF37] uppercase font-bold tracking-widest">Bank BTN - Widi</p>
              <button class="absolute top-1/2 -translate-y-1/2 right-4 text-[#F4EFE6]/50 hover:text-[#D4AF37] transition-colors">
                <Icon name="mdi:content-copy" class="text-xl" />
              </button>
            </div>
            
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative group">
              <p class="text-sm tracking-[0.2em] font-mono text-[#F4EFE6] mb-1">5140 8360 11</p>
              <p class="text-[9px] text-[#D4AF37] uppercase font-bold tracking-widest">BCA - Syidik</p>
              <button class="absolute top-1/2 -translate-y-1/2 right-4 text-[#F4EFE6]/50 hover:text-[#D4AF37] transition-colors">
                <Icon name="mdi:content-copy" class="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="section-card flex-col py-20 overflow-y-auto">
        <div class="w-[85%] max-w-sm flex flex-col items-center">
          <Icon name="ph:envelope-simple-open-thin" class="text-5xl text-[#D4AF37] mb-6 animate-fade-up" />
          <h2 class="text-xs tracking-[0.4em] uppercase text-[#6B4E31] mb-10 animate-fade-up">RSVP & Ucapan</h2>
          
          <div class="w-full bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white animate-fade-up">
            <div class="space-y-4">
              <input type="text" placeholder="Nama Lengkap" class="w-full bg-white/50 border-b border-[#6B4E31]/20 px-4 py-3 text-sm text-[#1A2F24] placeholder-[#1A2F24]/40 focus:border-[#D4AF37] focus:bg-white transition-colors outline-none rounded-t-lg">
              
              <div class="relative">
                <select class="w-full bg-white/50 border-b border-[#6B4E31]/20 px-4 py-3 text-sm text-[#1A2F24] focus:border-[#D4AF37] focus:bg-white transition-colors outline-none appearance-none rounded-t-lg">
                  <option value="" disabled selected>Konfirmasi Kehadiran</option>
                  <option>Hadir</option>
                  <option>Tidak Hadir</option>
                </select>
                <Icon name="mdi:chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 text-[#1A2F24]/40 pointer-events-none" />
              </div>

              <textarea placeholder="Berikan ucapan dan do'a..." rows="3" class="w-full bg-white/50 border-b border-[#6B4E31]/20 px-4 py-3 text-sm text-[#1A2F24] placeholder-[#1A2F24]/40 focus:border-[#D4AF37] focus:bg-white transition-colors outline-none resize-none rounded-t-lg"></textarea>
              
              <button class="w-full mt-4 bg-[#1A2F24] text-[#F4EFE6] py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#1A2F24] transition-all duration-500 rounded-xl shadow-lg relative overflow-hidden group">
                <span class="relative z-10">Kirim Ucapan</span>
                <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="section-card bg-[#1A2F24] text-[#F4EFE6] relative flex flex-col items-center justify-center p-6 text-center">
        <img :src="data.image || 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'" class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity animate-pan-slow" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#1A2F24] via-[#1A2F24]/80 to-transparent"></div>

        <div class="relative z-10 max-w-[85%] flex flex-col items-center animate-fade-up">
          <Icon name="ph:flower-lotus-thin" class="text-6xl text-[#D4AF37] mb-8 animate-pulse-slow" />
          <p class="text-xs font-light text-[#F4EFE6]/80 mb-10 leading-loose">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
          <div class="w-12 h-[1px] bg-[#D4AF37] mb-8"></div>
          <p class="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">Hatur Nuhun</p>
          <h1 class="text-4xl font-serif italic text-[#F4EFE6]">{{ data.title }}</h1>
        </div>
      </section>

    </div>

    <div v-if="!isEditor && isOpened" class="absolute bottom-8 right-6 z-[90] flex flex-col gap-3">
      <button v-if="!isAtBottom" @click="scrollDown" class="w-12 h-12 bg-white/10 border border-white/20 text-[#F4EFE6] rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A2F24] backdrop-blur-md transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.2)] animate-bounce">
        <Icon name="ph:arrow-down-thin" class="text-2xl" />
      </button>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'

// 1. Tambahkan currentSlide ke dalam Props
const props = defineProps<{ 
  data: any,
  isEditor?: boolean,
  currentSlide?: number // Prop yang dikirim dari Parent (Editor)
}>()

const isOpened = ref(false)
const scrollContainer = ref<HTMLElement | null>(null)
const isAtTop = ref(true)
const isAtBottom = ref(false)

// 2. Watcher untuk mengontrol Buka/Tutup Undangan & Auto-Scroll
watch(() => props.currentSlide, async (newSlide) => {
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
}, { immediate: true })

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
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth'})
  }
}

const youtubeId = computed(() => {
  if (!props.data?.youtubeUrl) return null
  const url = props.data.youtubeUrl
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
})
</script>

<style scoped>
/* Core Snap Scrolling Framework */
.section-card {
  height: 100vh;
  height: 100dvh; /* Mobile height fix */
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0; 
}

/* Hide Scrollbar seamlessly */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

/* Mega Mendung & Traditional Inspiration CSS Pattern Overlay */
.mega-mendung-pattern {
  background-image: 
    radial-gradient(circle at 100% 0%, rgba(212, 175, 55, 0.03) 0%, transparent 25%),
    radial-gradient(circle at 0% 100%, rgba(26, 47, 36, 0.03) 0%, transparent 25%);
}

/* --- CINEMATIC ANIMATIONS --- */

/* Staggered Fade Up for layered depth entry */
@keyframes fadeUpStagger {
  0% { opacity: 0; transform: translateY(30px); filter: blur(5px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0); }
}

.animate-fade-up {
  animation: fadeUpStagger 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-up-stagger {
  opacity: 0;
  animation: fadeUpStagger 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Slow Cinematic Image Panning */
@keyframes panSlow {
  0% { transform: scale(1.05) translate(0, 0); }
  50% { transform: scale(1.1) translate(-1%, -1%); }
  100% { transform: scale(1.05) translate(0, 0); }
}

.animate-pan-slow {
  animation: panSlow 30s ease-in-out infinite alternate;
}

/* Ethereal Glow Pulse */
@keyframes etherealPulse {
  0%, 100% { opacity: 0.2; transform: scale(0.9); }
  50% { opacity: 0.4; transform: scale(1.1); }
}

.animate-pulse-slow {
  animation: etherealPulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Slow Spin for Ornaments */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spinSlow 15s linear infinite;
}
</style>