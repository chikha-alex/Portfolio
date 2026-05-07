<script setup lang="ts">

interface Skill {
  name: string;
  level: number;
}

interface SkillGroup {
  category: string;
  items: Skill[];
}

interface JourneyStep {
  date: string;
  title: string;
  location: string;
  description: string;
}

interface Network {
  name: string;
  url: string;
}

interface Profile {
  name: string;
  initials: string;
  title: string;
  location: string;
  bio: string[];
  networks: Network[];
}

const profile: Profile = {
  name: 'Alexandre Chikhaoui',
  initials: 'AC',
  title: 'Développeur IA · Bachelor ETNA (3ème année)',
  location: 'Alfortville, Val-de-Marne (94)',
  bio: [
    'Actuellement en Bachelor Développement Informatique avec spécialisation Intelligence Artificielle à l\'ETNA, je recherche une alternance pour ma 3ème année, idéalement en IA mais je reste ouvert à tout poste de développeur. Mon rythme : 1 vendredi toutes les 3 semaines à l\'école + 33h d\'e-learning adaptables — je suis disponible dès maintenant.',
    'Mon parcours est atypique : après une Licence de biologie (mention Biologie-Santé) à l\'UPEC et un stage en laboratoire, j\'ai fait le choix de basculer vers l\'informatique et l\'IA, un domaine qui me passionne et dans lequel je progresse rapidement.',
    'En dehors du code, je suis passionné de jeux vidéo, mangas, animés et de zoologie — actuelle, ancienne et spéculative. Ces centres d\'intérêt nourrissent ma curiosité et ma créativité.'
  ],
  networks: [
    { name: 'Email', url: 'mailto:chikha_a@etna-alternance.net' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alexandre-chikhaoui-a577923aa/' }
  ]
};

const skills: SkillGroup[] = [
  {
    category: 'Langages',
    items: [
      { name: 'Python (POO)', level: 40 },
      { name: 'JavaScript', level: 45 },
      { name: 'TypeScript', level: 45}
    ]
  },
  {
    category: 'Frameworks front-end',
    items: [
      { name: 'Vue.js', level: 45 },
      { name: 'React', level: 40 },
      { name: 'AngularJS', level: 40 }
    ]
  },
  {
    category: 'Outils & Infrastructure',
    items: [
      { name: 'Git / GitHub', level: 50 },
      { name: 'Docker', level: 70 },
      { name: 'Node.js', level: 40 },
      { name: 'PostgreSQL', level: 40 }
    ]
  }
];

const technologies = [
  { name: 'Python' }, { name: 'JavaScript' },
  { name: 'TypeScript' }, { name: 'Vue.js' },
  { name: 'React' }, { name: 'AngularJS' },
  { name: 'Git' }, { name: 'Node.js' },
  { name: 'Docker' },{ name: 'PostgreSQL' }, 
  { name: 'Bash' },{ name: 'Office 365' }, 
  { name: 'Linux' },
];

const journey: JourneyStep[] = [
  {
    date: 'Mars 2026 — Présent',
    title: 'Bachelor Développement Informatique',
    location: 'ETNA — Ivry-sur-Seine (94200)',
    description: 'Spécialisation Intelligence Artificielle. En Code2Work.'
  },
  {
    date: 'Avr. — Juin 2025',
    title: 'Stagiaire',
    location: 'Plateau technique Biomega — Saint-Maur-des-Fossés (94100)',
    description: 'Stage de 7 semaines en laboratoire, découverte de nommbreuses techniques de tests biomédicaux en hématologie, bactériologie et biochimie.'
  },
  {
    date: 'Sept. 2022 — Juil. 2025',
    title: 'Licence de Biologie',
    location: 'UPEC — Créteil (94000)',
    description: 'Mention Biologie-Santé.'
  }
];

defineExpose({
  profile,
  skills,
  technologies,
  journey
});
</script>

<template>
  <main class="page-about">
    <div class="container">
      <header class="page-header">
        <h1 class="section-title">À propos de moi</h1>
        <p class="section-subtitle">
          Mon parcours, mes compétences et ce qui me passionne.
        </p>
      </header>

      <div class="about__grid">
        <aside class="about__left-column">
          <div class="about__avatar">
            <span class="about__initials">{{ profile.initials }}</span>
          </div>

          <div class="about__info">
            <h2 class="about__name">{{ profile.name }}</h2>
            <p class="about__title">{{ profile.title }}</p>
            <p class="about__location">📍 {{ profile.location }}</p>
          </div>

          <a href="/CV_2026-04-15_Alexandre_CHIKHAOUI.pdf" download class="btn btn-primary about__btn-cv">
            Télécharger mon CV ↓
          </a>

          <div class="about__socials">
            <a
              v-for="network in profile.networks"
              :key="network.name"
              :href="network.url"
              target="network.url.startsWith('htpp') ? '_blank' : null"
              rel="noopener"
              class="network-link"
            >
              {{ network.name }} ↗
            </a>
          </div>
        </aside>

        <div class="about__right-column">
          <section class="about__section">
            <h3 class="about__section-title">Qui suis-je ?</h3>
            <p v-for="para in profile.bio" :key="para" class="about__para">
              {{ para }}
            </p>
          </section>

          <section class="about__section">
            <h3 class="about__section-title">Compétences techniques</h3>
            <div v-for="group in skills" :key="group.category" class="skills__group">
              <h4 class="skills__category">{{ group.category }}</h4>
              <div v-for="skill in group.items" :key="skill.name" class="skill">
                <div class="skill__header">
                  <span class="skill__name">{{ skill.name }}</span>
                </div>
                <div class="skill__bar-bg">
                  <div class="skill__bar-fill" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </section>

          <section class="about__section">
            <h3 class="about__section-title">Technologies & outils</h3>
            <div class="tech__grid">
              <span v-for="tech in technologies" :key="tech.name" class="tech__badge">
                {{ tech.name }}
              </span>
            </div>
          </section>

          <section class="about__section">
            <h3 class="about__section-title">Mon parcours</h3>
            <div class="timeline">
              <div v-for="step in journey" :key="step.date" class="timeline__step">
                <div class="timeline__date">{{ step.date }}</div>
                <div class="timeline__content">
                  <h4 class="timeline__title">{{ step.title }}</h4>
                  <p class="timeline__location">{{ step.location }}</p>
                  <p class="timeline__desc">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page-about {
  padding: 5rem 0 8rem;
}

.page-header {
  margin-bottom: 4rem;
  text-align: center;
}

.about__grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 4rem;
  align-items: start;
  margin: 0 auto;
  max-width: 1200px;
}

