<template>
  <div class="pb-20">
    <header
      class="mb-12 border-b-4 border-black pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
    >
      <div>
        <h1
          class="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none mb-4"
        >
          BILLING.
        </h1>
        <p class="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
          MANAGE YOUR INVOICES AND PAYMENT HISTORY.
        </p>
      </div>

      <button
        class="bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-colors"
      >
        DOWNLOAD REPORT
      </button>
    </header>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      <div class="border-2 border-black p-4 bg-white">
        <p class="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
          Total Spent
        </p>
        <p class="text-2xl md:text-3xl font-black tracking-tighter">Rp 150K</p>
      </div>
      <div class="border-2 border-black p-4 bg-white">
        <p class="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Pending</p>
        <p class="text-2xl md:text-3xl font-black tracking-tighter">Rp 250K</p>
      </div>
    </div>

    <div class="border-2 border-black bg-white">
      <div
        class="hidden md:grid grid-cols-12 gap-4 border-b-2 border-black bg-black text-white p-6 text-[10px] font-black uppercase tracking-widest"
      >
        <div class="col-span-3">Invoice ID</div>
        <div class="col-span-3">Project Name</div>
        <div class="col-span-2">Date</div>
        <div class="col-span-2">Amount</div>
        <div class="col-span-2 text-right">Status</div>
      </div>

      <div
        v-for="trx in transactions"
        :key="trx.id"
        class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 border-b-2 border-black p-6 md:items-center hover:bg-gray-100 transition-colors relative group"
      >
        <div class="col-span-1 md:col-span-3">
          <p class="md:hidden text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
            Invoice
          </p>
          <div class="font-black text-sm md:text-base uppercase">#{{ trx.invoice }}</div>
        </div>

        <div class="col-span-1 md:col-span-3">
          <p class="md:hidden text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
            Project
          </p>
          <div class="font-bold text-xs uppercase">{{ trx.project }}</div>
        </div>

        <div class="col-span-1 md:col-span-2">
          <p class="md:hidden text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
            Date
          </p>
          <div class="font-bold text-[10px] text-gray-500 tracking-widest">{{ trx.date }}</div>
        </div>

        <div class="col-span-1 md:col-span-2">
          <p class="md:hidden text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
            Amount
          </p>
          <div class="font-black text-xl md:text-2xl tracking-tighter">{{ trx.amount }}</div>
        </div>

        <div
          class="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end mt-4 md:mt-0"
        >
          <span
            class="px-4 py-2 text-[10px] font-black uppercase tracking-widest border-2"
            :class="statusClass(trx.status)"
          >
            {{ trx.status }}
          </span>

          <button
            v-if="trx.status === 'PENDING'"
            class="md:hidden bg-black text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest"
          >
            PAY NOW
          </button>
        </div>

        <div
          v-if="trx.status === 'PENDING'"
          class="hidden md:flex absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white pl-4"
        >
          <button
            class="bg-black text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-colors"
          >
            PAY NOW
          </button>
        </div>
        <div
          v-if="trx.status === 'PAID'"
          class="hidden md:flex absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white pl-4"
        >
          <button
            class="border-2 border-black bg-white text-black px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            RECEIPT
          </button>
        </div>
      </div>

      <div v-if="transactions.length === 0" class="p-12 text-center">
        <p class="text-sm font-black tracking-widest uppercase text-gray-400">
          NO TRANSACTIONS FOUND.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  definePageMeta({ layout: 'dashboard' })

  // Data dummy transaksi
  const transactions = ref([
    {
      id: 1,
      invoice: 'INV-20260312-01',
      project: 'ROMEO & JULIET',
      date: '12 MAR 2026',
      amount: 'RP 150.000',
      status: 'PAID'
    },
    {
      id: 2,
      invoice: 'INV-20260316-02',
      project: 'JOHN & JANE',
      date: '16 MAR 2026',
      amount: 'RP 250.000',
      status: 'PENDING'
    },
    {
      id: 3,
      invoice: 'INV-20260210-01',
      project: 'ALEX & MIA',
      date: '10 FEB 2026',
      amount: 'RP 150.000',
      status: 'FAILED'
    }
  ])

  // Fungsi untuk mewarnai badge status
  const statusClass = (status: string) => {
    if (status === 'PAID') return 'bg-emerald-400 border-black text-black'
    if (status === 'PENDING') return 'bg-yellow-400 border-black text-black'
    if (status === 'FAILED') return 'bg-rose-600 border-rose-600 text-white'
    return 'border-black'
  }
</script>

<style scoped>
  * {
    border-radius: 0 !important;
  }
</style>
