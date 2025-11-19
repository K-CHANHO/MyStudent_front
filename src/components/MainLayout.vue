<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="logo">
        <h2>StudyMate</h2>
      </div>
      <nav class="nav">
        <RouterLink to="/" class="nav-item" active-class="active">
          <span class="icon">📊</span>
          대시보드
        </RouterLink>
        <RouterLink to="/students" class="nav-item" active-class="active">
          <span class="icon">👨‍🎓</span>
          학생 관리
        </RouterLink>
        <RouterLink to="/schedule" class="nav-item" active-class="active">
          <span class="icon">📅</span>
          수업 일정
        </RouterLink>
        <RouterLink to="/settings" class="nav-item" active-class="active">
          <span class="icon">⚙️</span>
          설정
        </RouterLink>
      </nav>
    </aside>
    <main class="main-content">
      <header class="header">
        <h1 class="page-title">환영합니다, 선생님!</h1>
        <div class="user-profile">
          <div class="avatar">T</div>
          <span>Teacher Name</span>
        </div>
      </header>
      <div class="content-area">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg-light);
}

.sidebar {
  width: 260px;
  background-color: var(--color-bg-white);
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.logo {
  margin-bottom: 2rem;
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background-color: var(--color-bg-light);
  color: var(--color-primary);
}

.nav-item.active {
  background-color: var(--color-primary);
  color: white;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  height: 64px;
  background-color: var(--color-bg-white);
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

.page-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-main);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  cursor: pointer;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.content-area {
  padding: 2rem;
  flex: 1;
  overflow-y: auto;
}
</style>
