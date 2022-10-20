<template>
  <!-- formulari
  botó
  console.log
  passar-ho a supabase -->
  <section class="contactUs">
        <h1>Tasca nova</h1>
        <br>
        <form  @submit.prevent="addTask()" id="form" action="">
            <label for="title">Títol</label>
            <input v-model="title" class="title" type="text" id="fullName" placeholder="Què has de fer?">
           
            <label for="description">Detalls</label>
            <textarea v-model="description" name="description" id="description" cols="30" rows="10"
                placeholder="Explica-li què ha de fer al teu jo del futur."></textarea>
            <button class="submit" id="submit" type="submit">Crea el recordatori</button>
        </form>
    </section>



  </template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTaskStore } from '../store/task';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();
const router = useRouter();
const taskStore = useTaskStore();
const title = ref('');
const description = ref('');

console.log(`Títol: ${title.value}`);
console.log(`Descripció: ${description.value}`);

const addTask = (async () => {
    taskStore.addTask(title.value, description.value, authStore.user.id);
    // router.push({ name: 'maintasks' });
});
</script>

<style>

</style>