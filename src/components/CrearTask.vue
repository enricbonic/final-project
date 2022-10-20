<template>
  <section class="addTask">
        <h1>Tasca nova</h1>
        <form  @submit.prevent="addTask()" id="form" action="">
            <label for="title">Títol</label>
            <input v-model="title" class="title" type="text" id="title" placeholder="Què has de fer?">
           
            <label for="description">Detalls</label>
            <textarea v-model="description" name="description" id="description" cols="30" rows="10"
                placeholder="Explica-li què ha de fer al teu jo del futur."></textarea>
           <br>
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
    router.push({ name: 'maintasks' });
});
</script>

<style scoped>
form{
    display: flex;
    background-color: rgb(236, 236, 236);
    flex-direction: column;
    padding: 20px;
    margin: 50px;
}
form>input{
    height: 50px;
    border: 0;
}
form>textarea{
    border: 0;
    width: 100%;
    min-height: 200px;
}
form>button{
    height: 50px;
    border: 0;
    background-color:cornflowerblue;
}
</style>