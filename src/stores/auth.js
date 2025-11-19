import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const accessToken = ref(localStorage.getItem('accessToken') || null)
  const refreshToken = ref(localStorage.getItem('refreshToken') || null)
  const router = useRouter()

  async function login(email, password) {
    try {
      // TODO: Replace with actual API call
      // const response = await axios.post('/api/login', { email, password })
      
      // Mocking API response
      console.log('Attempting login with:', email)
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Dummy data
      const mockResponse = {
        accessToken: 'dummy_access_token_' + Date.now(),
        refreshToken: 'dummy_refresh_token_' + Date.now(),
        user: {
          email: email,
          name: 'Teacher Test',
          avatar: 'T'
        }
      }

      accessToken.value = mockResponse.accessToken
      refreshToken.value = mockResponse.refreshToken
      user.value = mockResponse.user

      localStorage.setItem('accessToken', accessToken.value)
      localStorage.setItem('refreshToken', refreshToken.value)

      return true
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  function logout() {
    accessToken.value = null
    refreshToken.value = null
    user.value = null
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    router.push('/login')
  }

  return {
    user,
    accessToken,
    refreshToken,
    login,
    logout
  }
})
