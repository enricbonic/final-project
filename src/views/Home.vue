<template>
    <h1>Home</h1>
   <router-link :to="{ name: 'login' }"><button class="button is-link is-fullwidth" type="submit" placeholder="logout">Log Out</button></router-link>
   <!-- <router-link :to="{name: 'creartask'}"><button>Tasca nova</button></router-link> -->
<section>
    <CrearTask />
    <div v-for="task in taskStore.task">
        <MainTasks :task="task"/>
    </div>

</section>

</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import { useTaskStore } from '../store/task'
import MainTasks from '../components/MainTasks.vue'
import CrearTask from '../components/CrearTask.vue'

const router = useRouter();
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const taskStore = useTaskStore();

const onSubmit = () => {
    console.log('formulario enviado', email.value, password.value)
    authStore.logOut(email.value, password.value);
    router.push({ name: 'login' })
};
taskStore.setTask()

</script>
<style scoped>
</style>