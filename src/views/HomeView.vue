<script setup>
</script>

<template>
  <div class="dashboard">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon bg-blue">👥</div>
        <div class="stat-info">
          <h3>총 학생 수</h3>
          <p class="stat-value">12명</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-green">📅</div>
        <div class="stat-info">
          <h3>오늘 수업</h3>
          <p class="stat-value">3건</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-orange">💰</div>
        <div class="stat-info">
          <h3>이번 달 수익</h3>
          <p class="stat-value">₩1,200,000</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-red">⚠️</div>
        <div class="stat-info">
          <h3>미납 내역</h3>
          <p class="stat-value">1건</p>
        </div>
      </div>
    </div>

    <div class="recent-activity">
      <h2>최근 활동</h2>
      <div class="activity-list">
        <div class="activity-item" v-for="i in 3" :key="i">
          <div class="activity-icon">📝</div>
          <div class="activity-details">
            <h4>김철수 학생 수업 일지 작성</h4>
            <p>2시간 전</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.bg-blue { background-color: #E0E7FF; color: #4F46E5; }
.bg-green { background-color: #D1FAE5; color: #10B981; }
.bg-orange { background-color: #FEF3C7; color: #F59E0B; }
.bg-red { background-color: #FEE2E2; color: #EF4444; }

.stat-info h3 {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-main);
}

.recent-activity {
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.recent-activity h2 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  background-color: var(--color-bg-light);
}

.activity-icon {
  width: 36px;
  height: 36px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity-details h4 {
  font-size: 0.9rem;
  font-weight: 500;
}

.activity-details p {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
</style>