.about__left-column {
  position: sticky;
  top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
}

.about__avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: var(--c-card-bg);
  border: 1px solid var(--c-border);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.about__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__initials {
  font-family: var(--font-title);
  font-size: 52px;
  font-style: italic;
  color: var(--c-text-soft);
}

.about__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about__name {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 400;
}

.about__title {
  font-size: 13px;
  color: var(--c-text-soft);
}

.about__location {
  font-size: 12px;
  color: var(--c-text-very-soft);
}

.about__btn-cv {
  width: 100%;
  justify-content: center;
}

.about__socials {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.network-link {
  font-size: 13px;
  color: var(--c-text-soft);
  padding: 8px 0;
  border-bottom: 1px solid var(--c-border);
  transition: color 0.2s;
  text-align: left;
}

.network-link:hover {
  color: var(--c-text);
}

.about__right-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.about__section {
  margin-bottom: 3.5rem;
  width: 100%;
  max-width: 600px;
}

.about__section-title {
  font-family: var(--font-title);
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--c-border);
  text-align: center;
}

.about__para {
  font-size: 15px;
  color: var(--c-text-soft);
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: center;
}

.skills__group {
  margin-bottom: 2rem;
}

.skills__category {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-text-very-soft);
  margin-bottom: 1rem;
  text-align: center;
}

.skill {
  margin-bottom: 1rem;
}

.skill__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.skill__name {
  font-size: 14px;
  font-weight: 500;
}

.skill__level {
  font-size: 13px;
  color: var(--c-text-very-soft);
}

.skill__bar-bg {
  width: 100%;
  height: 8px;
  background: var(--c-bordure);
  border-radius: 999px;
  overflow: hidden;
}

.skill__bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  border-radius: 999px;
  width: 0;
  animation: loadSkill 1s ease forwards;
}

@keyframes loadSkill {
  from {
    width: 0;
  }
}

@keyframes fill {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

.tech__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tech__badge {
  font-size: 12px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: var(--radius-md);
  border: 1px solid var(--c-border);
  background: var(--c-card-bg);
  color: var(--c-text);
  transition: border-color 0.2s, background 0.2s;
  cursor: default;
}

.tech__badge:hover {
  border-color: var(--c-border-strong);
  background: var(--c-bg);
}

.timeline {
  position: relative;
  padding-left: 1.5rem;
  width: 100%;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 6px;
  bottom: 0;
  width: 1px;
  background: var(--c-border);
  transform: translateX(-50%);
}

.timeline__step {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  position: relative;
  width: 100%;
}

.timeline__step::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--c-card-bg);
  border: 1.5px solid var(--c-text);
  transform: translateX(-50%);
}

.timeline__date {
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-very-soft);
  padding-top: 2px;
  letter-spacing: 0.02em;
  text-align: right;
}

.timeline__title {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 2px;
}

.timeline__location {
  font-size: 13px;
  color: var(--c-text-soft);
  margin-bottom: 6px;
}

.timeline__desc {
  font-size: 13px;
  color: var(--c-text-soft);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
    max-width: 800px;
  }

  .about__left-column {
    position: static;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    flex-wrap: wrap;
    justify-content: center;
  }

  .about__avatar { width: 100px; height: 100px; flex-shrink: 0; }
  .about__initials { font-size: 32px; }

  .about__btn-cv,
  .about__socials { width: auto; }

  .about__right-column {
    align-items: center;
  }

  .timeline__step {
    grid-template-columns: 1fr;
    gap: 0.25rem;
    text-align: center;
  }

  .timeline__date { padding-top: 0; text-align: center; }
  .timeline::before { left: 50%; }
  .timeline__step::before { left: 50%; }
}

@media (max-width: 640px) {
  .about__left-column {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about__section {
    text-align: left;
  }

  .timeline__step {
    text-align: left;
  }
}
</style>