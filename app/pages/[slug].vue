<template>
  <component :is="resolveTheme(eventData.templateId)" :data="eventData" :isEditor="false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ThemeBrutalist from '~/components/themes/ThemeBrutalist.vue'
import ThemeFloral from '~/components/themes/ThemeFloral.vue'

definePageMeta({ layout: 'blank' })

// Mockup Data dari Database
const eventData = ref({
  templateId: 2,
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
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400',
  ],
  rsvp: { deadline: '2026-11-01' },
  ucapan: { mockMessage: 'HAPPY WEDDING! WISHING YOU A LIFETIME OF LOVE.' },
  closing: { text: 'CANNOT WAIT TO CELEBRATE WITH YOU.' }
})

// Fungsi untuk memilih komponen berdasarkan ID
const resolveTheme = (id: number) => {
  if (id === 1 || id === 5) return ThemeBrutalist
  if (id === 2 || id === 6) return ThemeFloral
  return ThemeBrutalist 
}
</script>