<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  category: string
  date: string
  stack: string[]
  color: string
  emoji: string
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <div
      class="project-card__image"
      :style="{ background: project.color }"
    >
      <span class="project-card__emoji">{{ project.emoji }}</span>
    </div>

    <div class="project-card__body">
      <div class="project-card__meta">
        <span class="badge">{{ project.category }}</span>
        <span class="project-card__date">{{ project.date }}</span>
      </div>

      <h2 class="project-card__title">{{ project.title }}</h2>
      <p class="project-card__desc">{{ project.description }}</p>

      <div class="project-card__stack">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="project-card__tech"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--c-fond-carte);
  border: 1px solid var(--c-bordure);
  border-radius: 12px;
  overflow: hidden;
  transition: 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-card__image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-card__emoji {
  font-size: 48px;
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__body {
  padding: 1rem;
}

.project-card__meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.project-card__title {
  font-size: 18px;
  margin: 0.5rem 0;
}

.project-card__desc {
  font-size: 13px;
  color: gray;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}

.project-card__tech {
  font-size: 11px;
  background: #eee;
  padding: 3px 6px;
  border-radius: 4px;
}
</style>
