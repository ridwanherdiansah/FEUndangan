<template>
  <component
    :is="resolveTheme(eventData.templateId)"
    :data="eventData"
    :messages="messages"
    :isEditor="false"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ThemeBrutalist from '~/components/themes/ThemeBrutalist.vue'
  import ThemeFloral from '~/components/themes/ThemeFloral.vue'
  import ThemeUrbanVibe from '~/components/themes/ThemeUrbanVibe.vue'
  import ThemeNovaSerif from '~/components/themes/ThemeNovaSerif.vue'
  import ThemeNiskala from '~/components/themes/ThemeNiskala.vue'

  definePageMeta({ layout: 'blank' })

  // Mockup Data dari Database
  const eventData = ref({
    templateId: 2,
    title: 'ROMEO & JULIET',
    date: '12 DEC 2026',
    time: '19:00 WIB',
    location: 'THE GRAND BALLROOM, JAKARTA INDONESIA',
    mapUrl: 'https://maps.app.goo.gl/AJ36hHSUjHtz1Cz48',
    youtubeUrl: '',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000',
    gate: { title: 'THE WEDDING OF', openText: 'OPEN INVITATION' },
    cover: { headline: 'THE WEDDING OF' },
    quote: {
      text: 'AND I KNEW EXACTLY HOW CINDERELLA FELT WHEN SHE FOUND HER PRINCE.',
      source: 'ELIZABETH YOUNG'
    },
    mempelai: { pria: 'ROMEO MONTAGUE', wanita: 'JULIET CAPULET' },
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400'
    ],
    rsvp: { deadline: '2026-11-01' },
    ucapan: { mockMessage: 'HAPPY WEDDING! WISHING YOU A LIFETIME OF LOVE.' },
    closing: { text: 'CANNOT WAIT TO CELEBRATE WITH YOU.' }
  })

  const messages = ref([
    {
      name: 'Andi & Sari',
      status: 'Hadir',
      message: 'Selamat ya! Semoga menjadi keluarga yang sakinah mawaddah warahmah 🤍',
      date: '12 Apr 2026, 10:00'
    },
    {
      name: 'Budi',
      status: 'Berhalangan',
      message: 'Maaf tidak bisa hadir, tapi doa terbaik selalu untuk kalian 🙏',
      date: '12 Apr 2026, 11:30'
    },
    {
      name: 'Rina',
      status: 'Hadir',
      message: 'Akhirnyaaa! Happy wedding 💕',
      date: '12 Apr 2026, 12:10'
    }
  ])

  const resolveTheme = (id: number) => {
    if (id === 1) return ThemeBrutalist
    if (id === 2) return ThemeFloral
    if (id === 3) return ThemeUrbanVibe
    if (id === 4) return ThemeNovaSerif
    if (id === 5) return ThemeNiskala
    return ThemeBrutalist
  }
</script>
