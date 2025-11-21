<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import MainLayout from './components/MainLayout.vue'
import GlobalModal from '@/components/common/GlobalModal.vue'

const route = useRoute()

// Determine which layout to use based on route meta
const layout = computed(() => {
  return route.meta.layout === 'auth' ? 'div' : MainLayout
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
  <GlobalModal />
</template>
