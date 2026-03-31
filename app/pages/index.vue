<template>
  <div class="relative min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden selection:bg-rose-400 selection:text-white">
    
    <div class="fixed inset-0 z-0 pointer-events-none">
      <img 
        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
        alt="Wedding Background" 
        class="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
      />
      <div class="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950"></div>
    </div>

    <nav class="fixed top-0 left-0 w-full z-50 p-4 md:p-6 transition-all duration-300">
      <div class="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div class="text-2xl font-['Playfair_Display'] tracking-wide">
          Invite<span class="text-rose-400 italic">.</span>
        </div>
        
        <div class="hidden md:flex gap-8 font-medium text-xs tracking-[0.2em] uppercase text-gray-300">
          <a href="#about" class="hover:text-rose-300 transition-colors">About</a>
          <a href="#features" class="hover:text-rose-300 transition-colors">Features</a>
          <a href="#contact" class="hover:text-rose-300 transition-colors">Contact</a>
        </div>

        <NuxtLink to="/auth/login" class="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full font-medium uppercase text-xs tracking-[0.1em] hover:bg-rose-400 hover:border-rose-400 hover:text-white transition-all">
          Sign In
        </NuxtLink>
      </div>
    </nav>

    <main class="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
      <h1 class="font-['Playfair_Display'] text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[1.1] mb-6">
        Celebrate <br/>
        <span class="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-white to-gray-400">The Moment</span>
      </h1>
      <p class="max-w-2xl text-sm md:text-lg font-light tracking-wide text-gray-400 mb-12 leading-relaxed">
        Platform undangan pernikahan digital eksklusif. Rangkai cerita Anda dengan desain premium dan bagikan momen kebahagiaan dengan elegan.
      </p>
      <div class="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
        <NuxtLink to="/auth/register" class="px-10 py-4 bg-white text-black font-semibold uppercase tracking-[0.15em] text-xs rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          Mulai Buat Undangan
        </NuxtLink>
        <a href="#features" class="text-xs uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all">
          Pelajari Lebih Lanjut
        </a>
      </div>
    </main>

    <section id="about" class="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="font-['Playfair_Display'] text-4xl md:text-5xl mb-8 leading-tight">
            Redefining <br> <span class="italic text-rose-300">Tradition.</span>
          </h2>
          <p class="text-gray-400 font-light leading-relaxed text-base md:text-lg mb-6">
            Kami percaya bahwa setiap perayaan cinta berhak mendapatkan pengumuman yang memukau. INVITE hadir untuk menggabungkan estetika romantis dengan kemudahan teknologi masa kini.
          </p>
          <p class="text-gray-400 font-light leading-relaxed text-base md:text-lg">
            Kustomisasi hari bahagia Anda dengan sentuhan personal yang elegan dalam hitungan menit. Tanpa batas jarak, tanpa batasan waktu.
          </p>
        </div>
        <div class="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-3 aspect-square md:aspect-auto md:h-[500px] overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" alt="About Us" class="w-full h-full object-cover rounded-[1.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>
    </section>

    <section id="features" class="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <div class="mb-16 text-center">
        <h2 class="font-['Playfair_Display'] text-4xl md:text-5xl mb-4">
          Unmatched <span class="italic text-gray-300">Elegance.</span>
        </h2>
        <p class="text-gray-400 font-light">Fitur premium untuk momen istimewa Anda.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(feature, index) in features" :key="index" class="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300">
          <div class="font-['Playfair_Display'] text-3xl text-rose-300/60 mb-6 italic">0{{ index + 1 }}.</div>
          <h3 class="text-sm font-semibold uppercase tracking-widest mb-3">{{ feature.title }}</h3>
          <p class="text-gray-400 font-light text-sm leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <section id="contact" class="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="md:w-1/2">
          <h2 class="font-['Playfair_Display'] text-4xl md:text-5xl mb-6">Let's <br> <span class="italic">Connect.</span></h2>
          <p class="text-gray-400 font-light leading-relaxed text-base mb-8">
            Punya pertanyaan seputar kustomisasi undangan atau butuh bantuan? Tim layanan kami siap mendampingi persiapan Anda.
          </p>
          <div class="flex flex-col gap-3 font-medium tracking-widest text-xs uppercase text-gray-300">
            <a href="mailto:hello@invite.com" class="hover:text-rose-300 transition-colors">HELLO@INVITE.COM</a>
            <p>+62 812 3456 7890</p>
          </div>
        </div>
        
        <div class="md:w-1/2 w-full">
          <form class="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" class="w-full bg-black/30 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors">
            <input type="email" placeholder="Email Address" class="w-full bg-black/30 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors">
            <textarea placeholder="Message" rows="4" class="w-full bg-black/30 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 font-light text-sm focus:outline-none focus:border-rose-400 transition-colors resize-none"></textarea>
            <button type="button" class="bg-white text-black px-8 py-4 rounded-xl font-semibold uppercase text-xs tracking-[0.15em] hover:bg-rose-400 hover:text-white transition-all mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <footer class="relative z-10 border-t border-white/5 py-8 text-center bg-black/30 backdrop-blur-md">
      <p class="text-gray-500 font-medium uppercase tracking-[0.2em] text-[10px]">
        © 2026 INVITE. All Rights Reserved.
      </p>
    </footer>

  </div>
</template>

<script lang="ts" setup>
const features = [
  { title: 'Multi-Theme', desc: 'Pilih dari ragam template eksklusif. Ganti tema kapan saja menyesuaikan nuansa pernikahan Anda.' },
  { title: 'Live Streaming', desc: 'Integrasi panggilan video real-time di dalam undangan untuk menyapa tamu yang berhalangan hadir fisik.' },
  { title: 'RSVP Management', desc: 'Kelola daftar kehadiran dan ucapan dari tamu secara otomatis melalui dashboard yang tertata rapi.' },
  { title: 'Instant Access', desc: 'Sistem otomatis. Undangan Anda akan langsung aktif dan siap disebarkan sesaat setelah konfirmasi.' }
]
</script>

<style scoped>
/* Import Font Elegan khusus untuk halaman ini */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
</style>