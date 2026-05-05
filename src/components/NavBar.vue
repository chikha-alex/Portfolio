<template>
  <nav class="nav" :class="{ 'nav--scrollee': estScrollee }">
    <div class="conteneur nav__inner">
 
      <RouterLink to="/" class="nav__logo">AC.Dev</RouterLink>
 
      <ul class="nav__liens">
        <li v-for="lien in liens" :key="lien.route">
          <RouterLink
            :to="lien.route"
            class="nav__lien"
            :class="{ 'nav__lien--actif': $route.name === lien.nom }"
          >
            {{ lien.label }}
          </RouterLink>
        </li>
      </ul>
 
      <button
        class="nav__burger"
        @click="menuOuvert = !menuOuvert"
        :aria-expanded="menuOuvert"
        aria-label="Menu"
      >
        <span class="burger-barre" :class="{ 'actif': menuOuvert }"></span>
        <span class="burger-barre" :class="{ 'actif': menuOuvert }"></span>
        <span class="burger-barre" :class="{ 'actif': menuOuvert }"></span>
      </button>
    </div>
 
    <Transition name="menu-mobile">
      <div v-if="menuOuvert" class="nav__mobile">
        <RouterLink
          v-for="lien in liens"
          :key="lien.route"
          :to="lien.route"
          class="nav__mobile-lien"
          @click="menuOuvert = false"
        >
          {{ lien.label }}
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>
 
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
 
const liens = [
  { nom: 'accueil',  route: '/',          label: 'Accueil'  },
  { nom: 'a-propos', route: '/about',  label: 'À propos' },
  { nom: 'portfolio', route: '/portfolio', label: 'Portfolio' }
]
 
const menuOuvert = ref(false)
 
const estScrollee = ref(false)
 
function gererScroll() {
  estScrollee.value = window.scrollY > 20
}
 
onMounted(() => window.addEventListener('scroll', gererScroll))
onUnmounted(() => window.removeEventListener('scroll', gererScroll))
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--c-fond);
  border-bottom: 1px solid var(--c-bordure);
  transition: box-shadow 0.2s;
}
 
.nav--scrollee {
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
 
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
 
.nav__logo {
  font-family: var(--font-titre);
  font-size: 18px;
  font-style: italic;
  letter-spacing: -0.3px;
  color: var(--c-texte);
}
 
.nav__liens {
  display: flex;
  gap: 2rem;
}
 
.nav__lien {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-texte-doux);
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
}

.nav__lien::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--c-texte);
  transition: width 0.25s ease;
}
 
.nav__lien:hover,
.nav__lien--actif {
  color: var(--c-texte);
}
 
.nav__lien--actif::after,
.nav__lien:hover::after {
  width: 100%;
}
 
/* === BURGER (mobile) === */
.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
 
.burger-barre {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--c-texte);
  transition: transform 0.25s, opacity 0.25s;
  transform-origin: center;
}
 
.burger-barre:nth-child(1).actif { transform: rotate(45deg) translate(4px, 4px); }
.burger-barre:nth-child(2).actif { opacity: 0; }
.burger-barre:nth-child(3).actif { transform: rotate(-45deg) translate(4px, -4px); }
 
/* === MENU MOBILE === */
.nav__mobile {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--c-bordure);
  background: var(--c-fond);
}
 
.nav__mobile-lien {
  padding: 1rem 1.25rem;
  font-size: 15px;
  font-weight: 500;
  border-bottom: 1px solid var(--c-bordure);
  color: var(--c-texte);
  transition: background 0.15s;
}
 
.nav__mobile-lien:hover {
  background: var(--c-fond-carte);
}

.menu-mobile-entrer-active,
.menu-mobile-sortir-active {
  transition: opacity 0.2s, transform 0.2s;
}
.menu-mobile-entrer-de  { opacity: 0; transform: translateY(-8px); }
.menu-mobile-sortir-vers { opacity: 0; transform: translateY(-8px); }

@media (max-width: 640px) {
  .nav__liens  { display: none; }
  .nav__burger { display: flex; }
}
</style>