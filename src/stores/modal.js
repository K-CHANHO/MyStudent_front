import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)
  const type = ref('alert') // 'alert' or 'confirm'
  const title = ref('')
  const message = ref('')
  const resolvePromise = ref(null)

  function alert(msg, ttl = '알림') {
    type.value = 'alert'
    message.value = msg
    title.value = ttl
    isOpen.value = true

    return new Promise((resolve) => {
      resolvePromise.value = resolve
    })
  }

  function confirm(msg, ttl = '확인') {
    type.value = 'confirm'
    message.value = msg
    title.value = ttl
    isOpen.value = true

    return new Promise((resolve) => {
      resolvePromise.value = resolve
    })
  }

  function handleConfirm() {
    isOpen.value = false
    if (resolvePromise.value) {
      resolvePromise.value(true)
      resolvePromise.value = null
    }
  }

  function handleCancel() {
    isOpen.value = false
    if (resolvePromise.value) {
      resolvePromise.value(false)
      resolvePromise.value = null
    }
  }

  return {
    isOpen,
    type,
    title,
    message,
    alert,
    confirm,
    handleConfirm,
    handleCancel,
  }
})
