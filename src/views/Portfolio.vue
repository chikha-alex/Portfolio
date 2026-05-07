<script setup lang="ts">
import { ref, computed } from 'vue'
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

interface Slide {
  title: string
  description: string
  color: string
  emoji: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ETNAir',
    description: 'Développement d\'un site de location en ligne avec une infrastructure solide Docker/Kubernetes, une API robuste et une interface interactive.',
    category: 'Application',
    date: '2026',
    stack: ['Docker', 'Kubernetes', 'API REST', 'JavaScript'],
    color: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    emoji: '🏠',
  },
  {
    id: 2,
    title: 'Docker — Compose ton vote',
    description: 'Application de vote : conteneurs, construction d\'images avec Dockerfiles, orchestration et bases de Python intégrées.',
    category: 'Infrastructure',
    date: '2026',
    stack: ['Docker', 'Dockerfile', 'Python'],
    color: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    emoji: '🐳',
  },
  {
    id: 3,
    title: 'FDL-UNIX Project',
    description: 'Réalisation d\'un environnement de développement complet : commandes Git avancées, scripts Bash et bases de l\'administration système Linux.',
    category: 'System',
    date: '2026',
    stack: ['Bash', 'Git', 'Linux', 'Shell'],
    color: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
    emoji: '🐧',
  },
  {
    id: 4,
    title: 'Python Quizify',
    description: 'Application de quiz en Python avec Programmation Orientée Objet, gestion des fichiers et des exceptions, et bibliothèques standards.',
    category: 'Application',
    date: '2026',
    stack: ['Python', 'OOP', 'File handling'],
    color: 'linear-gradient(135deg, #78350f 0%, #b45309 100%)',
    emoji: '🧠',
  },
  {
    id: 5,
    title: 'Blog Manager',
    description: 'Application de blog avec React + TypeScript, gestion locale des données, et mise en place d\'un router.',
    category: 'Application',
    date: '2026',
    stack: ['React', 'TypeScript', 'Gestion des données'],
    color: 'linear-gradient(135deg, #9966cc 0%, #994ebc 100%)',
    emoji: '🌐📝',
  },
  {
    id: 6,
    title: 'To-do Manager',
    description: 'Application de liste de tâches avec Vue + TypeScript, gestion locale des données, et réactivité.',
    category: 'Application',
    date: '2026',
    stack: ['Vue', 'TypeScript', 'Gestion des données', 'Node.js'],
    color: 'linear-gradient(135deg, #339999 0%, #289984 100%)',
    emoji: '🌐📋',
  },
  {
    id: 7,
    title: 'Contact CRM',
    description: 'Application d\'un avec Angular + TypeScript, gestion locale des données, et réactivité.',
    category: 'Application',
    date: '2026',
    stack: ['Angular', 'TypeScript', 'Gestion des données', 'Node.js'],
    color: 'linear-gradient(135deg, #996699 0%, #916c84 100%)',
    emoji: '🧑‍💼📇',
  }
]

const slides: Slide[] = [
  {
    title: 'Python & Artificial Intelligence',
    description: 'Spécialisation IA à l\'ETNA — POO, traitement de données, algorithmes.',
    color: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
    emoji: '🤖'
  },
  {
    title: 'Docker & Infrastructure',
    description: 'Conteneurisation, Kubernetes, déploiement et orchestration de services.',
    color: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    emoji: '🐳'
  },
  {
    title: 'Vue · React · Angular',
    description: 'Maîtrise des frameworks front-end modernes pour des interfaces réactives.',
    color: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
    emoji: '⚡'
  },
]

const categories = ['All', ...new Set(projects.map(p => p.category))]
const filters = categories
const activeFilter = ref('All')

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)

const currentIndex = ref(0)
const currentSlide = computed(() => slides[currentIndex.value] || null)
const transitionDirection = ref('carousel-right')

function next() {
  transitionDirection.value = 'carousel-right'
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

function previous() {
  transitionDirection.value = 'carousel-left'
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

function goTo(i: number) {
  transitionDirection.value =
    i > currentIndex.value ? 'carousel-right' : 'carousel-left'
  currentIndex.value = i
}
</script>

<template>
  <main class="page-portfolio">
    <div class="container">

      <header class="page-header">
        <h1 class="section-title">Mes Projets</h1>
        <p class="section-subtitle">
          La liste de tous les projets que j'ai réalisé en informatique dans le cadre de mes études.
        </p>

        <div class="filters">
          <button
            v-for="filter in filters"
            :key="filter"
            class="filter-btn"
            :class="{ 'filter-btn--active': activeFilter === filter }"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </header>

      <section class="projects__grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
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
      </section>
    </div>
  </main>
</template>

<style scoped>
.page-portfolio {
  padding: 5rem 0 8rem;
}

.page-header {
  margin-bottom: 3rem;
}

.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.filter-btn {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid var(--c-border);
  background: transparent;
  color: var(--c-text);
  cursor: pointer;
  transition: all 0.18s;
  letter-spacing: 0.04em;
}

.filter-btn:hover {
  border-color: var(--c-text);
  color: var(--c-text);
}

.filter-btn--active {
  background: var(--c-text);
  color: var(--c-bg);
  border-color: var(--c-text);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 6rem;
}

.project-card {
  background: var(--c-card);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.project-card__image {
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-card__emoji {
  font-size: 56px;
  transition: transform 0.3s;
}

.project-card:hover .project-card__emoji {
  transform: scale(0.85);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  opacity: 0;
  transition: opacity 0.25s;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__body {
  padding: 1.5rem;
}

.project-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.project-card__date {
  font-size: 12px;
  color: var(--c-text);
}

.project-card__title {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 0.5rem;
  line-height: 1.25;
}

.project-card__desc {
  font-size: 13px;
  color: var(--c-text);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-card__tech {
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  color: var(--c-text);
}

.carousel-section {
  margin-bottom: 6rem;
}

.carousel {
  position: relative;
  margin-top: 2rem;
}

.carousel__window {
  border-radius: var(--radius-xl);
  overflow: hidden;
  height: 360px;
}

.carousel__slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  text-align: center;
}

.carousel__slide-emoji {
  font-size: 72px;
}

.carousel__caption {
  color: white;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);
}

.carousel__caption h3 {
  font-family: var(--font-title);
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.carousel__caption p {
  font-size: 14px;
}

.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s, box-shadow 0.18s;
  color: var(--c-text);
}

.carousel__arrow:hover {
  background: var(--c-bg);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.carousel__arrow--left { left: -22px; }
.carousel__arrow--right { right: -22px; }

.carousel__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1.5rem;
}

.carousel__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  background: var(--c-border);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.carousel__dot--active {
  background: var(--c-text);
  transform: scale(1.3);
}

.carousel-right-enter-active,
.carousel-right-leave-active,
.carousel-left-enter-active,
.carousel-left-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.carousel-right-enter-from { opacity: 0; transform: translateX(40px); }
.carousel-right-leave-to   { opacity: 0; transform: translateX(-40px); }

.carousel-left-enter-from  { opacity: 0; transform: translateX(-40px); }
.carousel-left-leave-to    { opacity: 0; transform: translateX(40px); }

@media (max-width: 768px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }

  .carousel__arrow--left { left: 8px; }
  .carousel__arrow--right { right: 8px; }

  .carousel__window { height: 280px; }
}
</style>