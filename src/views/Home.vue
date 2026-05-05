<script setup lang="ts">
interface Profile {
  firstName: string;
  lastName: string;
  initials: string;
  title: string;
  tagline: string;
}

interface Card {
  route: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

const profile: Profile = {
  firstName: 'Alexandre',
  lastName: 'Chikhaoui',
  initials: 'AC',
  title: 'Développeur IA · Étudiant à l\'ETNA',
  tagline: 'En recherche d\'alternance pour un Bachelor 3ème année — disponible dès maintenant.',
};

const cards: Card[] = [
  {
    route: '/about',
    title: 'Mon parcours & compétences',
    description: 'De la biologie à l\'IA — découvrez mon parcours atypique, mes compétences techniques et mes aspirations.'
  },
  {
    route: '/portfolio',
    title: 'Mes projets académiques',
    description: 'CBI1, Docker, FDL-UNIX, Python Quizify — des projets concrets réalisés à l\'ETNA.'
  }
];

</script>

<template>
  <main>
    <section class="hero">
      <div class="conteneur hero__inner">

        <div class="hero__texte">
          <p class="hero__surtitre">Disponible en alternance dès maintenant</p>

          <h1 class="hero__titre">
            Bonjour, je suis<br>
            <em>{{ profile.firstName }} {{ profile.lastName }}</em>
          </h1>

          <p class="hero__sous-titre">
            {{ profile.title }} ·
            {{ profile.tagline }}
          </p>

          <div class="hero__boutons">
            <RouterLink to="/portfolio" class="btn btn-principal">
              Voir mes projets →
            </RouterLink>
            <RouterLink to="/a-propos" class="btn">
              En savoir plus
            </RouterLink>
          </div>
        </div>

        <div class="hero__visuel">
          <div class="avatar">
            <div class="avatar__anneau">
              <div class="avatar__point"></div>
            </div>
            <span class="avatar__initiales">{{ profile.initials }}</span>
          </div>
        </div>

      </div>
    </section>

    <section class="apercu">
      <div class="conteneur">

        <h2 class="section-titre">Ce que vous trouverez ici</h2>
        <p class="section-sous-titre">
          Vous pouvez voir mon parcours étudiant ainsi qu'un portfolio retraçant tous les projets que j'ai fait jusqu'à présent.
        </p>

        <div class="apercu__grille">
          <RouterLink
            v-for="(card, i) in cards"
            :key="card.route"
            :to="card.route"
            class="apercu__carte"
            :style="{ animationDelay: `${i * 0.1}s` }"
          >
            <div class="apercu__carte-numero">0{{ i + 1 }}</div>
            <h3 class="apercu__carte-titre">{{ card.title }}</h3>
            <p class="apercu__carte-desc">{{ card.description }}</p>
            <span class="apercu__carte-fleche">↗</span>
          </RouterLink>
        </div>

      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid var(--c-bordure);
  padding: 4rem 0 6rem;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero__surtitre {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-texte-tres-doux);
  margin-bottom: 1.25rem;
}

.hero__surtitre::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.hero__titre {
  font-family: var(--font-titre);
  font-size: 62px;
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -1px;
  margin-bottom: 1.25rem;
  animation: monter 0.7s ease both;
}

.hero__titre em {
  font-style: italic;
  color: var(--c-texte-doux);
}

.hero__sous-titre {
  font-size: 16px;
  color: var(--c-texte-doux);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 420px;
  animation: monter 0.7s 0.1s ease both;
}

.hero__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 2rem;
  animation: monter 0.7s 0.15s ease both;
}

.hero__boutons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  animation: monter 0.7s 0.2s ease both;
}

.hero__visuel {
  display: flex;
  justify-content: center;
  animation: apparaitre 1s 0.3s ease both;
}

.avatar {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: var(--c-fond-carte);
  border: 1px solid var(--c-bordure);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.avatar__anneau {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 1px dashed var(--c-bordure-forte);
  animation: tourner 25s linear infinite;
}

.avatar__point {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--c-texte);
}

.avatar__initiales {
  font-family: var(--font-titre);
  font-size: 72px;
  font-style: italic;
  color: var(--c-texte-doux);
  letter-spacing: -3px;
}

.scroll-indic {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.4;
}

.scroll-indic__texte {
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-indic__ligne {
  width: 1px;
  height: 40px;
  background: var(--c-texte);
  animation: ligne-scroll 1.5s ease infinite;
  transform-origin: top;
}

@keyframes ligne-scroll {
  0%   { transform: scaleY(0); opacity: 0; }
  50%  { transform: scaleY(1); opacity: 1; }
  100% { transform: scaleY(0); opacity: 0; transform-origin: bottom; }
}

.apercu {
  padding: 6rem 0;
  border-bottom: 1px solid var(--c-bordure);
}

.apercu__grille {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.apercu__carte {
  display: block;
  background: var(--c-fond-carte);
  border: 1px solid var(--c-bordure);
  border-radius: var(--rayon-lg);
  padding: 2rem;
  cursor: pointer;
  color: var(--c-texte);
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  animation: monter 0.6s ease both;
}

.apercu__carte:hover {
  border-color: var(--c-bordure-forte);
  transform: translateY(-3px);
  box-shadow: var(--ombre-carte);
}

.apercu__carte-numero {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--c-texte-tres-doux);
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.apercu__carte-titre {
  font-family: var(--font-titre);
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.apercu__carte-desc {
  font-size: 14px;
  color: var(--c-texte-doux);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.apercu__carte-fleche {
  font-size: 20px;
  color: var(--c-texte-tres-doux);
  transition: color 0.2s;
}

.apercu__carte:hover .apercu__carte-fleche {
  color: var(--c-texte);
}

.stats {
  padding: 4rem 0;
}
 
.stats__grille {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}
 
.stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;
  border-right: 1px solid var(--c-bordure);
  text-align: center;
}
 
.stats__item:first-child { border-left: 1px solid var(--c-bordure); }
 
.stats__nombre {
  font-family: var(--font-titre);
  font-size: 44px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0.5rem;
}
 
.stats__label {
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-texte-tres-doux);
}

@media (max-width: 768px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
 
  .hero__visuel { order: -1; }
 
  .hero__titre { font-size: 40px; }
 
  .hero__sous-titre { margin: 0 auto 1.5rem; }
 
  .hero__badges { justify-content: center; }
 
  .hero__boutons { justify-content: center; }
 
  .apercu__grille { grid-template-columns: 1fr; }
 
  .stats__grille { grid-template-columns: repeat(2, 1fr); }
 
  .stats__item:nth-child(2) { border-right: none; }
  .stats__item:nth-child(3) { border-left: 1px solid var(--c-bordure); border-top: 1px solid var(--c-bordure); }
  .stats__item:nth-child(4) { border-top: 1px solid var(--c-bordure); border-right: none; }
 
  .scroll-indic { display: none; }
}
</style>