<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  nom: '',
  email: '',
  message: ''
})

function envoyerFormulaire() {
  console.log(form)

  alert('Message envoyé !')

  form.nom = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <section class="contact">
    <div class="conteneur">
      <h1>Contact</h1>

      <form class="contact__formulaire" @submit.prevent="envoyerFormulaire">

        <div class="champ">
          <label for="nom">Nom</label>
          <input
            id="nom"
            v-model="form.nom"
            type="text"
            required
          />
        </div>

        <div class="champ">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
          />
        </div>

        <div class="champ">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit">
          Envoyer
        </button>

      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 4rem 0;
}

.contact__formulaire {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
}

.champ {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  padding: 1rem;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 8px;
}
</style>