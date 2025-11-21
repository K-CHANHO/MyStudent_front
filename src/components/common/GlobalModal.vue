<script setup>
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <div
    v-if="modalStore.isOpen"
    class="modal-overlay"
    @click.self="modalStore.type === 'confirm' ? null : modalStore.handleConfirm()"
  >
    <div class="modal-content alert-modal">
      <div class="modal-header">
        <h3 class="modal-title">{{ modalStore.title }}</h3>
      </div>

      <div class="modal-body">
        <p>{{ modalStore.message }}</p>
      </div>

      <div class="modal-actions">
        <button
          v-if="modalStore.type === 'confirm'"
          class="btn btn-secondary btn-full"
          @click="modalStore.handleCancel"
        >
          취소
        </button>
        <button class="btn btn-primary btn-full" @click="modalStore.handleConfirm">확인</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alert-modal {
  max-width: 400px;
  text-align: center;
}

.modal-header {
  justify-content: center;
  margin-bottom: 1rem;
}

.modal-body {
  margin-bottom: 2rem;
  color: var(--color-text-sub);
  font-size: 1.05rem;
  line-height: 1.5;
  white-space: pre-wrap;
}

.modal-actions {
  justify-content: center;
}
</style>
